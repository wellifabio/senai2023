drop database if exists techman;
create database techman charset=UTF8 collate utf8_general_ci;

-- DDL (Desenvolvimento de Dados)
use techman;
create table perfis(
    id integer not null primary key auto_increment,
    perfil varchar(50) not null
);
create table usuarios(
    id integer not null primary key auto_increment,
    senha varchar(50) not null,
    perfil_id integer not null,
    foreign key (perfil_id) references perfis(id)
);
create table equipamentos(
    id integer not null primary key auto_increment,
    equipamento varchar(256) not null,
    imagem varchar(50) not null,
    descricao varchar(1024) not null,
    ativo integer not null,
    data timestamp not null
);
create table comentarios(
    id integer not null primary key auto_increment,
    comentario varchar(256) not null,
    equipamento_id integer not null,
    perfil_id integer not null,
    data timestamp not null,
    foreign key (equipamento_id) references equipamentos(id) on delete cascade,
    foreign key (perfil_id) references perfis(id)
);
show tables;

-- DML(Manipulação) Importando os dados dos arquivos CSV
LOAD DATA INFILE 'c:/wfom/senai2022/3des/saep/techman/doc/dados/perfis.csv'
INTO TABLE perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from perfis;

LOAD DATA INFILE 'c:/wfom/senai2022/3des/saep/techman/doc/dados/usuarios.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from usuarios;

LOAD DATA INFILE 'c:/wfom/senai2022/3des/saep/techman/doc/dados/equipamentos.csv'
INTO TABLE equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from equipamentos;

LOAD DATA INFILE 'c:/wfom/senai2022/3des/saep/techman/doc/dados/comentarios.csv'
INTO TABLE comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from comentarios;

CREATE VIEW vw_login AS
SELECT u.id as u_id, u.senha, p.id as p_id, p.perfil
FROM usuarios u INNER JOIN perfis p ON u.perfil_id = p.id;

select * from vw_login;

CREATE VIEW vw_comentarios AS
SELECT c.id, c.equipamento_id, p.perfil, c.comentario, c.data 
FROM comentarios c INNER JOIN perfis p ON c.perfil_id = p.id
order by c.data desc;

select * from vw_comentarios;