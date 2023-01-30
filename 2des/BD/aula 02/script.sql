-- Ordens de serviço 1.0
DROP DATABASE IF EXISTS ordens_servico
CREATE DATABASE ordens_servico;   --cria o database
USE ordens_servico;
CREATE TABLE os(
    id INT NOT NULL AUTO_INCREMENT, -- gera id
    funcionario VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim DATE,
    PRIMARY KEY(id)

);  -- cria a tabela

SHOW TABLES;
DESCRIBE os;

-- Ordens de serviço 2.0
DROP DATABASE IF EXISTS ordens_servico_2;
CREATE DATABASE ordens_servico_2;
USE ordens_servico_2;

CREATE TABLE funcionarios(
    matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    PRIMARY KEY(matricula)

);

CREATE TABLE os(
    id INT NOT NULL AUTO_INCREMENT,
    func_abertura INT NOT NULL,
    func_executor INT NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim TIME,
    PRIMARY KEY(id),
    FOREIGN KEY(func_abertura) REFERENCES funcionarios(matricula),
    FOREIGN KEY(func_executor) REFERENCES funcionarios(matricula)    


);
