DROP DATABASE IF EXISTS compras;
CREATE DATABASE compras CHARSET=UTF8 COLLATE=utf8_general_ci;
USE compras;

CREATE TABLE clientes(
    cpf varchar(15) not null primary key,
    nome varchar(100) not null,
    cep varchar(11) not null,
    numero varchar(5),
    complemento varchar(50) not null,
);

CREATE TABLE telefones(
    cpf varchar(15) not null,
    numero varchar(15) not null,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf) on delete cascade
);

CREATE TABLE compras(
    id_compra int not null auto_increment primary key,
    data Date not null,
    vencimento Date not null,
    pagamento Date;
    valor float(10,2) not null,
    cpf varchar(15) not null,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf)
);

SHOW tables;

insert into clientes(cpf, nome, cep) VALUES
('111.111.111-11', 'jão', '13558-234'),
('111.111.111-12', 'cleber', '13558-234'),
('111.111.111-13', 'rodolfo', '13558-487'),
('111.111.111-44', 'linus', '13558-154');

select * from clientes;

insert into telefones VALUES
('111.111.111-11', '1998292-8262'),
('111.111.111-11', '1998292-9874'),
('111.111.111-12', '198922-9862');

select * from telefones;
