DROP DATABASE IF EXISTS pedidos;
CREATE DATABASE pedidos CHARSET=UTF8 COLLATE utf8_general_ci;
USE pedidos;

CREATE TABLE cliente (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(15) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    numero INT(4) NOT NULL,
    complemento VARCHAR(255)
);

CREATE TABLE telefone(
    id_cliente INTEGER NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE entregador (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    veiculo VARCHAR(255) NOT NULL
);

CREATE TABLE produto (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    preco FLOAT(5,2)
);

CREATE TABLE pedido (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_cliente INTEGER NOT NULL,
    id_entregador INTEGER NOT NULL,
    data DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    hora_entrega TIME,
    hora_fim TIME,
    qtd INT(2) NOT NULL,
    id_prod INTEGER NOT NULL,
    preco_uni FLOAT(5,2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id),
    FOREIGN KEY (id_entregador) REFERENCES entregador(id),
    FOREIGN KEY (id_prod) REFERENCES produto(id),
    FOREIGN KEY (preco_uni) REFERENCES produto(preco)
);