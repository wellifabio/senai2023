DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE onibus;

-- DDL
CREATE TABLE motorista (
    cpf VARCHAR(14) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE telefone (
    cpf_motorista VARCHAR(14) NOT NULL,
    numero VARCHAR(15) NOT NULL,
	FOREIGN KEY (cpf_motorista) REFERENCES motorista(cpf)
);

CREATE TABLE linha (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    descricao TEXT NOT NULL 
);

CREATE TABLE horario (
    id_linha VARCHAR(10) NOT NULL,
    horario TIME NOT NULL,
	FOREIGN KEY (id_linha) REFERENCES linha(id)
);

CREATE TABLE dirige (
    cpf_motorista VARCHAR(14) NOT NULL,
    id_linha VARCHAR(10) NOT NULL,
    FOREIGN KEY (cpf_motorista) REFERENCES motorista(cpf),
    FOREIGN KEY (id_linha) REFERENCES linha(id)
);


-- DML (Importação de dados)
LOAD DATA INFILE 'F:/senai2023/2des/03-bcd/aula06/03.projeto_onibus/motorista.csv'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'F:/senai2023/2des/03-bcd/aula06/03.projeto_onibus/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'F:/senai2023/2des/03-bcd/aula06/03.projeto_onibus/linha.csv'
INTO TABLE linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'F:/senai2023/2des/03-bcd/aula06/03.projeto_onibus/horario.csv'
INTO TABLE horario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'F:/senai2023/2des/03-bcd/aula06/03.projeto_onibus/dirige.csv'
INTO TABLE dirige
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- Trabalhar nas consultas/query para recuperação de dados
-- ./queries.sql
-- Geradas as conultas necessárias, salva como VISÕES

-- Motoristas com seus telefones
CREATE VIEW vw_motorista AS
	SELECT m.cpf, m.nome, t.numero AS telefone FROM motorista m
		LEFT JOIN telefone t
		ON m.cpf = t.cpf_motorista;

-- Nomes dos motoristas e linhas que dirige
CREATE VIEW vw_moto_x_linha AS
	SELECT m.nome, d.id_linha FROM motorista m
		LEFT JOIN dirige d
		ON m.cpf = d.cpf_motorista
		UNION
		SELECT m.nome, l.id FROM motorista m
			JOIN dirige d
			ON m.cpf = d.cpf_motorista
			RIGHT JOIN linha l
			ON d.id_linha = l.id;
		
-- testar as visões
SELECT * FROM vw_motorista;
SELECT * FROM vw_moto_x_linha;

	
	
	
	
	
	
