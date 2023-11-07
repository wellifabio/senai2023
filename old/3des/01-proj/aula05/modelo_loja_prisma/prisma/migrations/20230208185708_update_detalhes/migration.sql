/*
  Warnings:

  - Added the required column `quantidade` to the `Detalhes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detalhes` ADD COLUMN `quantidade` INTEGER NOT NULL;
