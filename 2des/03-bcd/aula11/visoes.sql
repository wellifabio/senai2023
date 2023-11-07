-- Relatório que mostra todos os pedidos e o nome de cada cliente
SELECT * FROM pedidos;
SELECT p.*, c.nome  FROM pedidos p INNER JOIN clientes c
ON p.cliente_id = c.cliente_id;
-- Salvar a consulta como uma VIEW / Relatório
CREATE VIEW vw_pedidos1 AS
SELECT p.*, c.nome  FROM pedidos p INNER JOIN clientes c
ON p.cliente_id = c.cliente_id;
-- Para ver o resultado
SELECT * FROM vw_pedidos1;
-- DESAFIO (Relatório que mostre todos os pedidos, itens, nome dos clientes e nome das pizzas)
-- Query
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco , c.nome, pi.nome AS pizza
FROM pedidos p INNER JOIN itens_pedido i
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id;
-- Salvar a Conclulta como uma VIEW/RELATÓRIO
CREATE VIEW vw_pedidos_full AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco , c.nome, pi.nome AS pizza
FROM pedidos p INNER JOIN itens_pedido i
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id;
-- Para ver o resultado
SELECT * FROM vw_pedidos_full;
-- Acrescente uma coluna chamada subtotal que seja o calculo do preco unitário da pizza vezes a quantidade
DROP VIEW IF EXISTS vw_pedidos_full;
CREATE VIEW vw_pedidos_full AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco, i.valor * i.quantidade AS subtotal,
c.nome, pi.nome AS pizza
FROM pedidos p INNER JOIN itens_pedido i
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id;
-- Para ver o resultado
SELECT * FROM vw_pedidos_full;
-- Agrupe os pedidos e calcule o valor total
SELECT *, sum(subtotal) as Total FROM vw_pedidos_full GROUP BY pedido_id;
-- Agrupe os pedidos e conte quantas pizzas cada pedido possui
SELECT *, sum(quantidade) as total_pizzas FROM vw_pedidos_full GROUP BY pedido_id;