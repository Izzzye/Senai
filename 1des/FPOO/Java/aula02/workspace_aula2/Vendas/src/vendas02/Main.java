package vendas02;

public class Main {

	public static void main(String[] args) {
		Venda vendas[] = new Venda[10];
		float total =  0;

		vendas[0] = new Venda();
		vendas[0].produto = "Camiseta";
		vendas[0].preco = 25.9f;
		vendas[0].quantidade = 2;
		
		vendas[1] = new Venda();
		vendas[1].produto = "Bermuda ";
		vendas[1].preco = 37.9f;
		vendas[1].quantidade = 1;
		
		vendas[2] = new Venda();
		vendas[2].produto = "Vestido ";
		vendas[2].preco = 55.9f;
		vendas[2].quantidade = 2;
		
		vendas[3] = new Venda();
		vendas[3].produto = "Saia    ";
		vendas[3].preco = 86.9f;
		vendas[3].quantidade = 4;
		
		vendas[4] = new Venda();
		vendas[4].produto = "Calça   ";
		vendas[4].preco = 87.9f ;
		vendas[4].quantidade = 3;
		
		vendas[5] = new Venda();
		vendas[5].produto = "Cardigan";
		vendas[5].preco = 35.9f;
		vendas[5].quantidade = 4;
		
		vendas[6] = new Venda();
		vendas[6].produto = "Jeans   ";
		vendas[6].preco = 99.9f;
		vendas[6].quantidade = 5;
		
		vendas[7] = new Venda();
		vendas[7].produto = "Moletom ";
		vendas[7].preco = 125.9f;
		vendas[7].quantidade = 6;
		
		vendas[8] = new Venda();
		vendas[8].produto = "Tênis   ";
		vendas[8].preco = 85.9f;
		vendas[8].quantidade = 3;
		
		vendas[9] = new Venda();
		vendas[9].produto = "Bota    ";
		vendas[9].preco = 155.9f;
		vendas[9].quantidade = 1;
		
		System.out.println("\n                      Vendas\n");
		
		for(int i = 0; i < 10; i++) {
			System.out.printf("[%s]\t[R$%.2f]\t[%d]\t[R$%.2f]\n", vendas[i].produto, vendas[i].preco, vendas[i].quantidade, vendas[i].subtotal());
			total += vendas[i].subtotal();
		}
		System.out.printf("\nTotal: R$%.2f", total);
	}
}