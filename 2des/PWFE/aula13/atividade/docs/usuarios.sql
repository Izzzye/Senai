DROP DATABASE IF EXISTS usuarios;
CREATE DATABASE usuarios;
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
    complemento VARCHAR(50) NOT NULL
);

CREATE TABLE telefone(
    id_user INTEGER(5) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user(id)
);

INSERT INTO user VALUES
(123, "Passos Dias Aguiar", "123.456.789-01", "passos@email.com", password("PassinhosFelizes69"), "2000-03-01", "13914-552", "2925", "BL16 AP14" ),
(321, "Ana Aguiar", "987.654.321-99", "ana@email.com", password("AninhaLinha99"), "2000-03-20",  "13914-552", "2925", "BL16 AP15" );

INSERT INTO telefone VALUES
(123, "19-99874-8789"),
(123, "19-992804020"),
(321, "19-99874-8888"),
(321, "19-992800001"),
(321, "19-992800002");

SELECT * FROM user;
SELECT * FROM telefone;

CREATE VIEW Usuarios AS
SELECT u.id, u.nome, u.cpf, u.email, u.senha, u.nascto, u.cep, u.numero, u.complemento, t.telefone
FROM user u
JOIN telefone t ON u.id = t.id_user;

 SELECT * FROM Usuarios;
