-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS bonificacoes;
CREATE DATABASE bonificacoes CHARSET=UTF8 COLLATE utf8_general_ci;
USE bonificacoes;
-- DDL Criação da estrutura da tabela
CREATE TABLE funcionarios(
    matricula integer not null primary key auto_increment,
    nome varchar(50) not null,
    admissao date not null,
    salario float(8,2) not null,
    pagamento date not null,
    desempenho float(3,1) not null,
    bonificacao float(8,2) AS (0.02 * salario * TIMESTAMPDIFF(YEAR,admissao,NOW()) * desempenho)
);

-- DML Dados de teste
INSERT INTO funcionarios VALUES
(null,'José Rodrigues','2018-01-06',1300.00,CURDATE(),7,NULL),
(null,'Maria Severo','2018-03-04',2200.00,CURDATE(),10,NULL),
(null,'Silvia Silva','2019-05-20',3200.00,CURDATE(),10,NULL),
(null,'Solange Oliveira','2020-12-11',5500.00,CURDATE(),8.5,NULL),
(null,'Fabiana Silva','2020-01-02',1000.00,CURDATE(),10,NULL),
(null,'Mariana Pontes','2021-12-13',2350.00,CURDATE(),6,500);

SELECT * FROM funcionarios;

