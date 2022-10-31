package modelo;

public class Venda {
	
	//Atributos encapsulados
	private String produto;
	private int quantidade;
	private float preco;
	
	//Método comum
	public float subtotal() {
		return quantidade * preco;
	}

	//Métodos de acesso Getters e Setters
	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	
	public String toString() {
		return String.format("%s\t%d\t%.2f\t%.2f", produto, quantidade, preco, subtotal());
	}
	
	
}
