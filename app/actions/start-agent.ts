"use server";

import { prisma } from "@/lib/prisma";

export async function startAgent(projectId: string, issueId: string) {
  const run = await prisma.agentRun.create({
    data: {
      status: "pending",
      runType: "fix_issue",
      projectId,
      issueId,
    },
  });

  // Later steps:
  // 1. Trigger Kestra Flow
  // 2. Start Cline autonomous coding
  // 3. Call Together.ai for reasoning
  // 4. Evaluate with Oumi
  // 5. Update prisma.agentRun

  return run;
}
