import { syncIssues } from "@/app/actions/sync-issues";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { StreamingAgent } from "@/components/streaming-agent";

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
        <div key={issue.id}>
          <div className="p-4 border rounded mb-4">
            <p className="font-semibold text-lg">
              #{issue.githubIssueId} {issue.title}
            </p>
            <p className="text-sm text-neutral-500">{issue.state}</p>
          </div>
          <div className="mb-8 ml-4">
            <StreamingAgent
              projectId={project.id}
              issueId={issue.id}
              issueTitle={issue.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}



