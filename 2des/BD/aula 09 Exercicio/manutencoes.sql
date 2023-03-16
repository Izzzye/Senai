DROP DATABASE IF EXISTS manutencoes;
CREATE DATABASE manutencoes;
USE manutencoes;

CREATE TABLE funcionario (
    matricula INT(6) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE telefone (
    id_func INT(6),
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY (id_func) REFERENCES funcionario(matricula)
);

CREATE TABLE carro (
    placa VARCHAR(10) PRIMARY KEY,
    modelo VARCHAR(30) NOT NULL,
    marca VARCHAR(30) NOT NULL,
    ano INT(4) NOT NULL
);

CREATE TABLE manutencao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_func INT(6) NOT NULL,
    placa VARCHAR(10) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (id_func) REFERENCES funcionario(matricula),
    FOREIGN KEY (placa) REFERENCES carro(placa)
);

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 09 Exercicio/funcionario.CSV'
INTO TABLE funcionario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 09 Exercicio/telefone.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 09 Exercicio/carro.CSV'
INTO TABLE carro
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 09 Exercicio/manutencao.CSV'
INTO TABLE manutencao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;