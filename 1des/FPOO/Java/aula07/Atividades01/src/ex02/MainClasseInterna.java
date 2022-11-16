package ex02;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class MainClasseInterna {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite o nome e o salário:");
		INSS inss = new INSS(scan.next(),scan.nextDouble());
		
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("./bd/inss.csv", true));
			bw.write(inss.tocsv());
			bw.close();
			System.out.println(inss.toString());
			System.out.println("Dados gravados com sucesso.");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
		
	public static class INSS{
		private String nome;
		private double salario;
		
		public INSS(String nome, double salario) {
			this.nome = nome;
			this.salario = salario;
		}
		
		public double inss() {
			if (salario < 1212.01f)
				return salario * 7.5f / 100f;
			else if (salario < 2427.36f)
				return salario * 9 / 100f;
			else if (salario < 3641.04f)
				return salario * 12 / 100f;
			else if (salario < 7087.23f)
				return salario * 14 / 100f;
			else
				return 7087.22 * 14 / 100;
		}

		public String toString() {
			return String.format("%s\t%.2f\t%.2f", nome, salario, inss());
		}
		
		public String tocsv() {
			return String.format("%s;%.2f;%.2f\r\n", nome, salario, inss());
		}
		
		
	}
}
