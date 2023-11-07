create table perfis(
    id SERIAL primary key,
    perfil varchar(50) not null
);
create table usuarios(
    id SERIAL primary key,
    senha varchar(50) not null,
    perfil_id integer not null,
    foreign key (perfil_id) references perfis(id)
);
create table equipamentos(
    id SERIAL primary key,
    equipamento varchar(256) not null,
    imagem varchar(50) not null,
    descricao varchar(1024) not null,
    ativo integer not null,
    data timestamp not null
);
create table comentarios(
    id SERIAL primary key,
    comentario varchar(256) not null,
    equipamento_id integer not null,
    perfil_id integer not null,
    data timestamp not null,
    foreign key (equipamento_id) references equipamentos(id) on delete cascade,
    foreign key (perfil_id) references perfis(id)
);
