drop database if exists usuarios;
create database usuarios;
use usuarios;
create table users(
	id int not null primary key auto_increment,
	login varchar(50) not null,
	senha varchar(50) not null
);

insert into users VALUES
(default,'jair',password('maria')),
(default,'mariana',password('03101990')),
(default,'julia',password('123456')),
(default,'rafaela',password('rafa123'));

select * from users;
