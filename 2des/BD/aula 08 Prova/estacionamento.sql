DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE utf8_general_ci;
USE estacionamento;

CREATE TABLE cliente{
    cpf VARCHAR(15) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(255) NOT NULL
};

CREATE TABLE telefone {
    cpf_cliente VARCHAR(15) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY cpf_cliente REFERENCES cliente(cpf)
};

CREATE TABLE carro{
    placa VARCHAR(15) NOT NULL PRIMARY KEY,
    marca VARCHAR(15) NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    cpf_cliente VARCHAR(15) NOT NULL,
    FOREIGN KEY cpf_cliente REFERENCES cliente(cpf)
}

CREATE TABLE vaga{
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(15) NOT NULL,
    tipo VARCHAR(15) NOT NULL,
    valor FLOAT(5,2)
}

CREATE TABLE estaciona {
    id INT PRIMARY KEY AUTO_INCREMENT,
    entrada
    saida
    valor
    cpf_motorista
    placa_carro
    
}