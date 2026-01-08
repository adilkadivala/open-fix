"use client";

import React, { useEffect, useState } from "react";
import { useStreamingAgent } from "@/hooks/use-streaming-agent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Terminal, CheckCircle2, AlertCircle, FileText } from "lucide-react";

interface StreamingAgentProps {
  projectId: string;
  issueId: string;
  issueTitle: string;
  onComplete?: (agentRunId: string) => void;
}

export function StreamingAgent({
  projectId,
  issueId,
  issueTitle,
  onComplete,
}: StreamingAgentProps) {
  const {
    isStreaming,
    content,
    error,
    agentRunId,
    startStreaming,
    stopStreaming,
  } = useStreamingAgent();

  const [parsedContent, setParsedContent] = useState<any>(null);

  // Parse the content as JSON when it changes
  useEffect(() => {
    if (content) {
      try {
        const parsed = JSON.parse(content);
        setParsedContent(parsed);
      } catch {
        // Still parsing, content is incomplete
      }
    }
  }, [content]);

  const handleStart = () => {
    startStreaming(projectId, issueId, {
      onComplete: (runId) => {
        onComplete?.(runId);
      },
      onError: (err) => {
        console.error("Streaming error:", err);
      },
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              AI Analysis
            </CardTitle>
            {isStreaming && (
              <Badge variant="secondary" className="gap-1">
                <Loader2 className="h-3 w-3 animate-spin" />
                Streaming
              </Badge>
            )}
            {error && (
              <Badge variant="destructive" className="gap-1">
                <AlertCircle className="h-3 w-3" />
                Error
              </Badge>
            )}
            {agentRunId && !isStreaming && !error && (
              <Badge variant="default" className="gap-1 bg-green-600">
                <CheckCircle2 className="h-3 w-3" />
                Complete
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {!isStreaming && !content && !error && (
            <div className="text-center py-6">
              <p className="text-sm text-muted-foreground mb-4">
                Start the AI agent to analyze and generate a fix plan for:
              </p>
              <p className="font-medium mb-4">{issueTitle}</p>
              <Button onClick={handleStart} disabled={isStreaming}>
                {isStreaming ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Terminal className="h-4 w-4 mr-2" />
                    Start AI Agent
                  </>
                )}
              </Button>
            </div>
          )}

          {isStreaming && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" onClick={stopStreaming}>
                  Stop
                </Button>
                <span className="text-xs text-muted-foreground">
                  Generating response...
                </span>
              </div>

              {/* Typing indicator */}
              <div className="flex gap-1 items-center py-2">
                <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive font-medium">Error: {error}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                onClick={handleStart}
              >
                Try Again
              </Button>
            </div>
          )}

          {parsedContent && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Explanation */}
              {parsedContent.explanation && (
                <div>
                  <h3 className="font-semibold mb-2">Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    {parsedContent.explanation}
                  </p>
                </div>
              )}

              {/* Steps */}
              {parsedContent.steps && Array.isArray(parsedContent.steps) && (
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Step-by-Step Fix
                  </h3>
                  <div className="space-y-2">
                    {parsedContent.steps.map((step: string, index: number) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 bg-muted/50 rounded-lg"
                      >
                        <span className="shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </span>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Files */}
              {parsedContent.files && Array.isArray(parsedContent.files) && (
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Files to Update
                  </h3>
                  <div className="space-y-3">
                    {parsedContent.files.map(
                      (file: { path: string; changes: string }, index: number) => (
                        <div
                          key={index}
                          className="p-4 border rounded-lg bg-card"
                        >
                          <p className="font-medium text-sm">{file.path}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {file.changes}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {agentRunId && (
                <div className="pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={`/agent-runs/${agentRunId}`}>
                      View Full Details
                    </a>
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

