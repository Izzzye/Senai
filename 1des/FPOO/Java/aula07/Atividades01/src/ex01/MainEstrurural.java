/*Faça um programa que receba como entrada o nome e o salário de um funcionário, 
 * calcule valor de depósito FGTS e salve em um arquivo "fgts.csv"*/

package ex01;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class MainEstrurural {

	static String nome;
	static float salario;
	
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite o nome do funcionário:");
		nome = scan.next();
		System.out.println("Agora digite seu salário:");
		salario = scan.nextFloat();
		
		float desconto = salario / 100 * 8;
		float novoSal = salario - desconto;
		String saida = String.format("%s;%.1f;%.1f;%.1f\r\n", nome, salario, desconto, novoSal);
		
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("./bd/fgts.csv", true));
			bw.write(saida);
			bw.close();
			System.out.println("Arquivo criado com sucesso");
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		

	}

}
