import { startAgent } from "@/app/actions/start-agent";
import { syncIssues } from "@/app/actions/sync-issues";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function ProjectIssuesPage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await params;

  const project = await prisma.repos.findUnique({
    where: { id },
    include: { issues: true },
  });

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="space-y-5 px-4">
      <h1 className="text-xl font-semibold">
        {project.repoOwner}/{project.repoName} — Issues
      </h1>

      <form
        action={async () => {
          "use server";
          await syncIssues(project.id);
        }}
      >
        <Button>Sync Issues</Button>
      </form>

      {project.issues.map((issue) => (
        <div key={issue.id} className="p-4 border rounded">
          <p className="font-semibold text-lg">
            #{issue.githubIssueId} {issue.title}
          </p>
          <p className="text-sm text-neutral-500">{issue.state}</p>

          <form
            action={async () => {
              "use server";
              await startAgent(project.id, issue.id);
            }}
          >
            <Button>Run AI Agent</Button>
          </form>
        </div>
      ))}
    </div>
  );
}



