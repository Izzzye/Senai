DROP DATABASE IF EXISTS livraria;
CREATE DATABASE livraria CHARSET=UTF8 COLLATE utf8_general_ci;
USE livraria;

CREATE TABLE emprestimo(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    valor FLOAT(5,2) NOT NULL,
    dataEmprest DATE NOT NULL,
    dataPrevdev DATE NOT NULL,
    dataDev DATE
);

INSERT INTO emprestimo VALUES
(DEFAULT, 'Corte de Espinhos e Rosas - Edição de luxo', 'Sarah J. Maas', 89.17, '2023-01-12', '2023-01-19', '2023-01-25'),
(DEFAULT, 'Todas as Suas (Im)perfeições', 'Colleen Hoover', 53.00, '2023-02-17', '2023-02-25', '2023-02-26'),
(DEFAULT, 'A Pequena Loja de Venenos', 'Sarah Penner', 57.00, '2023-02-18', '2023-02-27', '2023-02-26'),
(DEFAULT, 'A Garota do Lago', 'Charlie Donlea', 65.50, '2023-02-25', '2023-03-02', '2023-03-02'),
(DEFAULT, 'Os Sete Maridos de Evelyn Hugo', 'Taylor Jenkins Reid', 75.50, '2023-02-27', '2023-03-07', DEFAULT),
(DEFAULT, 'Verity', 'Colleen Hoover', 75.50, '2023-02-28', '2023-03-10', DEFAULT),
(DEFAULT, 'A Revolução dos Bichos', 'George Oewell', 65.50, '2023-03-01', '2023-03-11', DEFAULT),
(DEFAULT, 'Trono de Vidro', 'Sarah J. Maas', 55.50, '2023-03-03', '2023-03-15', DEFAULT);

