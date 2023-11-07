drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;

create table entregadores(
	id integer not null primary key auto_increment,
	nome varchar(100) not null,
	email varchar(100) not null,
	senha varchar(100) not null,
	veiculo varchar(100) not null
);

create table pedidos(
	id_pedido integer not null primary key auto_increment,
	cliente varchar(100) not null,
	endereco varchar(100) not null,
	produto varchar(100) not null,
	data date not null,
	hora_pedido time not null,
	hora_entrega time,
	hora_fim time,
	entregador integer not null,
	foreign key (entregador) references entregadores(id)
);

LOAD DATA INFILE 'D:/pedidos/db/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/pedidos/db/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

update pedidos set hora_fim = null where hora_fim = "00:00:00";
update pedidos set hora_entrega = null where id_pedido > 61;

create view vw_pedidos_cozinha as
select id_pedido,cliente,endereco,Produto,data,hora_pedido,hora_entrega,hora_fim,entregador
from pedidos
where hora_fim is null AND hora_entrega is null;

create view vw_pedidos_entrega as
select id_pedido,cliente,endereco,Produto,data,hora_pedido,hora_entrega,hora_fim,entregador
from pedidos
where hora_fim is null AND hora_entrega is not null;

create view vw_pedidos_ativos as
select id_pedido,cliente,endereco,Produto,data,hora_pedido,hora_entrega,hora_fim,entregador
from pedidos
where hora_fim is null OR hora_entrega is null;
