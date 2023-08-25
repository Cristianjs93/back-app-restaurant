/*
  Warnings:

  - Added the required column `delivery_time` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurants" ADD COLUMN     "delivery_time" INTEGER NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL;
