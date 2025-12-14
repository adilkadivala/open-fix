import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !(session as any).access_token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = (session as any).access_token;
  let allRepos: any[] = [];
  let page = 1;
  const perPage = 100;

  try {
    while (true) {
      const res = await fetch(
        `https://api.github.com/user/repos?per_page=${perPage}&page=${page}&sort=updated`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch repos");

      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) break;

      allRepos = [...allRepos, ...data];

      if (data.length < perPage) break;
      page++;
    }

    return NextResponse.json(allRepos);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch repos" },
      { status: 500 }
    );
  }
}
