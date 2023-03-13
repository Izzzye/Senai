DROP DATABASE IF EXISTS duplicatas;
CREATE DATABASE duplicatas CHARSET=UTF8 COLLATE utf8_general_ci;
USE duplicatas;

CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    uf VARCHAR(2) NOT NULL 
);

CREATE TABLE telefones (
    id_cliente  INTEGER NOT NULL,
    tipo VARCHAR(7) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

CREATE TABLE duplicatas (
    id_cliente INTEGER NOT NULL,
    n_parcela INT(3) NOT NULL,
    data_compra DATE NOT NULL,
    vencimento DATE NOT NULL,
    pagamento DATE,
    valor FLOAT(6,2) NOT NULL,
    diferenca FLOAT(6,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

LOAD DATA INFILE 'C:/Users/isabe/OneDrive/Documentos/Senai/2des/BD/aula 06/04.projeto_duplicatas/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/isabe/OneDrive/Documentos/Senai/2des/BD/aula 06/04.projeto_duplicatas/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/isabe/OneDrive/Documentos/Senai/2des/BD/aula 06/04.projeto_duplicatas/duplicatas.csv'
INTO TABLE duplicatas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;