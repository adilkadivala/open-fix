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

    const response = await fetch(
      `${process.env.KESTRA_URL}/api/v1/executions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.KESTRA_API_KEY}`,
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
          },
        }),
      }
    );

    console.log(response);

    if (!response.ok) {
      await prisma.agentRun.update({
        where: { id: agentRun.id },
        data: { status: "failed" },
      });
      throw new Error("Kestra trigger failed");
    }

    const kestraData = await response.json();

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
    console.error("startAgent error:", err);
    throw err;
  }
}
