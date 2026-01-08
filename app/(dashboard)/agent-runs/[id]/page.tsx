import { prisma } from "@/lib/prisma";

export default async function AgentRunDetail(props: any) {
  const { id } = await props.params;

  const run = await prisma.agentRun.findUnique({
    where: { id },
    include: {
      project: true,
      issue: true,
      aiRun: true,
    },
  });

  if (!run) return <p>Run not found</p>;

  return (
    <div className="space-y-6 px-4">
      <h1 className="text-xl font-semibold">Agent Run #{id.slice(0, 6)}</h1>

      {/* Project and Issue Info */}
      <div className="p-4 border rounded bg-neutral-100 dark:bg-neutral-800">
        <h2 className="font-semibold mb-2">Issue Details</h2>
        <p className="text-sm text-neutral-500">
          {run.project?.repoOwner}/{run.project?.repoName}
        </p>
        <p className="font-medium">{run.issue?.title}</p>
      </div>

      {/* AI Response */}
      {run.aiRun && (
        <>
          {/* Explanation */}
          <section className="p-4 border rounded bg-neutral-100 dark:bg-neutral-800">
            <h2 className="font-semibold">AI Analysis</h2>
            <pre className="text-xs mt-2 whitespace-pre-wrap">
              {JSON.stringify(JSON.parse(run.aiRun.response), null, 2)}
            </pre>
          </section>

          {/* Steps */}
          <section className="p-4 border rounded bg-neutral-100 dark:bg-neutral-800">
            <h2 className="font-semibold mb-4">Step-by-Step Fix</h2>
            <div className="space-y-2">
              {Array.isArray(run.aiRun.steps) && run.aiRun.steps.map((step: any, index: number) => (
                <div key={index} className="flex gap-3">
                  <span className="font-mono text-sm text-neutral-500">
                    {index + 1}.
                  </span>
                  <p className="text-sm">{typeof step === 'string' ? step : JSON.stringify(step)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Files */}
          <section className="p-4 border rounded bg-neutral-100 dark:bg-neutral-800">
            <h2 className="font-semibold mb-4">Files to Update</h2>
            <div className="space-y-4">
              {Array.isArray(run.aiRun.files) && run.aiRun.files.map((file: any, index: number) => (
                <div key={index} className="border-l-2 border-neutral-300 pl-4">
                  <p className="font-medium">{file.path}</p>
                  <p className="text-sm text-neutral-500 mt-1">{file.changes}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {!run.aiRun && (
        <p className="text-neutral-500">No AI analysis available yet.</p>
      )}
    </div>
  );
}

