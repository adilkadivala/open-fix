import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const token = (session as any)?.access_token;

  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { owner, repo } = await req.json();

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const issues = await response.json();
  return NextResponse.json(issues);
}
