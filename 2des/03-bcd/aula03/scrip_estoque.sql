-- Banco de dados de Esoque de materiais elétricos
-- Versão 1.0

-- DDL (Data Definition Language)
DROP DATABASE IF EXISTS estoque;
CREATE DATABASE estoque CHARSET=UTF8 COLLATE utf8_general_ci;
USE estoque;

CREATE TABLE Produtos(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	descricao TEXT
);

CREATE TABLE Funcionarios(
	matricula INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50),
	PRIMARY KEY(matricula)
);

CREATE TABLE Acoes(
	id_prod INT NOT NULL,
	matricula INT NOT NULL,
	data DATE NOT NULL,
	acao VARCHAR(10) NOT NULL,
	quantidade INT NOT NULL,
	FOREIGN KEY (id_prod) REFERENCES Produtos(id) ON UPDATE CASCADE,
	FOREIGN KEY (matricula) REFERENCES Funcionarios(matricula) ON DELETE CASCADE
);

SHOW TABLES;
DESCRIBE Produtos;
DESCRIBE Funcionarios;
DESCRIBE Acoes;

-- DML (Data Manipulation Language)
INSERT INTO Produtos(nome, descricao)
VALUES
("Tomada","Tomada 10A"),
("Interruptor","Interruptor simples"),
("Interruptor","Interruptor complexo");

INSERT INTO Funcionarios VALUES
(1001,"Denner"),
(null,"Levi"),
(default,"Ivo"),
(2000,"Adolfo");

INSERT INTO Acoes VALUES
(1,1001,"2023-02-01","Compra",5),
(1,1003,"2023-02-02","Utiliza",1),
(2,1002,"2023-02-01","Compra",10),
(2,1003,"2023-02-02","Utiliza",2);

SELECT * FROM Produtos;
SELECT * FROM Funcionarios;
SELECT * FROM Acoes;

-- Funções
SELECT CURDATE();
SELECT CURTIME();
SELECT RAND();

-- WHERE (ONDE == FILTRO)
SELECT * FROM Produtos WHERE id = 1;
SELECT * FROM Funcionarios WHERE matricula = 1;
SELECT * FROM Acoes WHERE data = "2023-02-02";
SELECT * FROM Acoes WHERE data = CURDATE();

-- Alterações
UPDATE Funcionarios SET nome = "Ivanildo"
WHERE matricula = 1003;

UPDATE Produtos SET id=101 WHERE id=1;
UPDATE Produtos SET id=102 WHERE id=2;
UPDATE Produtos SET id=103 WHERE id=3;

UPDATE Funcionarios SET matricula =2001
WHERE matricula = 2000;

UPDATE Funcionarios SET matricula =1010
WHERE matricula = 1001;

-- Exclusões
DELETE FROM Funcionarios WHERE matricula = 1001;
DELETE FROM Produtos WHERE id = 103;

SELECT * FROM PRODUTOS;



