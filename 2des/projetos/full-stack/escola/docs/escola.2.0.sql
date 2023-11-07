-- Script SQL de criação e população do banco de dados Escola
drop database if exists escola;
create database escola charset=UTF8 collate utf8_general_ci;
use escola;

-- Script DDL de Criação das tabelas e relacionamentos
create table professor(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    especialidade varchar(50)
);

create table turma(
    id integer not null primary key auto_increment,
    nome varchar(30) not null,
    abreviacao varchar(5) not null
);

create table aluno(
    ra varchar(10) not null primary key,
    nome varchar(50) not null,
    nascto Date not null,
    id_turma integer not null,
    foreign key (id_turma) references turma(id)
);

create table leciona(
    id_prof integer not null,
    id_turma integer not null,
    foreign key (id_prof) references professor(id)
    on delete cascade on update cascade,
    foreign key (id_turma) references turma(id)
    on delete cascade on update cascade
);
