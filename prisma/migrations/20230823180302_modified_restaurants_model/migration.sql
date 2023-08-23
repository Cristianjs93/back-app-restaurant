/*
  Warnings:

  - You are about to drop the column `location` on the `Restaurants` table. All the data in the column will be lost.
  - Added the required column `closing_hour` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost_two` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opening_first_day` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opening_hour` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opening_last_day` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trending` to the `Restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurants" DROP COLUMN "location",
ADD COLUMN     "closing_hour" INTEGER NOT NULL,
ADD COLUMN     "cost_two" INTEGER NOT NULL,
ADD COLUMN     "cuisines" TEXT[],
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "opening_first_day" TEXT NOT NULL,
ADD COLUMN     "opening_hour" INTEGER NOT NULL,
ADD COLUMN     "opening_last_day" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "trending" BOOLEAN NOT NULL;
