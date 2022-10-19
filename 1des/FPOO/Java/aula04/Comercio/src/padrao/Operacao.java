package padrao;

public class Operacao {
	String produto;
	int qtdComprada, qtdVendida;
	float precoCompra, precoVenda;
	
	Operacao(){
		
	}
	
	Operacao(String p, int qtdC, int qtdV, float precoC, float precoV){
		produto = p;
		qtdComprada = qtdC;
		qtdVendida = qtdV;
		precoCompra = precoC;
		precoVenda = precoV;
	}
	
	float investimento() {
		return precoCompra * qtdComprada;
	}
	
	float faturamento() {
		return precoVenda * qtdVendida;
	}
	
	float lucroDinheiro() {
		return faturamento() - investimento();
	}
	
	float lucroPorcentagem() {
		return (faturamento() / investimento()) * 100;
	}
	
	public String toString() {
		return String.format("[%s]\t[%d]\t\t[%d]\t\t[R$%.2f]\t[R$%.2f]\t[R$%.2f]\t[R$%.2f]\t[R$%.2f]\t[%.0f%%]", produto, qtdComprada, qtdVendida, precoCompra, precoVenda, investimento(), faturamento(), lucroDinheiro(), lucroPorcentagem());
	}
}
