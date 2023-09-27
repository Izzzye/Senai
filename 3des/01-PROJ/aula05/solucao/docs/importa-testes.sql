use fabrica;

LOAD DATA INFILE 'D:/karen/Senai/3des/01-PROJ/aula05/dados/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/karen/Senai/3des/01-PROJ/aula05/dados/automoveis.csv'
INTO TABLE automoveis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/karen/Senai/3des/01-PROJ/aula05/dados/concessionarias.csv'
INTO TABLE concessionaria
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/karen/Senai/3des/01-PROJ/aula05/dados/alocacao.csv'
INTO TABLE alocacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select * from alocacao group by area;