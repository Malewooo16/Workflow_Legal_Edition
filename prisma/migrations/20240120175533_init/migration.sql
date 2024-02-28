-- CreateTable
CREATE TABLE "testPerson" (
    "workflowId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "townAddress" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "pictureURL" TEXT NOT NULL,

    CONSTRAINT "testPerson_pkey" PRIMARY KEY ("workflowId")
);

-- CreateIndex
CREATE UNIQUE INDEX "testPerson_workflowId_key" ON "testPerson"("workflowId");
