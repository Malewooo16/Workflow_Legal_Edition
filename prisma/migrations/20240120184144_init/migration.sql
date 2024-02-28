/*
  Warnings:

  - The primary key for the `testPerson` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `workflowId` on the `testPerson` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `testPerson` will be added. If there are existing duplicate values, this will fail.
  - The required column `userId` was added to the `testPerson` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "testPerson_workflowId_key";

-- AlterTable
ALTER TABLE "testPerson" DROP CONSTRAINT "testPerson_pkey",
DROP COLUMN "workflowId",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "testPerson_pkey" PRIMARY KEY ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "testPerson_userId_key" ON "testPerson"("userId");
