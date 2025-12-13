import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { agentRunId, output, patch, reasoning, logs } = await req.json();

  if (!agentRunId) {
    return NextResponse.json({ error: "agentRunId missing" }, { status: 400 });
  }

  await prisma.clineRun.create({
    data: {
      agentRunId,
      output,
      patch,
      reasoning,
      logs,
    },
  });

  await prisma.agentRun.update({
    where: { id: agentRunId },
    data: { status: "success" },
  });

  return NextResponse.json({ ok: true });
}
