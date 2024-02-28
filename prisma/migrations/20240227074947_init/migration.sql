/*
  Warnings:

  - Added the required column `phoneNumber` to the `testPerson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validated` to the `testPerson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "testPerson" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "validated" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "workflowUsers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workflowUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "workflowUsers_emailAddress_key" ON "workflowUsers"("emailAddress");
