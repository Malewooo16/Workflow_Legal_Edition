-- CreateTable
CREATE TABLE "workflowTest" (
    "workflowId" TEXT NOT NULL,
    "workflowTitle" TEXT NOT NULL,
    "workflowDescription" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "creatorEmail" TEXT NOT NULL,
    "suggestedDeadline" TIMESTAMP(3) NOT NULL,
    "collaborators" TEXT NOT NULL,
    "filesLocation" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "workflowTest_workflowId_key" ON "workflowTest"("workflowId");
