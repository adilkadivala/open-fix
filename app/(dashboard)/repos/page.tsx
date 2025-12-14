"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createProject, getExistingProjectRepoUrls } from "@/app/actions/create-project";
import { Loader2, Plus, Check } from "lucide-react"; // Assuming you have lucide-react installed

export default function ReposPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [existingUrls, setExistingUrls] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [reposRes, existing] = await Promise.all([
          fetch("/api/github/repos"),
          getExistingProjectRepoUrls(),
        ]);
        
        const reposData = await reposRes.json();
        
        // Safety check if API returns error object
        if (Array.isArray(reposData)) {
            setRepos(reposData);
        } else {
            console.error("Failed to load repos", reposData);
            setRepos([]);
        }
        
        setExistingUrls(new Set(existing));
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function addProject(repo: any) {
    setProcessingId(repo.id);
    try {
      await createProject(repo);
      setExistingUrls((prev) => new Set(prev).add(repo.html_url));
    } catch (error) {
      alert("Failed to add project");
    } finally {
      setProcessingId(null);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-neutral-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6 px-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Import Repositories</h1>
        <p className="text-neutral-500">Select repositories to import into your dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo: any) => {
          const isAdded = existingUrls.has(repo.html_url);
          return (
            <Card key={repo.id} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-start justify-between space-x-2">
                  <CardTitle className="text-base truncate" title={repo.full_name}>
                    {repo.name}
                  </CardTitle>
                  {repo.visibility === "private" && (
                    <Badge variant="outline" className="text-xs">Private</Badge>
                  )}
                </div>
                <CardDescription className="line-clamp-2 min-h-10">
                  {repo.description || "No description provided."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 text-xs text-neutral-500">
                  {repo.language && <span>{repo.language}</span>}
                  <span>•</span>
                  <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={isAdded ? "secondary" : "default"}
                  disabled={isAdded || processingId === repo.id}
                  onClick={() => addProject(repo)}
                >
                  {processingId === repo.id ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : isAdded ? (
                    <>
                      <Check className="h-4 w-4 mr-2" /> Imported
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" /> Import
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}