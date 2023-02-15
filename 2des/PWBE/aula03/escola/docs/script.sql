DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola charset=utf8 COLLATE utf8_general_ci;
USE escola;

CREATE TABLE professor (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especialidde VARCHAR(50)
);

CREATE TABLE aluno (
    ra VARCHAR(10) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    nasc DATE NOT NULL,
    id_turma INTEGER NOT NULL
);

CREATE TABLE turma (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    abreviacao VARCHAR(5)
);

ALTER TABLE aluno ADD FOREIGN KEY  (id_turma) REFERENCES turma(id);

CREATE TABLE leciona (
    id_prof INTEGER NOT NULL,
    id_turma INTEGER NOT NULL,
    FOREIGN KEY (id_prof) REFERENCES professor(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_turma) REFERENCES turma(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO professor VALUES
(DEFAULT, 'Rennye', 'Mobile'),
(DEFAULT, 'Wellington', 'Banco De Dados'),
(DEFAULT, 'Ivo', 'Matemática');

INSERT INTO turma VALUES
(DEFAULT, 'Desenvolvimento', '2DES'),
(DEFAULT, 'Eletrônica', '3EA'),
(DEFAULT, 'Auxiliar de Produção', 'ALP2');

INSERT INTO aluno VALUES
('ra01', 'Camacho', '2000-04-02', 1),
('ra02', 'Karen', '2005-05-12', 1),
('ra03', 'Eduardo', '2004-05-28', 2),
('ra04', 'Tio Digo', '2004-12-22', 3);

INSERT INTO leciona VALUES
(1, 1),
(3, 2),
(2, 1),
(3, 3);

SELECT * FROM professor;
SELECT * FROM turma;
SELECT * FROM aluno; 
SELECT * FROM leciona;