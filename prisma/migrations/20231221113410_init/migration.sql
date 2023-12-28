/*
  Warnings:

  - Added the required column `workflowDescription` to the `theWorkflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workflowTitle` to the `theWorkflow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "theWorkflow" ADD COLUMN     "workflowDescription" TEXT NOT NULL,
ADD COLUMN     "workflowTitle" TEXT NOT NULL;
