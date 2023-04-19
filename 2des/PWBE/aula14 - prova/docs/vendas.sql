DROP DATABASE IF EXISTS vendas;
CREATE DATABASE vendas CHARSET=UTF8 COLLATE utf8_general_ci;
USE vendas;

CREATE TABLE vendedores(
   id INT PRIMARY KEY AUTO_INCREMENT,
   nome VARCHAR(50) NOT NULL,
   matricula INT(5) NOT NULL UNIQUE 
);

CREATE TABLE produtos(
   id INT PRIMARY KEY AUTO_INCREMENT,
   nome VARCHAR(50) NOT NULL,
   valor FLOAT(6,2) NOT NULL
);

CREATE TABLE vendas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    quantidade INT(4) NOT NULL,
    produtoId INT NOT NULL,
    vendedorId INT NOT NULL,
    FOREIGN KEY (produtoId) REFERENCES produtos(id),
    FOREIGN KEY (vendedorId) REFERENCES vendedores(id)
);

INSERT INTO vendedores VALUES
    (NULL, "Stefany Antonella", 14644),
    (NULL, "Stella Viana", 01516),
    (NULL, "Tomás Isaac", 50913), 
    (NULL, "Osvaldo Galvão", 72193);

INSERT INTO produtos VALUES
    (NULL, "Samsung Galaxy M53", 2211.11),
    (NULL, "Motorola Moto G42", 1499.00),
    (NULL, "Rainhas das Chamas", 36.90),
    (NULL, "Cronicas Saxonicas - O cavaleiro da morte", 57.90),
    (NULL, "O milagre da manhã", 56.59),
    (NULL, "Lavadoura de Roupas Brastemp BWK12AB", 2199.00),
    (NULL, "Fogão Atlas 4 Bocas", 899.00);

INSERT INTO vendas VALUES
    (NULL, "2023-04-18 09:08:39", 2, 1, 3),
    (NULL, "2023-04-18 09:08:39", 1, 2, 3),
    (NULL, "2023-04-18 09:08:39", 3, 1, 2),
    (NULL, "2023-04-18 09:08:39", 1, 3, 2),
    (NULL, "2023-04-18 09:08:39", 2, 2, 1),
    (NULL, "2023-04-18 09:08:39", 1, 3, 1);
