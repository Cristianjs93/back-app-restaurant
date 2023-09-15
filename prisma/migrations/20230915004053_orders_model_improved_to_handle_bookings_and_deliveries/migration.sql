/*
  Warnings:

  - You are about to drop the column `payment` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `products` on the `Orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "payment",
DROP COLUMN "products",
ADD COLUMN     "booking_date" TEXT,
ADD COLUMN     "booking_email" TEXT,
ADD COLUMN     "booking_firstName" TEXT,
ADD COLUMN     "booking_lastName" TEXT,
ADD COLUMN     "booking_persons" INTEGER,
ADD COLUMN     "booking_phone" TEXT,
ADD COLUMN     "delivery_payment" INTEGER,
ADD COLUMN     "delivery_products" JSONB[],
ALTER COLUMN "delivery_address" DROP NOT NULL;
