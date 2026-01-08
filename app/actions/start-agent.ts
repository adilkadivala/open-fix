"use server";
import { prisma } from "@/lib/prisma";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function startAgent(projectId: string, issueId: string) {
  try {
    const project = await prisma.repos.findUnique({ where: { id: projectId } });
    const issue = await prisma.issue.findUnique({ where: { id: issueId } });

    if (!project || !issue) {
      throw new Error("Project or Issue not found");
    }

    const agentRun = await prisma.agentRun.create({
      data: {
        projectId,
        issueId,
        status: "pending",
        runType: "fix_issue",
      },
    });

    console.log("Analyzing issue with groq...");

    const prompt = `You are an expert software engineer. Analyze this GitHub issue and provide a step-by-step solution.

      Repository: ${project.repoOwner}/${project.repoName}
      Issue Title: ${issue.title}
      Issue Body: ${issue.body ?? "No description"}

      Please provide:
      1. A clear explanation of the issue
      2. Step-by-step instructions to fix it
      3. List of files that need to be updated with specific changes

      Format your response as JSON with the following structure:
      {
        "explanation": "...",
        "steps": ["step 1", "step 2", ...],
        "files": [
          {
            "path": "file/path.js",
            "changes": "description of changes"
          }
        ]
      }`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
      messages: [
        {
          role: "system",
          content:
            "You are an expert software engineer. Always respond with valid JSON only.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
    });

    const responseText = completion.choices[0]?.message?.content || "{}";
    const aiResponse = JSON.parse(responseText);

    console.log("groq response received");

    await prisma.aIRun.create({
      data: {
        agentRunId: agentRun.id,
        prompt,
        response: responseText,
        steps: aiResponse.steps || [],
        files: aiResponse.files || [],
      },
    });

    await prisma.agentRun.update({
      where: { id: agentRun.id },
      data: { status: "success" },
    });

    return agentRun;
  } catch (err) {
    console.error("Error in startAgent:", err);
    // Update status to failed
    try {
      const project = await prisma.repos.findUnique({
        where: { id: projectId },
      });
      const issue = await prisma.issue.findUnique({ where: { id: issueId } });
      if (project && issue) {
        const runs = await prisma.agentRun.findFirst({
          where: { projectId, issueId, status: "pending" },
        });
        if (runs) {
          await prisma.agentRun.update({
            where: { id: runs.id },
            data: { status: "failed" },
          });
        }
      }
    } catch (updateErr) {
      console.error("Failed to update status:", updateErr);
    }
    throw err;
  }
}
