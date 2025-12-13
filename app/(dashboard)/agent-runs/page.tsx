import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AgentRunsPage() {
  const runs = await prisma.agentRun.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      project: true,
      issue: true,
      kestraRun: true,
      clineRun: true,
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Agent Runs</h1>

      <div className="space-y-4">
        {runs.map((run) => (
          <Link
            href={`/dashboard/agent-runs/${run.id}`}
            key={run.id}
            className="block p-4 rounded-lg border bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">
                  Run #{run.id.slice(0, 6)} — {run.runType}
                </p>
                <p className="text-sm text-neutral-500">
                  Issue: #{run.issue?.githubIssueId} {run.issue?.title}
                </p>
                <p className="text-sm text-neutral-500">
                  Project: {run.project.repoOwner}/{run.project.repoName}
                </p>
              </div>

              <div className="flex gap-3 text-sm">
                <span
                  className={`${
                    run.kestraRun ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Kestra
                </span>
                <span
                  className={`${
                    run.clineRun ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Cline
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
