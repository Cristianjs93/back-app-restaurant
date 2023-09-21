/*
  Warnings:

  - You are about to drop the column `resetToken` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `tokenExpires` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "resetToken",
DROP COLUMN "tokenExpires";
