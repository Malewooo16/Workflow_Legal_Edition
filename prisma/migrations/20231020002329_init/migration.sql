/*
  Warnings:

  - You are about to drop the column `phoneNumebr` on the `users` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("createdAt", "emailAddress", "firstName", "hashedPassword", "id", "lastName", "role") SELECT "createdAt", "emailAddress", "firstName", "hashedPassword", "id", "lastName", "role" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_emailAddress_key" ON "users"("emailAddress");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
