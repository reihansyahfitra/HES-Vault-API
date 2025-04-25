/*
  Warnings:

  - A unique constraint covering the columns `[tokenHash]` on the table `TokenBlacklist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tokenHash` to the `TokenBlacklist` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `TokenBlacklist_token_key` ON `tokenblacklist`;

-- AlterTable
ALTER TABLE `tokenblacklist` ADD COLUMN `tokenHash` VARCHAR(191) NOT NULL,
    MODIFY `token` TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TokenBlacklist_tokenHash_key` ON `TokenBlacklist`(`tokenHash`);
