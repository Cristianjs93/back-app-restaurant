/*
  Warnings:

  - You are about to drop the column `detail` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `facilityId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `delivery_address` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_serviceId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "detail",
DROP COLUMN "facilityId",
DROP COLUMN "serviceId",
DROP COLUMN "status",
DROP COLUMN "total",
ADD COLUMN     "delivery_address" JSONB NOT NULL,
ADD COLUMN     "products" JSONB[],
ADD COLUMN     "restaurantId" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
