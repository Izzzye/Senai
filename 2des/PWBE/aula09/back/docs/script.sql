DROP DATABASE IF EXISTS imobiliaria;
CREATE DATABASE imobiliaria;
USE imobiliaria;

CREATE TABLE corretores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    matricula VARCHAR(10) NOT NULL UNIQUE,
    senha VARCHAR(7) NOT NULL,
    salario FLOAT(6,2) NOT NULL
);

CREATE TABLE status(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20)
);

CREATE TABLE imoveis(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    corretor_id INT NOT NULL,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    endereco VARCHAR(153) NOT NULL,
    valorVenda FLOAT(10,2) NULL,
    valorAluga FLOAT(10,2) NULL,
    status_id INT NOT NULL,
    FOREIGN KEY (corretor_id) REFERENCES corretores(id),
    FOREIGN KEY (status_id) REFERENCES status(id)
);


INSERT INTO corretores VALUES 
(DEFAULT, "Zeh das Venda", "15784", "abc@123", 2500),
(DEFAULT, "Jaun dos Aluguel", "12345", "abc@132", 2000);

INSERT INTO status VALUES 
(DEFAULT, "Diponível"),
(DEFAULT, "Alugado"),
(DEFAULT, "Vendido");

INSERT INTO imoveis VALUES (DEFAULT, 1, "ksa7894", "Rua das dores, 8", 400000, 850, 1 );
INSERT INTO imoveis VALUES (DEFAULT, 2, "apt7845", "Rua dos Buero, 15 AP 41", 250000, 500, 1 );
INSERT INTO imoveis VALUES (DEFAULT, 1, "ksa6666", "Rua dos Inverno, 666", 666000, 1600, 3 );
INSERT INTO imoveis VALUES (DEFAULT, 1, "ksa7418", "Rua das Avenida, 35", 1250000, 5500, 2 );