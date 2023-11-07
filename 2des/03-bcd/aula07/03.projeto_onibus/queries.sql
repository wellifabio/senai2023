-- Query
-- Inserir um motorista novo, que ainda não possui telefone
INSERT INTO motorista VALUE ('111.111.111-11','Jair');
-- 1.Criar uma consulta que mostre os motoristas e telefones
-- Detalhe: mesmo que o motorista não possua telefone deve aparecer na consulta
SELECT * FROM motorista m
	LEFT JOIN telefone t
	ON m.cpf = t.cpf_motorista;
-- 2. Criar uma consulta que mostre o "nome do motorista" e o "id da linha"
SELECT m.nome, d.id_linha FROM motorista m
	INNER JOIN dirige d
	ON m.cpf = d.cpf_motorista;
-- Detalhe: Caso o motorista não possua nenhuma linha deve aparecer
SELECT m.nome, d.id_linha FROM motorista m
	LEFT JOIN dirige d
	ON m.cpf = d.cpf_motorista;
-- Inserir uma linha ainda sem motorista
INSERT INTO linha VALUE ('linha6','Pedreira x Arcadas');
-- Detalhe: Caso a linha não possua motorista deve aparecer
SELECT m.nome, l.id FROM motorista m
	JOIN dirige d
	ON m.cpf = d.cpf_motorista
	RIGHT JOIN linha l
	ON d.id_linha = l.id;
-- Detalhe: A consulta deve mostrar tanto motoristas com ou sem linha e linhas sem motoristas
SELECT m.nome, d.id_linha FROM motorista m
	LEFT JOIN dirige d
	ON m.cpf = d.cpf_motorista
	UNION
	SELECT m.nome, l.id FROM motorista m
		JOIN dirige d
		ON m.cpf = d.cpf_motorista
		RIGHT JOIN linha l
		ON d.id_linha = l.id;
-- A admnistração da empresa de onibus, percebeu qe existe uma linha sem motorista e um motorista sem linha
-- Registre esta linha para este motorista.
INSERT INTO dirige VALUE ('111.111.111-11','linha6');
-- Podemos colocar o Jair em outra linha também
INSERT INTO dirige VALUE ('111.111.111-11','linha1');

-- DESAFIOS (Crie consultas que:)
-- A: Mostre o nome, os telefone e id_linha do motorista ou motoristas da linha1
-- B: Mostre os horários da linha1
-- C: Mostre o id_linha das linhas que tenham horário  as 11:00hs.
-- D: Mostre os nomes, telefones, id_linha, descricao e horários orenado por id_linha
-- E: Mostre uma consulta que mostre os nomes dos motoristas e quantas linhas este dirige
-- F: Mostre o id_linha, a descrição e quantos motoristas esta possui












