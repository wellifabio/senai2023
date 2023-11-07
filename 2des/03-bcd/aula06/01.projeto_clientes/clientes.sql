DROP DATABASE IF EXISTS clientes;
CREATE DATABASE clientes CHARSET=UTF8 COLLATE utf8_general_ci;
USE clientes;

-- DDL Criação da Estrutura
CREATE TABLE clientes(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	nascimento DATE NOT NULL,
	sexo VARCHAR(1) NOT NULL,
	peso FLOAT(5,2) NOT NULL
);

CREATE TABLE telefones(
	id INT NOT NULL,
	telefone VARCHAR(15) NOT NULL,
	FOREIGN KEY (id) REFERENCES clientes(id)
);

-- DML Importação por concatenação de dados
INSERT INTO clientes(nome, nascimento, sexo, peso) VALUES
('Ana de Souza de Oliveira','2000-05-22','M',65),
('Ana Oliveira Oliveira','1990-08-23','T',88),
('Lúcia da Silva de Souza','1988-06-14','F',45.5),
('Marcos de Souza Castro','2002-07-13','M',98),
('Maria Oliveira Castro','2005-08-14','T',101),
('Jurema de Souza Castro','2007-06-15','F',80),
('Jacinta Silva','2007-06-15','F',80);

INSERT INTO telefones VALUES
(1,'(11)04023-4384'),
(1,'(14)3288-8530'),
(2,'(21)74746-1126'),
(2,'(14)64505-3435'),
(2,'(19)03086-1102'),
(3,'(14)64500-3435'),
(4,'(19)28260-0126'),
(5,'(21)34757-1544'),
(6,'(19)3030-4465'),
(6,'(19)93030-4460');

SELECT * FROM clientes;
SELECT * FROM telefones;
SELECT * FROM clientes JOIN telefones;
SELECT * FROM clientes JOIN telefones ON clientes.id = telefones.id;
SELECT * FROM clientes LEFT JOIN telefones ON clientes.id = telefones.id;
SELECT
	clientes.id,
	clientes.nome,
	clientes.nascimento,
	clientes.sexo,
	clientes.peso,
	telefones.telefone
FROM clientes LEFT JOIN telefones
ON clientes.id = telefones.id;

-- Criando um relatório salvando a consulta em uma "VIEW"
CREATE VIEW vw_clientes AS
SELECT
	c.id,
	c.nome,
	c.nascimento,
	c.sexo,
	c.peso,
	t.telefone
FROM clientes c LEFT JOIN telefones t
ON c.id = t.id

SHOW TABLES;
-- Ver o relatório com todos os dados
SELECT * FROM vw_clientes;
-- Ver o relatório com somente os 5 primeiros
SELECT * FROM vw_clientes LIMIT 5;
-- Ver o relatório intervalo do 5 ao 10
SELECT * FROM vw_clientes LIMIT 5, 10;
-- Ver os três ultimos resultados
SELECT * FROM vw_clientes ORDER BY id DESC LIMIT 3;

-- Criando um índice que melhora o desempenho de consultas
CREATE INDEX i_nome ON clientes(nome);

-- O desempenho de consutas exatas é melhorado pelo índice
SELECT * FROM vw_clientes WHERE nome = 'Marcos de Souza Castro';
-- Consulta aproximada
-- Iniciados com "Marcos"
SELECT * FROM vw_clientes WHERE nome LIKE 'Marcos%';
-- Que possuem "Souza" no nome
SELECT * FROM vw_clientes WHERE nome LIKE '%Souza%';
-- Que Terminam em "Souza"
SELECT * FROM vw_clientes WHERE nome LIKE '%Souza';
