DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia CHARSET=UTF8 COLLATE utf8_general_ci;
USE cliente;

CREATE TABLE aluno (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    sexo VARCHAR(2) NOT NULL,
    peso FLOAT(5,2) NOT NULL
);

CREATE TABLE telefone(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    idAluno INTEGER NOT NULL,
    FOREIGN KEY (idAluno) REFERENCES aluno(id)
);

CREATE TABLE exercicio (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT NOT NULL,
    grupoMuscular VARCHAR(255), NOT NULL,
    aparelho VARCHAR(255), NOT NULL
);

CREATE TABLE ficha (
    id_aluno INTEGER NOT NULL,
    id_exercicio INTEGER NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
    serie text NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES  aluno(id),
    FOREIGN KEY (id_exercicio) REFERENCES exercicio(id)
);