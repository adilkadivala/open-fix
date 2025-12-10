-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "githubId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "repoUrl" TEXT NOT NULL,
    "repoOwner" TEXT NOT NULL,
    "repoName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" TEXT NOT NULL,
    "githubIssueId" INTEGER,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "state" TEXT NOT NULL,
    "labels" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentRun" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "runType" TEXT NOT NULL,
    "issueId" TEXT,
    "projectId" TEXT NOT NULL,
    "triggeredById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AgentRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KestraRun" (
    "id" TEXT NOT NULL,
    "flowId" TEXT,
    "flowStatus" TEXT,
    "logs" JSONB,
    "summary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agentRunId" TEXT NOT NULL,

    CONSTRAINT "KestraRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClineRun" (
    "id" TEXT NOT NULL,
    "plan" JSONB,
    "patch" TEXT,
    "repoSnapshot" JSONB,
    "output" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agentRunId" TEXT NOT NULL,

    CONSTRAINT "ClineRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TogetherRun" (
    "id" TEXT NOT NULL,
    "model" TEXT,
    "prompt" TEXT,
    "response" TEXT,
    "tokensUsed" INTEGER,
    "reasoning" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agentRunId" TEXT NOT NULL,

    CONSTRAINT "TogetherRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OumiRun" (
    "id" TEXT NOT NULL,
    "score" DOUBLE PRECISION,
    "metrics" JSONB,
    "reviewNotes" TEXT,
    "rawOutput" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agentRunId" TEXT NOT NULL,

    CONSTRAINT "OumiRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_githubId_key" ON "User"("githubId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "KestraRun_agentRunId_key" ON "KestraRun"("agentRunId");

-- CreateIndex
CREATE UNIQUE INDEX "ClineRun_agentRunId_key" ON "ClineRun"("agentRunId");

-- CreateIndex
CREATE UNIQUE INDEX "TogetherRun_agentRunId_key" ON "TogetherRun"("agentRunId");

-- CreateIndex
CREATE UNIQUE INDEX "OumiRun_agentRunId_key" ON "OumiRun"("agentRunId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentRun" ADD CONSTRAINT "AgentRun_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentRun" ADD CONSTRAINT "AgentRun_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentRun" ADD CONSTRAINT "AgentRun_triggeredById_fkey" FOREIGN KEY ("triggeredById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KestraRun" ADD CONSTRAINT "KestraRun_agentRunId_fkey" FOREIGN KEY ("agentRunId") REFERENCES "AgentRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClineRun" ADD CONSTRAINT "ClineRun_agentRunId_fkey" FOREIGN KEY ("agentRunId") REFERENCES "AgentRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TogetherRun" ADD CONSTRAINT "TogetherRun_agentRunId_fkey" FOREIGN KEY ("agentRunId") REFERENCES "AgentRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OumiRun" ADD CONSTRAINT "OumiRun_agentRunId_fkey" FOREIGN KEY ("agentRunId") REFERENCES "AgentRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
