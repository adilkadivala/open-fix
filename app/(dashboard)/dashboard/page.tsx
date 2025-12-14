import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, GitBranch, Zap } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return <p>Please sign in</p>;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      projects: {
        include: {
          _count: { select: { issues: true } }
        }
      }
    }
  });

  const recentRuns = await prisma.agentRun.findMany({
    where: { project: { userId: user?.id } },
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      project: true,
      issue: true,
    },
  });

  return (
    <div className="space-y-8 px-4 lg:px-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
        <p className="text-slate-500 mt-2">
          Manage your repositories and AI-powered issue fixes
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-white dark:bg-neutral-800">
          <div className="flex items-center gap-3 mb-2">
            <Github className="h-5 w-5 text-slate-500" />
            <h3 className="font-semibold">Repositories</h3>
          </div>
          <p className="text-3xl font-bold">{user?.projects.length || 0}</p>
        </div>

        <div className="p-6 rounded-lg border bg-white dark:bg-neutral-800">
          <div className="flex items-center gap-3 mb-2">
            <GitBranch className="h-5 w-5 text-slate-500" />
            <h3 className="font-semibold">Total Issues</h3>
          </div>
          <p className="text-3xl font-bold">
            {user?.projects.reduce((sum, repo) => sum + repo._count.issues, 0) || 0}
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-white dark:bg-neutral-800">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="h-5 w-5 text-slate-500" />
            <h3 className="font-semibold">AI Runs</h3>
          </div>
          <p className="text-3xl font-bold">{recentRuns.length}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6 rounded-lg border bg-linear-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/repos">
              <Github className="mr-2 h-4 w-4" />
              Add Repository
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/agent-runs">View Agent Runs</Link>
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent AI Agent Runs</h2>
        {recentRuns.length === 0 ? (
          <div className="p-8 text-center rounded-lg border bg-white dark:bg-neutral-800">
            <p className="text-slate-500">No agent runs yet. Start by adding a repository!</p>
            <Button className="mt-4" asChild>
              <Link href="/repos">Add Repository</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {recentRuns.map((run) => (
              <Link
                key={run.id}
                href={`/agent-runs/${run.id}`}
                className="block p-4 rounded-lg border bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">
                      #{run.issue?.githubIssueId} {run.issue?.title}
                    </p>
                    <p className="text-sm text-slate-500">
                      {run.project.repoOwner}/{run.project.repoName}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      run.status === "success"
                        ? "bg-green-100 text-green-700"
                        : run.status === "running"
                        ? "bg-blue-100 text-blue-700"
                        : run.status === "failed"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {run.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
