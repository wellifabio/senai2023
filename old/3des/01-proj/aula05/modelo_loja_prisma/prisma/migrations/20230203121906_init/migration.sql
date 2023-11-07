/*
  Warnings:

  - Added the required column `teste` to the `Vendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vendas` ADD COLUMN `teste` VARCHAR(191) NOT NULL;
