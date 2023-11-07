DROP DATABASE IF EXISTS imobiliaria;
CREATE DATABASE imobiliaria;

USE imobiliaria;

CREATE TABLE corretores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(153) NOT NULL,
    matricula VARCHAR(10) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL,
    salario FLOAT(6,2) NOT NULL
);

CREATE TABLE status (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20)
);

CREATE TABLE imoveis (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    corretor_id INT NOT NULL,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    endereco VARCHAR(153) NOT NULL,
    valor_venda FLOAT(10,2),
    valor_aluguel FLOAT(10,2),
    status_id INT NOT NULL,
    FOREIGN KEY (corretor_id) REFERENCES corretores (id),
    FOREIGN KEY (status_id) REFERENCES status (id)
);

INSERT INTO corretores VALUES (DEFAULT, "Zeh das Venda", "15948", "abc@123", 2500);
INSERT INTO corretores VALUES (DEFAULT, "Jaum dos Aluguel", "1323", "cba@321", 2500);

INSERT INTO status VALUES (DEFAULT, "Disponivel");
INSERT INTO status VALUES (DEFAULT, "Alugado");
INSERT INTO status VALUES (DEFAULT, "Vendido");

INSERT INTO imoveis VALUES (DEFAULT, 1, "KSA7894", "Rua das Ruas, 8", 400000, 850, 1);
INSERT INTO imoveis VALUES (DEFAULT, 1, "APT4613", "Rua dos buero, 8, AP 41", 250000, 500, 1);
INSERT INTO imoveis VALUES (DEFAULT, 2, "KSA7418", "Rua das Avenidas, 35", 1250000, 5500, 3);
