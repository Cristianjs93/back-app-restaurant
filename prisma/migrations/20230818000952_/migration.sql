/*
  Warnings:

  - You are about to drop the column `date` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `gallery` on the `Restaurants` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderProducts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `detail` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicesId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_typeId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_usersId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "date",
DROP COLUMN "time",
DROP COLUMN "totalPrice",
DROP COLUMN "typeId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "detail" TEXT NOT NULL,
ADD COLUMN     "payment" INTEGER NOT NULL,
ADD COLUMN     "servicesId" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "total" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usersId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "restaurantId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Restaurants" DROP COLUMN "gallery";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "usersId";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "roleId" TEXT;

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "OrderProducts";

-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "ImageUrl" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facilities" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT[],

    CONSTRAINT "Facilities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facilities" ADD CONSTRAINT "Facilities_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
