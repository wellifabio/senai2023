DROP DATABASE IF EXISTS casas_falida;
CREATE DATABASE casas_falida;

USE casas_falida;

CREATE TABLE vendedores (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(153) NOT NULL,
    matricula VARCHAR(6) NOT NULL
);

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    valor FLOAT(6, 2)
);

CREATE TABLE vendas (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    data DATETIME DEFAULT(NOW()) NOT NULL,
    quantidade INT NOT NULL,
    produtoId INT NOT NULL,
    vendedorId INT NOT NULL,
    CONSTRAINT fk_produto_venda FOREIGN KEY (produtoId) REFERENCES produtos(id),
    CONSTRAINT fk_vendedor_venda FOREIGN KEY (vendedorId) REFERENCES vendedores(id)
);

INSERT INTO vendedores VALUES 
(DEFAULT, 'Stefany Antonella', '14644'),
(DEFAULT, 'Stella Viana', '01516'),
(DEFAULT, 'Tomás Isaac', '50913'),
(DEFAULT, 'Osvaldo Galvão', '72193');

INSERT INTO produtos VALUES
(DEFAULT, 'Samsung Galaxy M53', 2211.11),
(DEFAULT, 'Motorola Moto G42', 1499.00),
(DEFAULT, 'Rainha das Chamas', 36.90),
(DEFAULT, 'Cronicas Saxonicas - O cavaleiro da morte', 57.90),
(DEFAULT, 'O milagre da manhã', 56.59),
(DEFAULT, 'Lavadoura de Roupas Brastemp BWK12AB', 2199.00),
(DEFAULT, 'Fogao Atlas 4 Bocas', 899.00);

INSERT INTO vendas VALUES
(DEFAULT, DEFAULT, 2, 1, 3),
(DEFAULT, DEFAULT, 1, 2, 3),
(DEFAULT, DEFAULT, 3, 1, 2),
(DEFAULT, DEFAULT, 1, 3, 2),
(DEFAULT, DEFAULT, 2, 2, 1),
(DEFAULT, DEFAULT, 1, 3, 1);
