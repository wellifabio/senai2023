# Aula12
## Situação Problema
|Contextualização|
|-|
|A doceria XPTO precisa de um relatório de vendas, utiliza um sistema que alimenta o banco de dados a seguir:|
- script.sql
```sql
drop database if exists vendas_balcao;
create database vendas_balcao;
use vendas_balcao;
create table vendedor(
	id int not null primary key auto_increment,
	nome varchar(50) not null
);

create table cliente(
	id int not null primary key  auto_increment,
	nome varchar(50) not null,
	telefone varchar(15)
);

create table venda(
	id int not null primary key auto_increment,
	id_vendedor int,
	id_cliente int,
	data TIMESTAMP not null,
	valor float(8,2) not null
);

ALTER TABLE venda ADD CONSTRAINT fk_vende FOREIGN key (id_vendedor) REFERENCES vendedor(id);
ALTER TABLE venda ADD CONSTRAINT fk_compra FOREIGN key (id_cliente) REFERENCES cliente(id);

insert into vendedor(nome) VALUES
("Ana"),
("Maria"),
("Bruna");

insert into cliente(nome, telefone) VALUES
("Marcos",null),
("Rita","19-99787-7979"),
("Fernanda","19-99154-4445"),
("Marcelo",null);

Insert into venda VALUES
(default, null, null, TIMESTAMPADD(MINUTE,-1440,now()), 100.00),
(default, 1, null, TIMESTAMPADD(MINUTE,-1400,now()), 200.00),
(default, 3, 4, TIMESTAMPADD(MINUTE,-1345,now()), 150.00),
(default, null, null, TIMESTAMPADD(MINUTE,-1305,now()), 79.90),
(default, 1, null, TIMESTAMPADD(MINUTE,-1250,now()), 79.90),
(default, 2, 2, TIMESTAMPADD(MINUTE,-1180,now()), 89.90),
(default, 1, 2, TIMESTAMPADD(MINUTE,-1040,now()), 99.90),
(default, 3, null, TIMESTAMPADD(MINUTE,-1000,now()), 179.90),
(default, 1, 2, TIMESTAMPADD(MINUTE,-60,now()), 119.90),
(default, 2, 3, TIMESTAMPADD(MINUTE,-45,now()), 69.90),
(default, 3, 4, TIMESTAMPADD(MINUTE,-30,now()), 29.90),
(default, 3, null, TIMESTAMPADD(MINUTE,-20,now()), 29.90),
(default, null, null, TIMESTAMPADD(MINUTE,-10,now()), 29.90);
```

|Desafios|
|-|
|1. Crie uma consulta que mostre somente as vendas da vendedora "Maria";<br>2. Crie uma consulta que mostre todas as compras do cliente "Marcelo";<br>3. Crie um relatorio que mostre todas as vendas com os seguintes campos: id da venda, nome do vendedor, nome do cliente, data e valor em ordem de data decrescente; Salve com o nome de **vw_vendas_gerais**; OBS: vendas em que id_vendedor ou id_cliente sejão nulos não devem aparecer;<br>4. Crie um relatório com os mesmos campos do relatório anterior porem contendo também os campos nulos(id_vendedor, id_cliente); Salve com o nome de **vw_vendas_nao_nulas**;<br>5. Crie um relatorio com os dados do relatório anterior vw_vendas_nao_nulas que **agrupe** os vendedores e mostre quantas vendas, faça a soma do valor total e calcule uma comissão de 10% sobre o total; Salve como **vw_vendas_comissao**;<br>6. Crie um relatorio de vendas com os mesmos campos do item 3, vw_vendas_gerais porem que mostre somente as vendas em que o campo id_vendedor é nulo: Salve como vw_vendas_balcao;<br>7. Crie uma consulta que mostre somente as vendas de hoje;|
|**Entregas**|
|Mostre ao professor ou salve seu sript e envie como o professor solicitar, pasta na rede local, github ...|
