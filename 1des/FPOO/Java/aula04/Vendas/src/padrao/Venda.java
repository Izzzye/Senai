package padrao;

public class Venda {
	
	String produto;
	int quantidade;
	float preco;
	
	Venda(){
		
	}
	
	Venda(String Produto, int Quantidade, float Preco){
		produto = Produto;
		quantidade = Quantidade;
		preco = Preco;
	}
	
	public float subTotal() {
		
		return quantidade * preco;
	}
	
	public String toString() {
		return String.format("[%s]\t[%d]\t\t[R$%.2f]\t[R$%.2f]", produto, quantidade, preco, subTotal());
	}
}
