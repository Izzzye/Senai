DROP DATABASE IF EXISTS avaliacao;
CREATE DATABASE avaliacao CHARSET=UTF8 COLLATE utf8_general_ci;
USE avaliacao;

CREATE TABLE paciente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(50) NOT NULL,
    nascimento DATE NOT NULL,
    peso FLOAT(4,1) NOT NULL,
    altura FLOAT(3,2) NOT NULL
);

INSERT INTO paciente VALUES
    (NULL, 'Jair Rodrigues', '1981-01-03', 85.5, 1.75),
    (NULL, 'Marieta Severo', '1995-03-04', 44.3, 1.55),
    (NULL, 'Karina Silva', '2002-05-13', 88, 1.73),
    (NULL, 'Solange Nascimento', '2005-12-01', 95, 1.58),
    (NULL, 'MArcos Pontes', '2001-12-03', 60, 1.98);

SELECT * FROM paciente;