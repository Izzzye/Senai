DROP DATABASE IF EXISTS usuarios;
CREATE DATABASE usuarios ;
USE usuarios;

CREATE TABLE user(
    id INTEGER(5) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    nascto DATE NOT NULL,
    cep VARCHAR(9) NOT NULL,
    numero INTEGER(5) NOT NULL,
    complemento VARCHAR(50) NOT NULL,
    telefones VARCHAR(100)
);

INSERT INTO user VALUES
(123, "Passos Dias Aguiar", "123.456.789-01", "passos@email.com", password("PassinhosFelizes69"), "2000-03-01", "13914-552", "2925", "BL16 AP14", "19-99874-8789, 19-99280-4020"),
(321, "Ana Aguiar", "987.654.321-99", "ana@email.com", password("AninhaLinha99"), "2000-03-20",  "13914-978", "292", "BL01 AP25", "19-99874-8888, 19-99280-0002" ),
(333, "Fabiana Slva", "987.664.785-85", "fabi@email.com", password("soulinda123"), "1999-05-12",  "45851-754", "789", "BL15 AP12", "19-99875-0287");

SELECT * FROM user;

