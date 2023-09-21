-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "resetToken" TEXT,
ADD COLUMN     "tokenExpires" TIMESTAMP(3);
