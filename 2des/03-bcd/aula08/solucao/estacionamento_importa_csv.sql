DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE utf8_general_ci;
USE estacionamento;

CREATE TABLE cliente(
    cpf VARCHAR(14) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    uf VARCHAR(2),
    cep VARCHAR(9),
    PRIMARY KEY(cpf)
);

CREATE TABLE telefone(
    cpf VARCHAR(14) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES cliente(cpf)
);

CREATE TABLE veiculo(
    placa VARCHAR(8) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    cor VARCHAR(15) NOT NULL,
    PRIMARY KEY(placa)
);

CREATE TABLE vaga(
    id INT NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(10) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE estacionamento(
    id INT NOT NULL AUTO_INCREMENT,
    placa VARCHAR(8) NOT NULL,
    cpf VARCHAR(14),
    id_vaga INT,
    entrada DATETIME NOT NULL,
    saida DATETIME,
    valor DECIMAL(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY (placa) REFERENCES veiculo(placa) ON UPDATE CASCADE,
    FOREIGN KEY (cpf) REFERENCES cliente(cpf) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (id_vaga) REFERENCES vaga(id) ON DELETE SET NULL ON UPDATE CASCADE
);

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula08/solucao/cliente.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula08/solucao/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula08/solucao/veiculo.csv'
INTO TABLE veiculo
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula08/solucao/vaga.csv'
INTO TABLE vaga
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula08/solucao/estacionamento.csv'
INTO TABLE estacionamento
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

UPDATE cliente SET numero = NULL WHERE numero = '';

CREATE VIEW vw_cliente AS
SELECT c.cpf, c.nome, c.logradouro, c.numero, c.bairro, c.cidade, c.uf, c.cep, t.numero as telefone
FROM cliente c LEFT JOIN telefone t ON c.cpf = t.cpf; 

SELECT * FROM vw_cliente;
SELECT * FROM veiculo;
SELECT * FROM vaga;
SELECT * FROM estacionamento;
