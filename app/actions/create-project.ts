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

  const project = await prisma.project.create({
    data: {
      name: repo.name,
      repoOwner: repo.owner.login,
      repoName: repo.name,
      repoUrl: repo.html_url,
      userId: user.id,
    },
  });

  return project;
}
