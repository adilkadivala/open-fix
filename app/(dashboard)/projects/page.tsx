
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await prisma.repos.findMany({
    include: { _count: { select: { issues: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Your Projects</h1>

      <div className="grid gap-4">
        {projects.map((p) => (
          <Link
            href={`/projects/${p.id}/issues`}
            key={p.id}
            className="p-4 rounded-lg border bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            <p className="text-lg font-bold">
              {p.repoOwner}/{p.repoName}
            </p>
            <p className="text-sm text-neutral-600">{p.repoUrl}</p>
            <p className="text-sm mt-2 text-neutral-500">
              Issues Synced: {p._count.issues}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
