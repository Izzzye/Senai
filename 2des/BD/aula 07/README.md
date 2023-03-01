# SQL (structured query language)
- 2.7. Operadores
    - 2.7.1. Aritméticos
    - 2.7.2. Relacionais
    - 2.7.3. Lógicos
    - 2.7.4. Auxiliares
- 2.8. Funções
    - 2.8.1. Data e hora
    - 2.8.2. Matemáticas
    - 2.8.3. String
    - 2.8.4. De agregação
- 2.9. Agrupamento de dados (GROUP BY)
- 2.10. União de dados (UNION)
- 2.11. Associação de tabelas
    - 2.11.1. WHERE
    - 2.11.2. CROSS JOIN
    - 2.11.3. INNER JOIN
    - 2.11.4. OUTER JOIN
    - 2.11.5. LEFT
    - 2.11.6. RIGTH
## Views (Visões, Relatórios)
- São consultas salvas que trazem "informações" do banco de dados

## Banco de dados de uma Academia
```SQL
DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia CHARSET=UTF8 COLLATE utf8_general_ci;
USE academia;
-- DDL
CREATE TABLE aluno (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    peso FLOAT NOT NULL
);
CREATE TABLE telefone (
	id INT NOT NULL,
	numero VARCHAR(15) NOT NULL,
	FOREIGN KEY (id) REFERENCES aluno(id)
);
CREATE TABLE exercicio (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT NOT NULL,
    grupo_muscular VARCHAR(30) NOT NULL,
    aparelho TEXT NOT NULL
);
CREATE TABLE ficha (
    id_aluno INT NOT NULL,
    id_exercicio INT NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
	serie VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id),
    FOREIGN KEY (id_exercicio) REFERENCES exercicio(id)
);
-- DML (Importação dos dados)
LOAD DATA INFILE 'E:/senai2023/2des/03-bcd/aula06/02.projeto_academia/aluno.csv'
INTO TABLE aluno
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
LOAD DATA INFILE 'E:/senai2023/2des/03-bcd/aula06/02.projeto_academia/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
LOAD DATA INFILE 'E:/senai2023/2des/03-bcd/aula06/02.projeto_academia/exercicio.csv'
INTO TABLE exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
LOAD DATA INFILE 'E:/senai2023/2des/03-bcd/aula06/02.projeto_academia/ficha.csv'
INTO TABLE ficha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
```
Visão (Consulta salva, Relatório)
```SQL
-- Missão, ver uma tabela com os exercícios mais praticados (Relatório)
CREATE VIEW vw_exercicios_praticados AS
SELECT f.id_aluno, e.id, e.descricao, e.aparelho, COUNT(e.id) AS Qtdade
FROM exercicio e JOIN ficha f
ON e.id = f.id_exercicio
GROUP BY e.id;
SELECT * FROM vw_exercicios_praticados;
```