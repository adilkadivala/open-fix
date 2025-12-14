"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function createProject(repo: any) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) return null;

  const existingProject = await prisma.repos.findFirst({
    where: {
      userId: user.id,
      repoUrl: repo.html_url,
    },
  });

  if (existingProject) {
    return existingProject;
  }

  const project = await prisma.repos.create({
    data: {
      name: repo.name,
      repoOwner: repo.owner.login,
      repoName: repo.name,
      repoUrl: repo.html_url,
      userId: user.id,
      description: repo.description,
    },
  });

  return project;
}

export async function getExistingProjectRepoUrls() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return [];

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { projects: { select: { repoUrl: true } } },
  });

  if (!user) return [];

  return user.projects.map((p) => p.repoUrl);
}
