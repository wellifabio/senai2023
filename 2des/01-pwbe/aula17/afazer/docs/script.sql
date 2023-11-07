-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS afazer;
CREATE DATABASE afazer CHARSET=UTF8 COLLATE utf8_general_ci;
USE afazer;
-- DDL Criação da estrutura da tabela
CREATE TABLE tarefas(
    id integer not null primary key auto_increment,
    descricao text not null,
    quando datetime not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO tarefas VALUES
(null,'Acordar',TIMESTAMPADD(MINUTE,-1440,now())),
(null,'Fazer a higiene bucal',TIMESTAMPADD(MINUTE,-1430,now())),
(null,'Tomar banho',TIMESTAMPADD(MINUTE,-1420,now())),
(null,'Me vestir para o trabalho',TIMESTAMPADD(MINUTE,-1410,now())),
(null,'Tomar o café da manhã',TIMESTAMPADD(MINUTE,-1400,now())),
(null,'Dirigir até o trabalho',TIMESTAMPADD(MINUTE,-1350,now())),
(null,'Voltar pra casa',TIMESTAMPADD(HOUR,-15,now())),
(null,'Comer',TIMESTAMPADD(HOUR,-14,now())),
(null,'Assistir Série',TIMESTAMPADD(HOUR,-13,now())),
(null,'Acordar',now()),
(null,'Fazer a higiene bucal',TIMESTAMPADD(MINUTE,10,now())),
(null,'Tomar banho',TIMESTAMPADD(MINUTE,20,now())),
(null,'Me vestir para o trabalho',TIMESTAMPADD(MINUTE,30,now())),
(null,'Tomar o café da manhã',TIMESTAMPADD(MINUTE,40,now())),
(null,'Dirigir até o trabalho',TIMESTAMPADD(MINUTE,50,now())),
(null,'Voltar pra casa',TIMESTAMPADD(HOUR,9,now())),
(null,'Comer',TIMESTAMPADD(HOUR,10,now())),
(null,'Assistir Série',TIMESTAMPADD(HOUR,11,now())),
(null,'Acordar',TIMESTAMPADD(MINUTE,1450,now())),
(null,'Fazer a higiene bucal',TIMESTAMPADD(MINUTE,1460,now())),
(null,'Tomar banho',TIMESTAMPADD(MINUTE,1470,now())),
(null,'Me vestir para o trabalho',TIMESTAMPADD(MINUTE,1480,now())),
(null,'Tomar o café da manhã',TIMESTAMPADD(MINUTE,1490,now())),
(null,'Dirigir até o trabalho',TIMESTAMPADD(MINUTE,1500,now())),
(null,'Voltar pra casa',TIMESTAMPADD(HOUR,33,now())),
(null,'Comer',TIMESTAMPADD(HOUR,34,now())),
(null,'Assistir Série',TIMESTAMPADD(HOUR,35,now()));

SELECT * FROM tarefas;

