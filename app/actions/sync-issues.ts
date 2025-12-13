"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function syncIssues(projectId: string) {
  const session = await getServerSession(authOptions);
  const token = (session as any)?.access_token;
  if (!token) return null;

  const project = await prisma.repos.findUnique({
    where: { id: projectId },
  });

  if (!project) return null;

  const response = await fetch(
    `https://api.github.com/repos/${project.repoOwner}/${project.repoName}/issues?per_page=100`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const issues = (await response.json()).filter((i: any) => !i.pull_request);

  for (const issue of issues) {
    await prisma.issue.upsert({
      where: { githubIssueId: issue.number },
      update: {
        title: issue.title,
        body: issue.body,
        state: issue.state,
        labels: issue.labels,
      },
      create: {
        githubIssueId: issue.number,
        title: issue.title,
        body: issue.body,
        state: issue.state,
        labels: issue.labels,
        projectId,
      },
    });
  }

  return { count: issues.length };
}
