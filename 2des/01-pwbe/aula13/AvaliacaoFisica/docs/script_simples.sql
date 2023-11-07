-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS avaliacao;
CREATE DATABASE avaliacao CHARSET=UTF8 COLLATE utf8_general_ci;
USE avaliacao;
-- DDL Criação da estrutura da tabela
CREATE TABLE pacientes(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    peso float(5,2) not null,
    altura float(3,2) not null
);

INSERT INTO pacientes VALUES
(null,'Jair Rodrigues','1981-01-03',85.5,1.75),
(null,'Marieta Severo','1995-03-04',44.3,1.55),
(null,'Karina Silva','2002-05-13',88,1.73),
(null,'Solange Nascimento','2005-12-01',95,1.58),
(null,'Marcos Pontes','2001-12-03',60,1.98);