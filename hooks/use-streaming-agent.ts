"use client";

import { useState, useCallback, useRef } from "react";

interface StreamingState {
  isStreaming: boolean;
  content: string;
  error: string | null;
  agentRunId: string | null;
}

interface StreamingCallbacks {
  onStart?: (agentRunId: string) => void;
  onChunk?: (content: string) => void;
  onComplete?: (agentRunId: string) => void;
  onError?: (error: string) => void;
}

export function useStreamingAgent() {
  const [state, setState] = useState<StreamingState>({
    isStreaming: false,
    content: "",
    error: null,
    agentRunId: null,
  });
  
  const abortControllerRef = useRef<AbortController | null>(null);

  const startStreaming = useCallback(
    async (projectId: string, issueId: string, callbacks?: StreamingCallbacks) => {
      // Reset state
      setState({
        isStreaming: true,
        content: "",
        error: null,
        agentRunId: null,
      });

      // Cancel any existing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch("/api/agent/stream", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectId, issueId }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("Response body is not readable");
        }

        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const data = JSON.parse(line.slice(6));

                switch (data.type) {
                  case "start":
                    setState((prev) => ({ ...prev, agentRunId: data.agentRunId }));
                    callbacks?.onStart?.(data.agentRunId);
                    break;

                  case "chunk":
                    setState((prev) => ({
                      ...prev,
                      content: data.content,
                    }));
                    callbacks?.onChunk?.(data.content);
                    break;

                  case "complete":
                    setState((prev) => ({
                      ...prev,
                      isStreaming: false,
                      agentRunId: data.agentRunId,
                    }));
                    callbacks?.onComplete?.(data.agentRunId);
                    break;

                  case "error":
                    setState((prev) => ({
                      ...prev,
                      isStreaming: false,
                      error: data.error,
                    }));
                    callbacks?.onError?.(data.error);
                    break;
                }
              } catch (parseError) {
                console.error("Failed to parse SSE data:", parseError);
              }
            }
          }
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          // Request was cancelled
          setState((prev) => ({
            ...prev,
            isStreaming: false,
          }));
        } else {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error occurred";
          setState((prev) => ({
            ...prev,
            isStreaming: false,
            error: errorMessage,
          }));
          callbacks?.onError?.(errorMessage);
        }
      } finally {
        abortControllerRef.current = null;
      }
    },
    []
  );

  const stopStreaming = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setState((prev) => ({ ...prev, isStreaming: false }));
  }, []);

  return {
    ...state,
    startStreaming,
    stopStreaming,
  };
}

