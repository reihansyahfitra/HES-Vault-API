/*
  Warnings:

  - You are about to alter the column `order_status` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.
  - You are about to alter the column `payment_status` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `order_status` ENUM('APPROVED', 'ONRENT', 'OVERDUE', 'WAITING', 'REJECTED', 'CANCELLED', 'RETURNED') NOT NULL DEFAULT 'WAITING',
    MODIFY `payment_status` ENUM('UNPAID', 'PAID') NOT NULL DEFAULT 'UNPAID';
