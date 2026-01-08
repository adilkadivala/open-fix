import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
import { prisma } from "@/lib/prisma";

type AIPatch = {
  filePath: string;
  newContent: string;
};

export async function POST(req: Request) {
  const { agentRunId } = await req.json();

  // 1. LOAD RUN + RELATIONS
  const run = await prisma.agentRun.findUnique({
    where: { id: agentRunId },
    include: { project: true, aiRun: true },
  });

  if (!run) {
    return NextResponse.json({ error: "Agent run not found" }, { status: 404 });
  }

  if (!run.project) {
    return NextResponse.json(
      { error: "Project not associated with run" },
      { status: 400 }
    );
  }

  if (!run.aiRun) {
    return NextResponse.json(
      { error: "AI output not found for this run" },
      { status: 400 }
    );
  }

  // Extract files from AI response
  let patch: AIPatch | undefined;
  
  try {
    const aiResponse = JSON.parse(run.aiRun.response);
    if (Array.isArray(aiResponse.files) && aiResponse.files.length > 0) {
      const firstFile = aiResponse.files[0];
      patch = {
        filePath: firstFile.path,
        newContent: firstFile.changes || "",
      };
    }
  } catch {
    return NextResponse.json(
      { error: "Invalid AI response format" },
      { status: 400 }
    );
  }

  if (!patch) {
    return NextResponse.json(
      { error: "Patch is missing from AI output" },
      { status: 400 }
    );
  }

  if (!patch.filePath || !patch.newContent) {
    return NextResponse.json(
      { error: "Patch is incomplete (missing filePath or newContent)" },
      { status: 400 }
    );
  }

  const { repoOwner, repoName } = run.project;

  // 2. INIT GITHUB API
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_TOKEN,
  });

  // 3. CREATE A NEW BRANCH
  const branchName = `openfix-${agentRunId}`;

  // Get default branch SHA
  const repoInfo = await octokit.repos.get({
    owner: repoOwner,
    repo: repoName,
  });

  const defaultBranch = repoInfo.data.default_branch;

  await octokit.git.createRef({
    owner: repoOwner,
    repo: repoName,
    ref: `refs/heads/${branchName}`,
    sha: repoInfo.data.default_branch,
  });

  // 4. APPLY THE PATCH
  await octokit.repos.createOrUpdateFileContents({
    owner: repoOwner,
    repo: repoName,
    path: patch.filePath,
    message: `Fix by OpenFix.AI for Run ${agentRunId}`,
    content: Buffer.from(patch.newContent).toString("base64"),
    branch: branchName,
  });

  // 5. CREATE THE PR
  const pr = await octokit.pulls.create({
    owner: repoOwner,
    repo: repoName,
    title: `Fix from OpenFix.AI (Run ${agentRunId})`,
    head: branchName,
    base: defaultBranch,
  });

  return NextResponse.json({ pr: pr.data });
}

