# Aula 11
## DQL - Queries
### SELECT * FROM
#### QUESTS (Missões) (BD Pizzaria)
##### Execute as seguintes tarefas acessando o SGBD pelo Shell (mysql -u root) ou Pelo Navegador (PHPMyAdmin)
- 1. Quantas tabelas ele possui
- 2. Quantos Clientes cadastrados
- 3. Quantas pizzas Cadastradas
- 4. Quantas pizzas o pedido nº 3 possui
- 5. Qual nome do cliente que fez o pedido nº 3
- 6. Quais os nomes das pizzas do pedido nº 3
- [Soluções](./queries.sql)
|Descrição|Link|
|-|-|
|MySQL tipos de JOIN|https://www.pinterest.dk/pin/671740100648793472/|

#### Visões
- visoes.sql
```sql
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
```
#### DESAFIO:
- 1. Crie um **relatório** que mostre todos os pedidos, itens, nome dos clientes e nome das pizzas.
- 2. Acrescente uma coluna chamada subtotal que seja o calculo do preco unitário da pizza vezes a quantidade
- 3. Agrupe os pedidos e calcule o valor total
- 4. Agrupe os pedidos e conte quantas pizzas cada pedido possui
- [Soluções](./visoes.sql)
## DDL - Índices
- 2.2. SQL (structured query language) (DQL)
- 2.4.7. CREATE INDEX (DDL)
- 2.4.8. DROP INDEX (DDL)
## Índices
- São colunas de tabelas semelhantes a cheves primárias porém não servem para relacionamentos
- Servem para melorar o desempenho de consultas
- Ex: pizzaria.cliente (./indices.sql)
```sql
SELECT * FROM clientes;
-- Verificar o desempenho, menos de 1 milisegundo
DESCRIBE clientes;
-- Descrever a estrutura da tabela
-- Identificamos a chave primária (cliente_id)
SELECT * FROM clientes WHERE nome = 'Adelcio Biazi';
SELECT * FROM clientes WHERE nome LIKE 'Adelcio';
SELECT * FROM clientes WHERE nome LIKE '%Ana%';
SELECT * FROM clientes WHERE nome LIKE 'Ana%';
-- Buscas por nome
CREATE INDEX i_nome on clientes(nome);
-- Criado o índice no campo Nome
DESCRIBE clientes;
-- Verificado se o índice foi criado
SELECT * FROM clientes WHERE nome LIKE 'Ana%';
-- Testando com uma nova busca
```
## Programação em Banco de dados
- 2.15. STORED PROCEDURE
- 2.17. TRIGGERS
- [Demonstrações e soluções](./procedimentos.sql)
## DESAFIOS
- Crie um Procedimento Armazenado que receba três parâmetros (cliente_id, pizza_id e quantidade) e registre um pedido de um item calculando o total ex: pedidoDeUmItem(cli_id int, piz_id int, qtd int)
- Cadastre os seguintes pedidos para testar:
	- 1. "Thamires de Campos Luz" quer uma pizza Vienense
	- 2. "Everton Jose de Souza" que duas Toscana
	- 3. "Silvia Roberta de Jesus Garcia" que uma Canadense e 2	Cubanas
