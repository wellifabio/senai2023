DROP DATABASE IF EXISTS clinica;
CREATE DATABASE clinica;

USE clinica;

CREATE TABLE especialidades (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE medicos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade_id INT NOT NULL,
    FOREIGN KEY (especialidade_id) REFERENCES especialidades(id)
);

CREATE TABLE pacientes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(153) NOT NULL,
    data_nascimento DATE NOT NULL
);

CREATE TABLE atendimentos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    medico_id INT NOT NULL,
    paciente_id INT NOT NULL,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    FOREIGN KEY (medico_id) REFERENCES medicos(id)
);

INSERT INTO especialidades 
VALUES (DEFAULT, "Oftalmologia"),
       (DEFAULT, "Pediatria"),
       (DEFAULT, "Pneumologia"),
       (DEFAULT, "Neurologia");

INSERT INTO medicos
VALUES (DEFAULT, "Isabela Elza Fogaça", 1),
       (DEFAULT, "Marcos Vinicius Enzo Farias", 2),
       (DEFAULT, "Pedro Vinicius da Rosa", 3),
       (DEFAULT, "Agatha Catarina Carolina Baptista", 4);

INSERT INTO pacientes
VALUES (DEFAULT, "Diogo Diego Gustavo Gomes", "1967-01-07"),
       (DEFAULT, "Bianca Kamilly Lopes", "1948-03-03"),
       (DEFAULT, "Andreia Manuela Santos", "1987-01-23"),
       (DEFAULT, "Oliver Felipe Nunes", "1988-02-10");

INSERT INTO atendimentos
VALUES (DEFAULT, "2020-01-15", 1, 4),
       (DEFAULT, "2020-01-18", 2, 3),
       (DEFAULT, "2020-02-23", 3, 2),
       (DEFAULT, "2020-03-08", 4, 1);