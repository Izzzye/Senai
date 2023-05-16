-- 1 Quantas tabelas ele possui?  
	-- 5 tabelas
	USE pizzaria;
	SHOW TABLES;
	
-- 2 Quantos clientes cadastrados?
-- 	105 clientes
	SELECT * FROM clientes;

-- 3 Quantas pizzas cadastradas?
-- 	41 pizzas
	SELECT * FROM pizzas;

-- 4 Quantas pizzas o pedido nº 3 possui?
-- 	21 pizzas
    SELECT count(quantidade) FROM itens_pedido WHERE pedido_id = 3;
    SELECT sum(quantidade) FROM itens_pedido WHERE pedido_id = 3;

-- 5 Qual cliente fez o pedido nº 3?
-- 	Adriano da Silva Ferreira
	SELECT c.nome FROM pedidos p INNER JOIN clientes c
	ON c.cliente_id = p.cliente_id
	WHERE p.pedido_id = 3;

-- 6 Quais os nomes das pizzas do pedido nº3?
--Bauru
-- Atum
-- Caipira
-- Calabresa
-- Aliche
-- Camponesa
-- Firense
    SELECT p.pizza_id, p.nome FROM itens_pedido i INNER JOIN pizzas p
    ON i.pizza_id = p.pizza_id
    WHERE i.pedido_id = 3;