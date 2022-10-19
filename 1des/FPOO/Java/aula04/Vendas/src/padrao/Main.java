package padrao;

import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(new Locale("pt", "BR"));
		Scanner scan = new Scanner(System.in);
		Venda vendas[] = new Venda[10];
		float total = 0;
		float media = 0;
		int caro = -1, barato = -1, vendido = -1; // iníce do vetor pra trazer seu nome
		float maisCaro = 0, maisBarato = 10000, maisVendido = 0; // pra saber qual o valor do produto
		
		
		System.out.println("Digite os 10 produtos, quantidades e preços");
		for(int i = 0; i < 10; i++) {
			vendas[i] = new Venda(scan.next(), scan.nextInt(), scan.nextFloat());// scanner de 3 objetos ao msm tempo
		}
		
		
		System.out.println("\n[Produto]\t[Quantidade]\t[Preço]\t\t[sub Total]");
		for(int i = 0; i < 10; i++) {
			System.out.println(vendas[i].toString());
			
			total += vendas[i].subTotal(); // acumular o total de vendas
			media += vendas[i].preco; // acumular o preco total dos produtos
			
			if(vendas[i].preco > maisCaro) {
				maisCaro = vendas[i].preco;
				caro = i;
			}
			if(vendas[i].preco < maisBarato) {
				maisBarato = vendas[i].preco;
				barato = i;
			}
			if(vendas[i].quantidade > maisVendido) {
				maisVendido = vendas[i].quantidade;
				vendido = i;
			}
			
		}
		
		System.out.println("\nEstatísticas:");
		
		System.out.printf("Total: R$%.2f\n", total);
		System.out.printf("Media dos Precos: R$%.2f\n", media/10);
		System.out.printf("Mais caro: %s\n", vendas[caro].toString());
		System.out.printf("Mais barato: %s\n", vendas[barato].toString());
		System.out.printf("Mais vendido: %s", vendas[vendido].toString());
		
	}

}
