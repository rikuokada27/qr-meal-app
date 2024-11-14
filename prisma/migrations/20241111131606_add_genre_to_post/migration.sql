-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('CHINESE', 'JAPANESE', 'WESTERN', 'ITALIAN', 'FRENCH', 'SEAFOOD', 'BBQ', 'SUSHI', 'OTHER');

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "address" TEXT,
ADD COLUMN     "genre" "Genre";
