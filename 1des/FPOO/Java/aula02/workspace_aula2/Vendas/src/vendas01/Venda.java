package vendas01;

public class Venda {
	
//Atributos
	String produto;
	float preco;
	int quantidade;
	
//Métodos
	float subtotal() {
		return preco * quantidade;
	}
	
}