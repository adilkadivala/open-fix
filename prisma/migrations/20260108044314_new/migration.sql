/*
  Warnings:

  - You are about to drop the `ClineRun` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KestraRun` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClineRun" DROP CONSTRAINT "ClineRun_agentRunId_fkey";

-- DropForeignKey
ALTER TABLE "KestraRun" DROP CONSTRAINT "KestraRun_agentRunId_fkey";

-- DropTable
DROP TABLE "ClineRun";

-- DropTable
DROP TABLE "KestraRun";

-- CreateTable
CREATE TABLE "AIRun" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "steps" JSONB,
    "files" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agentRunId" TEXT NOT NULL,

    CONSTRAINT "AIRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AIRun_agentRunId_key" ON "AIRun"("agentRunId");

-- AddForeignKey
ALTER TABLE "AIRun" ADD CONSTRAINT "AIRun_agentRunId_fkey" FOREIGN KEY ("agentRunId") REFERENCES "AgentRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;
