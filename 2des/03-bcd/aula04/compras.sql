DROP DATABASE IF EXISTS compras;
CREATE DATABASE compras CHARSET=UTF8 COLLATE utf8_general_ci;
USE compras;
-- DDL
CREATE TABLE clientes(
    cpf varchar(15) not null PRIMARY KEY, 
    nome varchar(100) not null,
    cep varchar(11) not null,
    numero varchar(5),
    complemento varchar(50)
);

CREATE TABLE telefones(
    cpf varchar(15) not null,
    numero varchar(15) not null,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf)
    on delete cascade on update cascade
);

CREATE TABLE compras(
    n_compra int primary key auto_increment,
    data Date not null,
    vencimento date not null,
    pagamento date,
    valor float(10,2) not null,
    cpf varchar(15) not null,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf)
);

SHOW tables;

-- DML
INSERT INTO clientes(cpf,nome,cep) VALUES
('111.111.111-11','jão','13558-234'),
('111.111.111-22','Zé','13558-234'),
('111.111.111-33','Tonho','13558-222');

INSERT INTO clientes VALUES
('111.222.333-44','Silvaro','13234-443','125',null),
('111.222.333-41','Silvaro','13234-443','125','Fundos');

INSERT INTO telefones VALUES
('111.111.111-11','19 22222-1111');

INSERT INTO compras(data,vencimento,valor,cpf) VALUES
('2023-01-02','2023-02-02',200,'111.111.111-11'),
('2023-01-03','2023-02-03',300,'111.111.111-11'),
('2023-01-03','2023-02-03',400,'111.111.111-33');
select * from compras;