"use server";

import { prisma } from "@/lib/prisma";
import Groq from "groq-sdk";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { projectId, issueId } = await request.json();

    if (!projectId || !issueId) {
      return new Response("Missing required parameters", { status: 400 });
    }

    const project = await prisma.repos.findUnique({ where: { id: projectId } });
    const issue = await prisma.issue.findUnique({ where: { id: issueId } });

    if (!project || !issue) {
      return new Response("Project or Issue not found", { status: 404 });
    }

    // Create agent run record
    const agentRun = await prisma.agentRun.create({
      data: {
        projectId,
        issueId,
        status: "pending",
        runType: "fix_issue",
      },
    });

    const prompt = `You are an expert software engineer. Analyze this GitHub issue and provide a step-by-step solution.

      Repository: ${project.repoOwner}/${project.repoName}
      Issue Title: ${issue.title}
      Issue Body: ${issue.body ?? "No description"}

      Please provide:
      1. A clear explanation of the issue
      2. Step-by-step instructions to fix it
      3. List of files that need to be updated with specific changes

      Format your response as JSON with the following structure:
      {
        "explanation": "...",
        "steps": ["step 1", "step 2", ...],
        "files": [
          {
            "path": "file/path.js",
            "changes": "description of changes"
          }
        ]
      }`;

    const encoder = new TextEncoder();

    // Create the streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Send initial message
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: "start", agentRunId: agentRun.id })}\n\n`)
          );

          const completion = await groq.chat.completions.create(
            {
              model: "llama-3.3-70b-versatile",
              temperature: 0,
              messages: [
                {
                  role: "system",
                  content:
                    "You are an expert software engineer. Always respond with valid JSON only.",
                },
                {
                  role: "user",
                  content: prompt,
                },
              ],
              response_format: { type: "json_object" },
            }
            // Note: Groq SDK doesn't support streaming yet, so we'll simulate it
            // When Groq adds streaming support, change to use streamChatCompletions
          );

          const responseText = completion.choices[0]?.message?.content || "{}";
          
          // Simulate streaming by sending in chunks
          const chunks = responseText.split(/(?=\{)|(?=\[)|(?=")/);
          let buffer = "";
          
          for (const chunk of chunks) {
            if (chunk.trim()) {
              buffer += chunk;
              // Try to send valid JSON pieces
              try {
                // Check if buffer is a valid partial JSON
                const testParse = JSON.parse(buffer);
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify({ type: "chunk", content: buffer })}\n\n`)
                );
              } catch {
                // Not valid yet, accumulate more
              }
            }
            // Small delay to simulate streaming
            await new Promise((resolve) => setTimeout(resolve, 50));
          }

          // Store the complete response
          try {
            const aiResponse = JSON.parse(responseText);
            await prisma.aIRun.create({
              data: {
                agentRunId: agentRun.id,
                prompt,
                response: responseText,
                steps: aiResponse.steps || [],
                files: aiResponse.files || [],
              },
            });
          } catch (parseError) {
            console.error("Failed to parse AI response:", parseError);
          }

          // Update agent run status
          await prisma.agentRun.update({
            where: { id: agentRun.id },
            data: { status: "success" },
          });

          // Send completion message
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: "complete", agentRunId: agentRun.id })}\n\n`)
          );

          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          
          // Update status to failed
          await prisma.agentRun.update({
            where: { id: agentRun.id },
            data: { status: "failed" },
          });

          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: "error", error: "Failed to generate response" })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error in stream endpoint:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

