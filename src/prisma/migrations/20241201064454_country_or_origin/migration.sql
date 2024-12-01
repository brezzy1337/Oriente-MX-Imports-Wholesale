-- CreateEnum
CREATE TYPE "Country" AS ENUM ('Thailand', 'Vietnam');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "country" "Country" NOT NULL DEFAULT 'Thailand';
