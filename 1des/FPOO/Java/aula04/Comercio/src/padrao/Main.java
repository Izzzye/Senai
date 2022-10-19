package padrao;

import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Locale.setDefault(new Locale("pt", "BR"));
		Operacao operacoes[] = new Operacao[10];
		
		float invTotal = 0, fatTotal = 0, lucroTotal = 0, lucroPorcento = 0;
		
		System.out.println("Insira as informacoes dos 10 produtos: ");
		
		for(int i = 0; i < 10; i++) {
			operacoes[i] = new Operacao(scan.next(), scan.nextInt(), scan.nextInt(), scan.nextFloat(), scan.nextFloat());
		}
		
		System.out.println("\n[Produto]\t[qtdComprada]\t[qtdVendida]\t[PrecoCompra]\t[PrecoVenda]\t[Investimento]\t[Faturamento]\t[Lucro(R$)]\t[Lucro(%)]");
		
		for(int i = 0; i < 10; i++) {
			System.out.println(operacoes[i].toString());
			
			invTotal += operacoes[i].investimento(); // acumuladores
			fatTotal += operacoes[i].faturamento();
			lucroTotal += operacoes[i].lucroDinheiro();
		}
		
		lucroPorcento = (fatTotal / invTotal) * 100;
		
		System.out.println("\nEstatísticas");
		System.out.printf("Investimento Total: R$%.2f\n", invTotal);
		System.out.printf("Faturamento Total: R$%.2f\n", fatTotal);
		System.out.printf("Lucro Total: R$%.2f\n", lucroTotal);
		
		System.out.printf("Lucro total em porcentagem : %.0f%%", lucroPorcento);
	}

}
