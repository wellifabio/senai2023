drop database if exists usuarios;
create database usuarios;
use usuarios;
create table users(
	id int not null primary key auto_increment,
	login varchar(50) not null,
	senha varchar(50) not null
);

insert into users VALUES
(default,'jair',md5('maria')),
(default,'mariana',md5('03101990')),
(default,'julia',md5('123456')),
(default,'rafaela',md5('rafa123'));

select * from users;
