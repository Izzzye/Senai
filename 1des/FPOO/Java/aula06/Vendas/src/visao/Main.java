package visao;

import java.util.ArrayList;
import java.util.Scanner;

import modelo.Venda;

public class Main {

	static Scanner read = new Scanner(System.in);
	static ArrayList<Venda> vendas = new ArrayList<>();
	static int menu = 0;

	public static void main(String[] args) {
		while (menu != 5) {
			System.out.println("\n1.Cadastrar Venda");
			System.out.println("2.Consultar Venda");
			System.out.println("3.Alterar Venda");
			System.out.println("4.Excluir Venda");
			System.out.println("5.Terminar Programa");
			menu = read.nextInt();

			switch (menu) {
			case 1:
				System.out.println("Produto\tQuantidade\tPreço");
					create();
				break;
			case 2:
				System.out.println("Produto\tQuantidade\tPreço\tSubtotal");
				read();
				break;
			case 3:
				System.out.print("Digite qual item deseja alterar:");
				update(read.nextInt());
				break;
			case 4:
				System.out.print("Digite qual ítem deseja excluir:");
				delete(read.nextInt());
				break;
			case 5:
				System.out.println("Obrigado por usar nosso sistema. bejo");
				break;
			default:
				System.out.println("Opção invalida.");
				break;
			}
		}

	}
	
	public static void create() {
		Venda v = new Venda();
		v.setProduto(read.next());
		v.setQuantidade(read.nextInt());
		v.setPreco(read.nextFloat());
		
		vendas.add(v);
	}
	
	public static void read() {
		float total = 0;
		for (Venda v: vendas) {
			System.out.println(v.toString());
			total += v.subtotal();
		}
		System.out.printf("Total: %.2f\n", total);
	}
	
	public static void update(int indice) {
		if (indice >= 0 && indice < vendas.size()) {
			System.out.println(vendas.get(indice).toString());
			Venda v = new Venda();
			v.setProduto(read.next());
			v.setQuantidade(read.nextInt());
			v.setPreco(read.nextFloat());
			vendas.set(indice,v);
			System.out.println("Venda Alterada");
		}else System.out.println("Item invalido.");
	}
	
	public static void delete(int indice) {
		if (indice >= 0 && indice < vendas.size()) {
			vendas.remove(indice);
			System.out.println("Venda Excluida");
		}else System.out.println("Item invalido.");
	}
}