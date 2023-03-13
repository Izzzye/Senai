DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE onibus;

CREATE TABLE motorista (
    CPF VARCHAR(14) NOT NULL,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE telefone(
    CPF_Motorista VARCHAR(14) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY (CPF_Motorista) REFERENCES motorista(CPF)
);

CREATE TABLE linha (
    id VARCHAR(15) NOT NULL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE horario(
    id_linha VARCHAR(15) NOT NULL,
    horario VARCHAR(5) NOT NULL,
    FOREIGN KEY (id_linha) REFERENCES linha(id)
);

CREATE TABLE dirige (
    CPF_Motorista VARCHAR(15) NOT NULL,
    id_linha,
    FOREIGN KEY (CPF_Motorista) REFERENCES motorista(CPF),
    FOREIGN KEY (id_linha) REFERENCES linha(id)
);