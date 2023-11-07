-- CreateTable
CREATE TABLE `Entregador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `veiculo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Entregador_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `produto` VARCHAR(191) NOT NULL,
    `horaPedido` DATETIME(3) NOT NULL,
    `horaEntrega` DATETIME(3) NULL,
    `horaFim` DATETIME(3) NULL,
    `entregadorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_entregadorId_fkey` FOREIGN KEY (`entregadorId`) REFERENCES `Entregador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
