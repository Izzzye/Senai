DROP DATABASE IF EXISTS imobiliaria;
CREATE DATABASE imobiliaria;
USE imobiliaria;

CREATE TABLE corretores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    matricula VARCHAR(10) NOT NULL,
    senha VARCHAR(6) NOT NULL,
    salario FLOAT(6,2) NOT NULL
);

CREATE TABLE imoveis(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    corretor_id INT NOT NULL,
    codigo VARCHAR(10) NOT NULL,
    endereco VARCHAR(153) NOT NULL,
    valor FLOAT(10,2) NOT NULL,
    FOREIGN KEY (corretor_id) REFERENCES corretores(id)
);