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