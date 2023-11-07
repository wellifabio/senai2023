-- Imgine o seguinte cenário
select * from clientes;
-- O cliente 15 "Claudiney Ramos Tinoco" quer duas pizzas uma baiana e uma marguerita
select * from pizzas;
-- 6 Baiana 32.13
-- 22 Margherita 34.37
-- Registrando o pedido
insert into pedidos values (default, 15, curdate(), curtime(), null);
select * from pedidos order by pedido_id desc limit 1;
select last_insert_id();
-- pedido_id = 27
insert into itens_pedido values (27,6,1,32.13);
insert into itens_pedido values (27,22,1,34.37);

update pedidos
set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = 27)
where pedido_id = 27;

-- Exemplo de Stored procedure (Procedimento armazenado) que atualiza total do pedido
drop procedure if exists set_total_pedido();
delimiter //
create procedure set_total_pedido(id int)
begin
	update pedidos
	set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = id)
	where pedido_id = id;
end//
delimiter ;

-- Como temos apenas um comando neste precedimento, não é necessário alterar delimiter ou begin end
drop procedure if exists set_total_pedido();
create procedure set_total_pedido(id int)
update pedidos
set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = id)
where pedido_id = id;

-- Mostrar as procedures que meu BD possui.
SHOW PROCEDURE STATUS;

-- testar a PROCEDURE
select * from pedidos order by pedido_id desc limit 1;
-- vamos zerar o valor do pedido
update pedidos set valor = 0 where pedido_id = 27;
select * from pedidos order by pedido_id desc limit 1;
-- chamar o procedimento
call set_total_pedido(27);
select * from pedidos order by pedido_id desc limit 1;

-- Um exemplo de transação completa para realizar um pedido é a seguinte:
insert into pedidos values (default, 15, curdate(), curtime(), null);
insert into itens_pedido values (27,6,1,32.13);
insert into itens_pedido values (27,22,1,34.37);
call set_total_pedido(27);

-- Exercícios:
-- "Thamires de Campos Luz" quer uma pizza Vienense
select * from clientes where nome like "%thamires%";
-- id 96
select * from pizzas where nome like "Vie%";
-- id 41
insert into pedidos values (null, 96, curdate(), curtime(), null);
insert into itens_pedido values (28,41,1,29.09);
call set_total_pedido(28);
select * from pedidos where pedido_id = 28;
-- "Everton Jose de Souza" que duas Toscana
select * from clientes where nome like "%Everton%";
-- id 105
select * from pizzas where nome like "Toscana%";
-- id 39, preco 29.41
insert into pedidos values (null, 105, curdate(), curtime(), null);
select * from pedidos order by pedido_id desc limit 1;
insert into itens_pedido values (29,39,2,29.41);
call set_total_pedido(29);
select * from pedidos order by pedido_id desc limit 1;

-- Gatilhos - TRIGGER
-- Gatilhos e procedimentos são semelhantes o que muda é como são executados
-- Precedimentos temos que chamamá-los.
-- Gatilhos são automáticos, antes ou depois de um DML (insert, update, delete)

-- Exemplo de trigger
drop trigger if exists update_total_pedido;
delimiter //
create trigger update_total_pedido
after insert on itens_pedido
for each row
begin
	update pedidos
	set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = new.pedido_id)
	where pedido_id = new.pedido_id;
end//
delimiter ;

-- Como esta trigger só tem um comando também não precisa de delimitador ou begin/end
drop trigger if exists update_total_pedido;
create trigger update_total_pedido
after insert on itens_pedido
for each row
	update pedidos
	set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = new.pedido_id)
	where pedido_id = new.pedido_id;

-- Mostrar os gatilhos (triggers) que meu BD possui.
show triggers;
	
-- testando com o último exercício
-- "Silvia Roberta de Jesus Garcia" que uma Canadense e 2 Cubanas
select * from clientes where nome like "%Silvia%";
-- id 93
select * from pizzas where nome like "Canadense%";
select * from pizzas where nome like "Cubana%";
-- canadense 11, 31.33
-- cubana 14, 30.85
insert into pedidos values (null, 93, curdate(), curtime(), null);
select last_insert_id();
insert into itens_pedido values (30,11,1,31.33);
insert into itens_pedido values (30,14,2,30.85);
select * from pedidos order by pedido_id desc limit 1;


-- Criada uma view para mostrar o resultado do Procedimento  a seguir:
create view vw_pedidos_itens as
select  p.pedido_id, c.nome, p.data, p.hora, pz.nome as pizza, i.quantidade, i.valor, p.valor as total
from pedidos p inner join clientes c on p.cliente_id = c.cliente_id
inner join itens_pedido i on p.pedido_id = i.pedido_id
inner join pizzas pz on i.pizza_id = pz.pizza_id;

-- Crie uma procedure que receba como parâmetros cliente_id, pizza_id e quantidade e gere um pedido com um item, coloque o nome de "new_pedido_1item()"
drop procedure if exists new_pedido_1item;
delimiter //
create procedure new_pedido_1item(idc int,idp int,qtd int)
begin
	insert into pedidos value(default, idc, curdate(), curtime(), null);
	set @preco = (select valor from pizzas where pizza_id = idp);
	insert into itens_pedido value(last_insert_id(),idp,qtd,@preco);
	select * from vw_pedidos_itens where pedido_id = last_insert_id();
end //
delimiter ;

-- Com tratamento de erros e condicionais (IF ELSE)
drop procedure if exists new_pedido_1item;
delimiter //
create procedure new_pedido_1item(idc int,idp int,qtd int)
begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	insert into pedidos value(default, idc, curdate(), curtime(), null);
	set @preco = (select valor from pizzas where pizza_id = idp);
	insert into itens_pedido value(last_insert_id(),idp,qtd,@preco);
	IF erro_sql = false THEN
		select * from vw_pedidos_itens where pedido_id = last_insert_id();
		select 'Pedido cadastrado com sucesso' as 'Sucesso';
	ELSE
		select 'Erro ao inserir pedido' as 'Erro';
	END IF;
end //
delimiter ;

call new_pedido_1item(200,3,1);

