-- DQL Consultas, Visões/Relatórios

-- 1. Crie uma query que mostre todos os dados da tabela de estacionamentos e uma coluna que calcule o tempo_total em horas
-- Salve o resultado desta consulta como um relatório/view chamado vw_estacionamento
CREATE VIEW vw_estacionamento AS
SELECT *, CEILING(TIMESTAMPDIFF(MINUTE, entrada, saida)/60) AS tempo_total FROM estacionamento;
-- A Função TIMESTAMPDIFF() Faz cálculos de diferença de horas e a CELLING() arredonda para cima

-- 2. crie uma query altere o campo 'saída' do estacionamento id=168 para "2022-03-08 18:00:00"
UPDATE estacionamento SET saida = "2022-03-08 18:00:00" WHERE id = 168;

-- 3. crie uma query altere o campo 'valor' conforme a seguinte regra de negócio
-- (Primeira hora = valor da vaga + 3.00 reais por hora adicional)
UPDATE estacionamento SET
    valor = (SELECT valor FROM vaga WHERE id = (SELECT id_vaga FROM estacionamento WHERE id=168))
    +3*((SELECT tempo_total FROM vw_estacionamento WHERE id=168)-1) WHERE id=168;
-- Este exemplo é um query com subconsultas.

-- 4. Crie uma query que mostre todos os dados da view vw_estacionamento em ordem de saída decrescente
-- também acrescente as colunas nome do cliente, modelo e cor do veículo e tipo da vaga
-- Salve esta consulta como vw_estacionamento_full
CREATE VIEW vw_estacionamento_full AS
SELECT v.id, v.placa, ve.modelo, ve.cor, v.cpf, c.nome, v.id_vaga, va.tipo, v.entrada, v.saida, v.valor, v.tempo_total
FROM vw_estacionamento v
INNER JOIN cliente c ON v.cpf = c.cpf
INNER JOIN veiculo ve ON v.placa = ve.placa
INNER JOIN vaga va ON v.id_vaga = va.id
ORDER BY v.saida DESC;

SELECT * FROM vw_estacionamento;
SELECT * FROM vw_estacionamento_full;

-- Exportar o Relatório/View estacionamento_full para análise de dados
SELECT * FROM vw_estacionamento_full INTO OUT FILE d:/relestacionamento.csv;