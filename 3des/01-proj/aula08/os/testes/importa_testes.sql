USE os;

LOAD DATA INFILE 'D:/wellington/pessoal/arquivos/0_senai/2023/04-projetos/os/dados/colaboradores.csv'
INTO TABLE colaborador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/pessoal/arquivos/0_senai/2023/04-projetos/os/dados/oss.csv'
INTO TABLE os
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/pessoal/arquivos/0_senai/2023/04-projetos/os/dados/comentarios.csv'
INTO TABLE comentario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- ALTERANDO AS HORAS IMPORTADAS COMO 000000 PARA NULL
UPDATE os SET encerramento = NULL where encerramento = "0000-00-00 00:00:00.000";

-- ATUALIZANDO AS OSs PARA DATAS MAIS PRÓXIMAS DA ATUAL
UPDATE os SET encerramento = NULL where encerramento = "0000-00-00 00:00:00.000";
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -35 day), encerramento = DATE_ADD(curtime(), INTERVAL -33 day) where id = 1;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -34 day), encerramento = DATE_ADD(curtime(), INTERVAL -32 day) where id = 2;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -31 day), encerramento = DATE_ADD(curtime(), INTERVAL -30 day) where id = 3;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -755 hour), encerramento = DATE_ADD(curtime(), INTERVAL -650 hour) where id = 4;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -725 hour), encerramento = DATE_ADD(curtime(), INTERVAL -600 hour) where id = 5;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -610 hour), encerramento = DATE_ADD(curtime(), INTERVAL -590 hour) where id = 6;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -595 hour), encerramento = DATE_ADD(curtime(), INTERVAL -570 hour) where id = 7;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -488 hour), encerramento = DATE_ADD(curtime(), INTERVAL -445 hour) where id = 8;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -378 hour), encerramento = DATE_ADD(curtime(), INTERVAL -328 hour) where id = 9;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -372 hour), encerramento = DATE_ADD(curtime(), INTERVAL -320 hour) where id = 10;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -370 hour), encerramento = DATE_ADD(curtime(), INTERVAL -321 hour) where id = 11;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -364 hour), encerramento = DATE_ADD(curtime(), INTERVAL -322 hour) where id = 12;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -360 hour), encerramento = DATE_ADD(curtime(), INTERVAL -326 hour) where id = 13;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -355 hour), encerramento = DATE_ADD(curtime(), INTERVAL -330 hour) where id = 14;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -350 hour), encerramento = DATE_ADD(curtime(), INTERVAL -310 hour) where id = 15;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -340 hour), encerramento = DATE_ADD(curtime(), INTERVAL -310 hour) where id = 16;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -335 hour), encerramento = DATE_ADD(curtime(), INTERVAL -300 hour) where id = 17;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -333 hour), encerramento = DATE_ADD(curtime(), INTERVAL -280 hour) where id = 18;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -328 hour), encerramento = DATE_ADD(curtime(), INTERVAL -270 hour) where id = 19;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -326 hour), encerramento = DATE_ADD(curtime(), INTERVAL -270 hour) where id = 20;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -320 hour), encerramento = DATE_ADD(curtime(), INTERVAL -263 hour) where id = 21;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -315 hour), encerramento = DATE_ADD(curtime(), INTERVAL -263 hour) where id = 22;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -308 hour), encerramento = DATE_ADD(curtime(), INTERVAL -275 hour) where id = 23;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -305 hour), encerramento = DATE_ADD(curtime(), INTERVAL -263 hour) where id = 24;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -300 hour), encerramento = DATE_ADD(curtime(), INTERVAL -263 hour) where id = 25;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -277 hour), encerramento = DATE_ADD(curtime(), INTERVAL -271 hour) where id = 26;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -274 hour), encerramento = DATE_ADD(curtime(), INTERVAL -271 hour) where id = 27;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -255 hour), encerramento = DATE_ADD(curtime(), INTERVAL -233 hour) where id = 28;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -249 hour), encerramento = DATE_ADD(curtime(), INTERVAL -221 hour) where id = 29;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -242 hour), encerramento = DATE_ADD(curtime(), INTERVAL -219 hour) where id = 30;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -240 hour), encerramento = DATE_ADD(curtime(), INTERVAL -225 hour) where id = 31;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -233 hour), encerramento = DATE_ADD(curtime(), INTERVAL -226 hour) where id = 32;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -209 hour), encerramento = DATE_ADD(curtime(), INTERVAL -197 hour) where id = 33;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -203 hour), encerramento = DATE_ADD(curtime(), INTERVAL -160 hour) where id = 34;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -185 hour), encerramento = DATE_ADD(curtime(), INTERVAL -175 hour) where id = 35;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -176 hour), encerramento = DATE_ADD(curtime(), INTERVAL -148 hour) where id = 36;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -167 hour), encerramento = DATE_ADD(curtime(), INTERVAL -145 hour) where id = 37;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -165 hour), encerramento = DATE_ADD(curtime(), INTERVAL -162 hour) where id = 38;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -157 hour), encerramento = DATE_ADD(curtime(), INTERVAL -142 hour) where id = 39;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -150 hour), encerramento = DATE_ADD(curtime(), INTERVAL -103 hour) where id = 40;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -135 hour), encerramento = DATE_ADD(curtime(), INTERVAL -134 hour) where id = 41;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -128 hour), encerramento = DATE_ADD(curtime(), INTERVAL -127 hour) where id = 42;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -123 hour) where id = 43;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -105 hour) where id = 44;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -97 hour) where id = 45;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -80 hour) where id = 46;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -64 hour) where id = 47;
UPDATE os SET abertura = DATE_ADD(curtime(), INTERVAL -41 hour) where id = 48;

-- ATUALIZANDO OS COMENTÁRIOS PARA DATAS MAIS PRÓXIMAS DA ATUAL
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -34 day) where id = 01;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -33 day) where id = 02;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -33 day) where id = 03;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -32 day) where id = 04;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -30 day) where id = 05;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -770 hour) where id = 06;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -650 hour) where id = 07;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -600 hour) where id = 08;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -590 hour) where id = 09;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -570 hour) where id = 10;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -445 hour) where id = 11;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -328 hour) where id = 12;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -320 hour) where id = 13;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -322 hour) where id = 14;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -326 hour) where id = 15;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -330 hour) where id = 16;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -310 hour) where id = 17;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -310 hour) where id = 18;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -300 hour) where id = 19;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -280 hour) where id = 20;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -270 hour) where id = 21;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -270 hour) where id = 22;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -263 hour) where id = 23;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -263 hour) where id = 24;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -275 hour) where id = 25;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -263 hour) where id = 26;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -271 hour) where id = 27;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -263 hour) where id = 28;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -275 hour) where id = 29;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -271 hour) where id = 30;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -271 hour) where id = 31;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -233 hour) where id = 32;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -221 hour) where id = 33;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -219 hour) where id = 34;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -225 hour) where id = 35;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -226 hour) where id = 36;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -197 hour) where id = 37;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -160 hour) where id = 38;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -175 hour) where id = 39;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -148 hour) where id = 40;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -145 hour) where id = 41;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -162 hour) where id = 42;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -142 hour) where id = 43;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -103 hour) where id = 44;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -134 hour) where id = 45;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -127 hour) where id = 46;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -108 hour) where id = 47;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -69 hour) where id = 48;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -60 hour) where id = 49;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -40 hour) where id = 50;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -35 hour) where id = 51;
UPDATE comentario SET data=DATE_ADD(curtime(), INTERVAL -35 hour) where id = 52;

