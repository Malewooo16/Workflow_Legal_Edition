-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "theWorkflow" (
    "workflowId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "creatorEmail" TEXT NOT NULL,
    "suggestedDeadline" TIMESTAMP(3) NOT NULL,
    "collaborators" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_emailAddress_key" ON "users"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "theWorkflow_workflowId_key" ON "theWorkflow"("workflowId");

-- CreateIndex
CREATE UNIQUE INDEX "theWorkflow_creatorEmail_key" ON "theWorkflow"("creatorEmail");
