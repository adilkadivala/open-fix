import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";


export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !(session as any).access_token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = (session as any).access_token;

  const res = await fetch("https://api.github.com/user/repos?per_page=100", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });

  const repos = await res.json();

  return NextResponse.json(repos);
}
