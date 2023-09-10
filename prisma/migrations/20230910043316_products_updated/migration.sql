/*
  Warnings:

  - You are about to drop the column `facilityId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `subcategory` on the `Products` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_facilityId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "facilityId",
DROP COLUMN "image",
DROP COLUMN "subcategory",
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
