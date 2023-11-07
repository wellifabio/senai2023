DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia CHARSET=UTF8 COLLATE utf8_general_ci;
USE academia;

-- DDL
CREATE TABLE aluno (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    peso FLOAT NOT NULL
);

CREATE TABLE telefone (
	id INT NOT NULL,
	numero VARCHAR(15) NOT NULL,
	FOREIGN KEY (id) REFERENCES aluno(id)
);

CREATE TABLE exercicio (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT NOT NULL,
    grupo_muscular VARCHAR(30) NOT NULL,
    aparelho TEXT NOT NULL
);

CREATE TABLE ficha (
    id_aluno INT NOT NULL,
    id_exercicio INT NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
	serie VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id),
    FOREIGN KEY (id_exercicio) REFERENCES exercicio(id)
);

SHOW TABLES;

-- DML (Importação dos dados)
LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula06/02.projeto_academia/aluno.csv'
INTO TABLE aluno
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula06/02.projeto_academia/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula06/02.projeto_academia/exercicio.csv'
INTO TABLE exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2023/2des/03-bcd/aula06/02.projeto_academia/ficha.csv'
INTO TABLE ficha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM aluno;
SELECT * FROM telefone;
SELECT * FROM exercicio;
SELECT * FROM ficha;

-- Missão, ver uma tabela com os exercícios mais praticados (Relatório)
CREATE VIEW vw_exercicios_praticados AS
SELECT f.id_aluno, e.id, e.descricao, e.aparelho, COUNT(e.id) AS Qtdade
FROM exercicio e JOIN ficha f
ON e.id = f.id_exercicio
GROUP BY e.id;

SELECT * FROM vw_exercicios_praticados;

-- Exportar para CSV
SELECT * FROM vw_exercicios_praticados
INTO OUTFILE 'D:/senai2023/2des/03-bcd/aula06/02.projeto_academia/rel_exercicio.csv'
FIELDS TERMINATED BY ';'
LINES TERMINATED BY '\r\n';
