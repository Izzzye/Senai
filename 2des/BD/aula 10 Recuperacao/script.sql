DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

CREATE TABLE carros(
    placa VARCHAR(8) PRIMARY KEY,
    modelo VARCHAR(15) NOT NULL,
    marca VARCHAR(15) NOT NULL,
    ano INT(4) NOT NULL,
    diaria FLOAT(5,2)
);

CREATE TABLE clientes(
    cpf VARCHAR(15) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    logradouro VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    rua VARCHAR(50) NOT NULL,
    uf VARCHAR(2) NOT NULL
);

CREATE TABLE telefones(
    cpf_cliente VARCHAR(15) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY (cpf_cliente) REFERENCES clientes(cpf)
);

CREATE TABLE alugueis(
    id INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(8) NOT NULL,
    cpf_cliente VARCHAR(15) NOT NULL,
    aluguel DATE NOT NULL,
    devolucao DATE,
    valor FLOAT(6,2),
    observacao TEXT,
    FOREIGN KEY (placa) REFERENCES carros(placa),
    FOREIGN KEY (cpf_cliente) REFERENCES clientes(cpf)
);

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 10 Recuperacao/carros.CSV'
INTO TABLE carros
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 10 Recuperacao/clientes.CSV'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 10 Recuperacao/telefones.CSV'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/KAREN/Senai/2des/BD/aula 10 Recuperacao/alugueis.CSV'
INTO TABLE alugueis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;