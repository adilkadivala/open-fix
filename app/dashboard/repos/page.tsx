"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { createProject } from "@/app/actions/create-project";

export default function ReposPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/github/repos");
      const data = await res.json();
      setRepos(data);
      setLoading(false);
    }
    load();
  }, []);

  async function addProject(repo: any) {
    await createProject(repo);
    alert("Project saved!");
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Your GitHub Repositories</h1>

      {repos.map((repo: any) => (
        <div
          key={repo.id}
          className="p-4 rounded border bg-neutral-100 dark:bg-neutral-800"
        >
          <p className="text-lg font-semibold">{repo.full_name}</p>
          <p className="text-sm text-neutral-500">{repo.description}</p>

          <Button
            className="mt-3"
            onClick={() => addProject(repo)}
          >
            Add to Projects
          </Button>
        </div>
      ))}
    </div>
  );
}
