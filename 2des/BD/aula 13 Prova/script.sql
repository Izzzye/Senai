drop database if exists solicitacoes;
create database solicitacoes charset=utf8 collate utf8_general_ci;
use solicitacoes;
-- SQL - DDL
Create table Funcionarios(
	Cod_Func numeric(4) not null,   
	Nome_Func varchar(50) not null,
	Sexo char(1) not null,            
	Cidade varchar(30),
	Estado varchar(2),
	constraint pk_func_1 primary key(Cod_Func)
);

Create table Departamentos(
	Cod_Depto numeric(4) not null,
	Nome_Depto varchar(50) not null,
	constraint pk_dep_1 primary key(Cod_Depto)
); 

Create table Produtos(
	Cod_Produto numeric(4) not null,  
	Nome_produto varchar(50) not null,
	constraint pk_prod_1 primary key(Cod_Produto)
);

Create table Solicitacoes(
	Num_Sol numeric(4) not null,     
	Data_sol date null,
	Cod_Depto numeric(4) not null,           
	Cod_Func  numeric(4) not null,
	constraint pk_sol_1 primary key(Num_Sol),
	constraint fk_sol_dep_1 Foreign Key(Cod_Depto) references Departamentos(Cod_Depto),
	constraint fk_sol_fun_1 Foreign Key(Cod_Func) references Funcionarios(Cod_Func)
);

Create table Itens_Solicitacao(
	Num_Sol numeric(4) not null,
	Cod_Produto numeric(4) not null,
	Qtde numeric(4) not null,
	Valor numeric(12,2) not null,
	constraint pk_itens_sol primary key(Num_Sol, cod_produto),
	constraint fk_itens_sol_1 foreign Key(Num_Sol) references Solicitacoes(Num_Sol),
	constraint fk_itens_prod_1 Foreign Key(Cod_Produto) references Produtos(Cod_Produto)
);

-- OBS Na tabela Itens_Solicitacao a chave primária é uma chave "COMPOSTA" por (Num_Sol, cod_produto)

-- SQL - DML
insert into Departamentos values
(1000,"Vendas"),
(2000,"Compras"),
(2001,"Recursos Humanos");

insert into Funcionarios values
(100,"Jose Pedro","M","Sumare","SP"),
(150,"Ana Pereira","F","Nova Odessa","SP"),
(200,"Maria da Silva","F","Londrina","PR"),
(300,"Joao Antonio","M","Campinas","SP");

insert into Produtos values
(125,"Parafuso"),
(135,"Arruela"),
(145,"Difusor"),
(155,"Paralama");

insert into Solicitacoes values
(1000,"2018/12/01",1000,100),
(1001,"2018/03/13",2001,200),
(1005,"2018/02/10",2001,150),
(1010,"2019/02/22",2000,100),
(1020,"2019/03/23",1000,200),
(1040,"2019/03/24",2001,300);

insert into Itens_Solicitacao values
(1000,125,2,4.36),
(1000,145,1,85),
(1001,135,3,2.12),
(1001,155,2,522),
(1010,145,2,170),
(1010,135,2,1.06),
(1020,125,1,2.18),
(1020,145,2,170),
(1040,155,3,783),
(1005,125,1,50),
(1005,145,3,54.5);
-- Coluna Valor representa o valor total do item (Não é necessário multiplicar pela quantidade)

-- SQL - DQL
select * from Departamentos;
select * from Funcionarios;
select * from Produtos;
select * from Solicitacoes;
select * from Itens_Solicitacao;
select max(valor) from Itens_Solicitacao;
Select Year(curdate()) as ano;
Select month(curdate()) as mes;
show tables;

-- 1 Faça uma query que mostre o nome do funcionário que mais fez solicitações (em Reais), O SELECT deve mostrar o nome do funcionário e seu respectivo valor total.
SELECT f.Nome_Func, SUM(i.Valor) AS Valor_Total
FROM Funcionarios f
JOIN Solicitacoes s ON f.Cod_Func = s.Cod_Func
JOIN Itens_Solicitacao i ON s.Num_Sol = i.Num_Sol
GROUP BY f.Nome_Func
ORDER BY Valor_Total DESC
LIMIT 1;

-- 2Faça uma consulta que mostre os nomes dos departamentos e nomes dos produtos cujo as solicitações  contém "Parafuso" e "Difusor".
SELECT d.Nome_Depto, p.Nome_Produto
FROM Departamentos d
JOIN Solicitacoes s ON d.Cod_Depto = s.Cod_Depto
JOIN Itens_Solicitacao i ON s.Num_Sol = i.Num_Sol
JOIN Produtos p ON i.Cod_Produto = p.Cod_Produto
WHERE p.Nome_Produto IN ('Parafuso', 'Difusor')
GROUP BY d.Nome_Depto, p.Nome_Produto;

-- 3 Escreva um comando select para mostrar apenas os nomes dos produtos vendidos em Fevereiro de 2018
SELECT p.Nome_produto
FROM Produtos p
INNER JOIN Itens_Solicitacao i ON p.Cod_Produto = i.Cod_Produto
INNER JOIN Solicitacoes s ON i.Num_Sol = s.Num_Sol
WHERE YEAR(s.Data_sol) = 2018 AND MONTH(s.Data_sol);


-- 4 Crie uma view(visão) que mostre os seguintes campos: Num_Sol, Data_sol, Cod_Depto, Nome_Depto , Cod_Func, Nome_Func, Cod_Produto, Nome_produto, Qtde, valor e ordene por num_sol decrescente;
CREATE VIEW ViewSolicitacoes AS
SELECT s.Num_Sol, s.Data_sol, s.Cod_Depto, d.Nome_Depto, s.Cod_Func, f.Nome_Func, i.Cod_Produto, p.Nome_produto, i.Qtde, i.Valor
FROM Solicitacoes s
JOIN Departamentos d ON s.Cod_Depto = d.Cod_Depto
JOIN Funcionarios f ON s.Cod_Func = f.Cod_Func
JOIN Itens_Solicitacao i ON s.Num_Sol = i.Num_Sol
JOIN Produtos p ON i.Cod_Produto = p.Cod_Produto
ORDER BY s.Num_Sol DESC;


-- 5 Crie um procedimento armazenado chamado solicita_um_item(n_sol,depto,func,prod,qtd,total) que receba estes valores e cadastre uma solicitação e um item na data atual.  
DELIMITER //

CREATE PROCEDURE solicita_um_item(
    IN n_sol INT,
    IN depto INT,
    IN func INT,
    IN prod INT,
    IN qtd INT,
    IN total DECIMAL(12, 2)
)
BEGIN
    -- Inserir a solicitação
    INSERT INTO Solicitacoes(Num_Sol, Data_sol, Cod_Depto, Cod_Func)
    VALUES (n_sol, CURDATE(), depto, func);

    -- Inserir o item da solicitação
    INSERT INTO Itens_Solicitacao(Num_Sol, Cod_Produto, Qtde, Valor)
    VALUES (n_sol, prod, qtd, total);
    
    SELECT 'Solicitação e item cadastrados com sucesso.' AS Resultado;
END //

DELIMITER ;

