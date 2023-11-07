DROP DATABASE IF EXISTS dbestacionamento;
CREATE DATABASE dbestacionamento DEFAULT CHAR SET utf8 DEFAULT COLLATE utf8_general_ci;
use dbestacionamento;
DROP TABLE IF EXISTS tbveiculos;
CREATE TABLE tbveiculos(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	vaga varchar(2) not null,
	placa varchar(8) not null,
	datain date not null,
	horain time not null,
	dataout date,
	horaout time,
	valor decimal(5,2)
);

INSERT INTO tbveiculos VALUES (NULL,'C1','XXX-0000',CURDATE()-3,'08:00:00',CURDATE()-3,'11:00:00',10);
INSERT INTO tbveiculos VALUES (NULL,'C2','XXX-1111',CURDATE()-3,'09:00:00',CURDATE()-3,'12:00:00',13);
INSERT INTO tbveiculos VALUES (NULL,'C3','XXX-2222',CURDATE()-3,'10:00:00',CURDATE()-3,'12:00:00',13);
INSERT INTO tbveiculos VALUES (NULL,'C4','XXX-3333',CURDATE()-2,'08:00:00',CURDATE()-2,'12:00:00',13);
INSERT INTO tbveiculos VALUES (NULL,'C8','XXX-7777',CURDATE()-2,'09:00:00',CURDATE()-2,'12:00:00',13);
INSERT INTO tbveiculos VALUES (NULL,'C1','XXX-0000',CURDATE()-1,'10:00:00',CURDATE()-1,'12:00:00',13);
INSERT INTO tbveiculos VALUES (NULL,'C2','XXX-1111',CURDATE()-1,'10:00:00',CURDATE()-1,'12:00:00',13);
INSERT INTO tbveiculos VALUES (NULL,'C3','XXX-2222',CURDATE(),CURTIME(),NULL,NULL,NULL);
INSERT INTO tbveiculos VALUES (NULL,'C4','XXX-3333',CURDATE(),CURTIME(),NULL,NULL,NULL);
INSERT INTO tbveiculos VALUES (NULL,'C8','XXX-7777',CURDATE(),CURTIME(),NULL,NULL,NULL);
INSERT INTO tbveiculos VALUES (NULL,'M1','YYY-0000',CURDATE(),CURTIME(),NULL,NULL,NULL);
INSERT INTO tbveiculos VALUES (NULL,'M3','YYY-2222',CURDATE(),CURTIME(),NULL,NULL,NULL);
SELECT * FROM tbveiculos;

update tbveiculos set dataout = CURDATE(), horaout = CURTIME(), valor=10 where id = 4;
SELECT * FROM tbveiculos;

SELECT * FROM tbveiculos WHERE dataout IS NULL;