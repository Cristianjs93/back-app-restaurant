/*
  Warnings:

  - Made the column `address` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `age` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
