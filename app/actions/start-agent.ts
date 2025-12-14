"use server";

import { prisma } from "@/lib/prisma";

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

    console.log("🚀 Triggering Kestra flow");

    const kestraUrl = process.env.KESTRA_URL;

    const response = await fetch(`${kestraUrl}/api/v1/executions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        namespace: "openfix",
        flowId: "fix_issue_flow",
        inputs: {
          agentRunId: agentRun.id,
          repoUrl: project.repoUrl,
          issueTitle: issue.title,
          issueBody: issue.body ?? "",
          openaiApiKey: process.env.OPENAI_API_KEY || "",
        },
      }),
    });

    console.log("📥 Kestra response:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error:", errorText);

      await prisma.agentRun.update({
        where: { id: agentRun.id },
        data: { status: "failed" },
      });

      throw new Error(`Kestra failed: ${response.status}`);
    }

    const kestraData = await response.json();
    console.log("✅ Kestra execution:", kestraData.id);

    await prisma.kestraRun.create({
      data: {
        agentRunId: agentRun.id,
        flowId: kestraData.id,
        flowStatus: kestraData.state,
        logs: {},
        summary: null,
        evaluation: {},
      },
    });

    await prisma.agentRun.update({
      where: { id: agentRun.id },
      data: { status: "running" },
    });

    return agentRun;
  } catch (err) {
    console.error("❌ Error:", err);
    throw err;
  }
}