-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS avaliacao;
CREATE DATABASE avaliacao CHARSET = UTF8 COLLATE utf8_general_ci;
USE avaliacao;

-- DDL Criação da estrutura da tabela - Com um campo calculável
CREATE TABLE pacientes(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    peso float(5, 2) not null,
    altura float(3, 2) not null,
    imc float(4,2) GENERATED ALWAYS AS (ROUND(peso / (altura * altura), 1)) VIRTUAL
);

-- DML Popular a tabela com dados de teste
INSERT INTO
    pacientes
VALUES
    (null, 'Jair Rodrigues', '1981-01-03', 85.5, 1.75,null),
    (null, 'Marieta Severo', '1995-03-04', 44.3, 1.55,null),
    (null, 'Karina Silva', '2002-05-13', 88, 1.73,null),
    (null, 'Solange Nascimento','2005-12-01',95,1.58,null),
    (null, 'Marcos Pontes', '2001-12-03', 60, 1.98,null);

-- Criando uma função para calcular o diagnóstico
DROP FUNCTION IF EXISTS diagnostico;
delimiter //
CREATE FUNCTION diagnostico(imc float(4, 2)) RETURNS TEXT
BEGIN
    DECLARE resultado TEXT;
    SET
        resultado = IF(imc < 18.5,'Abaixo do peso',
            IF(imc < 25,'Peso ideal',
                IF(imc < 30,'Sobrepeso',
                    IF(imc < 35,'Obesidade Gral I',
                        IF(imc < 40,'Obesidade Gral II','Obesidade Gral III')
                    )
                )
            )
        );
    RETURN resultado;
END //
delimiter ;

-- Criar uma VISÃO COM OS ATRIBUTOS DERIVADOS
CREATE VIEW vw_pacientes AS
SELECT *,
    TIMESTAMPDIFF(YEAR, nascimento, NOW()) AS idade,
    diagnostico(imc) AS diagnostico
FROM
    pacientes;

SELECT * FROM vw_pacientes;