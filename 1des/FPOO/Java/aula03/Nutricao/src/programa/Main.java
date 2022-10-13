package programa;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Paciente pac[] = new Paciente[10];
		
		for(int i = 0; i < 10; i++) {
			pac[i] = new Paciente();
			System.out.printf("Digite o %d nome: ", i + 1);
			pac[i].nome = scan.next();
			System.out.println("Digite seu peso: ");
			pac[i].peso = scan.nextFloat();
			System.out.println("Digite sua altura: ");
			pac[i].altura = scan.nextFloat();
		}

		for(int i = 0; i < 10; i++) {
			System.out.println(pac[i].toString());
		}
	}

}
