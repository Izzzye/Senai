-- O cliente Walter Paulo Costenaro quer 1 pizza de atum e 2 napolitanas
insert into Pedidos(cliente_id, data, hora) values(98,DATE_SUB(curdate(),INTERVAL 10 DAY),"10:05:00");
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(27,5,1, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(27,28,2, (select valor from Pizzas where pizza_id = 28));


SELECT valor FROM pizzas WHERE pizza_id = 5;
SELECT valor FROM pizzas WHERE pizza_id = 28;

INSERT INTO pedidos VALUES(default, 98, CURDATE(), NOW(), null);

SELECT * FROM pedidos ORDER BY pedido_id DESC LIMIT 1;
SELECT LAST_INSERT_ID();

INSERT INTO itens_pedido VALUES
(27,5,1(SELECT valor FROM pizzas WHERE pizza_id = 5)),
(27,28,2(SELECT valor FROM pizzas WHERE pizza_id = 28));

SELECT * FROM itens_pedido WHERE pedido_id = 27;

-- Calcular valor total do pedido
SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27;
UPDATE pedidos SET valor = (SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27);

