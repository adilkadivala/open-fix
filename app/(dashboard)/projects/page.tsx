import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await prisma.repos.findMany({
    include: { _count: { select: { issues: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6 px-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-neutral-500">Manage your active projects and issues.</p>
        </div>
        <Button asChild>
          <Link href="/repos">New Project</Link>
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50 border-dashed">
          <GitBranch className="h-10 w-10 text-neutral-400 mb-4" />
          <h3 className="text-lg font-medium">No projects yet</h3>
          <p className="text-sm text-neutral-500 mb-4">
            Import a repository to get started.
          </p>
          <Button asChild variant="outline">
            <Link href="/repos">Import Repository</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link href={`/projects/${p.id}/issues`} key={p.id} className="block group">
              <Card className="h-full transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {p.repoOwner}/{p.repoName}
                  </CardTitle>
                  <CardDescription className="line-clamp-1">
                     {p.repoUrl}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {p._count.issues} Issues Synced
                    </span>
                    <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}