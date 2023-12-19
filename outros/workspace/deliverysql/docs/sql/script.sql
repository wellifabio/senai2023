-- DDL (Desenvolvimento)
drop database if exists delivery;
create database delivery charset=utf8 collate utf8_general_ci;
use delivery;

create table entregadores(
    id_entregador integer not null primary key auto_increment,
    nome_completo varchar(50) not null,
    veiculo varchar(20) not null
);
create table produtos(
    id_produto integer not null primary key auto_increment,
    nome varchar(50) not null,
    preco decimal(7,2) not null
);
create table clientes(
    id_cliente integer not null primary key auto_increment,
    cpf varchar(15),
    nome_completo varchar(50) not null,
    endereco varchar(100) not null,
    telefone varchar(15) not null,
	unique(cpf)
);
create table pedidos(
    id_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    id_entregador integer,
    data Date not null,
    hora_pedido Time not null,
    hora_entrega Time,
    hora_fim Time
);
create table itens(
    id_pedido integer not null,
    id_produto integer not null,
    quantidade integer not null
);

alter table pedidos add
constraint fk_entrega foreign key (id_entregador)
references  entregadores(id_entregador);

alter table pedidos add
constraint fk_pede foreign key (id_cliente)
references  clientes(id_cliente);

alter table itens add
constraint fk_item_pedido foreign key (id_pedido)
references pedidos(id_pedido)
on delete cascade;

alter table itens add
constraint fk_item_produto foreign key (id_produto)
references produtos(id_produto)
on delete cascade;

describe entregadores;
describe produtos;
describe clientes;
describe pedidos;
describe itens;
show tables;

-- DML(Manipulação)
-- Importando os dados de produtos.csv
LOAD DATA INFILE 'C:/Users/wellington.martins/Desktop/workspace/deliverysql/docs/sql/produtos.csv'
INTO TABLE produtos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- Importando os dados de clientes.csv
LOAD DATA INFILE 'C:/Users/wellington.martins/Desktop/workspace/deliverysql/docs/sql/clientes.csv'
INTO TABLE clientes
character set utf8
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- Importando os dados de entregadores.csv
LOAD DATA INFILE 'C:/Users/wellington.martins/Desktop/workspace/deliverysql/docs/sql/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- Importando dados do Excel via concatenação de dados
insert into pedidos values
(1,1,1,curdate(),curtime(),"08:03","08:03"),
(2,2,4,curdate(),curtime(),"08:03","08:03"),
(3,3,2,curdate(),curtime(),"08:03","08:03"),
(4,4,4,curdate(),curtime(),"08:03","08:03"),
(5,5,2,curdate(),curtime(),"08:03","08:03"),
(6,6,1,curdate(),curtime(),"08:03","08:03"),
(7,7,2,curdate(),curtime(),"08:03","08:03"),
(8,8,3,curdate(),curtime(),"08:03","08:03"),
(9,9,1,curdate(),curtime(),"08:03","08:03"),
(10,10,3,curdate(),curtime(),"08:03","08:03"),
(11,11,1,curdate(),curtime(),"08:03","08:03"),
(12,12,3,curdate(),curtime(),"08:03","08:03"),
(13,13,1,curdate(),curtime(),"08:03","08:03"),
(14,14,1,curdate(),curtime(),"08:03","08:03"),
(15,15,1,curdate(),curtime(),"08:03","08:03"),
(16,16,1,curdate(),curtime(),"08:03","08:03"),
(17,17,3,curdate(),curtime(),"08:03","08:03"),
(18,18,1,curdate(),curtime(),"08:03","08:03"),
(19,19,3,curdate(),curtime(),"08:03","08:03"),
(20,20,1,curdate(),curtime(),"08:03","08:03"),
(21,21,3,curdate(),curtime(),"08:03","08:03"),
(22,22,3,curdate(),curtime(),"08:03","08:03"),
(23,23,2,curdate(),curtime(),"08:03","08:03"),
(24,24,1,curdate(),curtime(),"08:03","08:03"),
(25,25,1,curdate(),curtime(),"08:03","08:03"),
(26,26,4,curdate(),curtime(),"08:03","08:03"),
(27,27,4,curdate(),curtime(),"08:03","08:03"),
(28,28,2,curdate(),curtime(),"08:03","08:03"),
(29,29,2,curdate(),curtime(),"08:03","08:03");

insert into itens values
(1,4,2),
(2,5,1),
(3,1,3),
(4,6,3),
(5,1,3),
(6,1,1),
(7,6,1),
(8,7,3),
(9,3,2),
(10,5,2),
(11,7,3),
(12,3,2),
(13,2,1),
(14,5,3),
(15,2,1),
(16,4,3),
(17,5,2),
(18,6,1),
(19,2,2),
(20,2,2),
(21,1,1),
(22,5,3),
(23,1,3),
(24,6,2),
(25,4,3),
(26,3,3),
(27,2,1),
(28,1,2),
(29,3,2);

select * from produtos;
select * from clientes;
select * from entregadores;
select * from pedidos;
select * from itens;

