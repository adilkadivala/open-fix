import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
import { prisma } from "@/lib/prisma";

type ClinePatch = {
  filePath: string;
  newContent: string;
};

export async function POST(req: Request) {
  const { agentRunId } = await req.json();

  // 1. LOAD RUN + RELATIONS
  const run = await prisma.agentRun.findUnique({
    where: { id: agentRunId },
    include: { project: true, clineRun: true },
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

  if (!run.clineRun) {
    return NextResponse.json(
      { error: "Cline output not found for this run" },
      { status: 400 }
    );
  }

  let patch: ClinePatch | undefined;

  if (typeof run.clineRun.patch === "string") {
    try {
      const parsed = JSON.parse(run.clineRun.patch);

      if (
        typeof parsed?.filePath === "string" &&
        typeof parsed?.newContent === "string"
      ) {
        patch = parsed;
      }
    } catch {
      // invalid JSON
    }
  }

  if (!patch) {
    return NextResponse.json(
      { error: "Patch is missing from Cline output" },
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
  const baseBranchSha = repoInfo.data.pushed_at // TEMP FIX
    ? repoInfo.data.pushed_at
    : "main";

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
