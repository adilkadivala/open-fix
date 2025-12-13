import { prisma } from "@/lib/prisma";

export default async function AgentRunDetail(props: any) {
  const { id } = await props.params;

  const run = await prisma.agentRun.findUnique({
    where: { id },
    include: {
      project: true,
      issue: true,
      kestraRun: true,
      clineRun: true,
    },
  });

  if (!run) return <p>Run not found</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Agent Run #{id.slice(0, 6)}</h1>

      {/* KESTRA */}
      <section className="p-4 border rounded bg-neutral-100 dark:bg-neutral-800">
        <h2 className="font-semibold">Kestra Flow</h2>
        <pre className="text-xs mt-2 whitespace-pre-wrap">
          {JSON.stringify(run.kestraRun?.logs, null, 2)}
        </pre>
      </section>

      {/* CLINE */}
      <section className="p-4 border rounded bg-neutral-100 dark:bg-neutral-800">
        <h2 className="font-semibold">Cline Patch Output</h2>

        <pre className="text-xs mt-2 whitespace-pre-wrap bg-black text-green-400 p-3 rounded">
          {run.clineRun?.patch ?? "No patch generated"}
        </pre>
      </section>
    </div>
  );
}
