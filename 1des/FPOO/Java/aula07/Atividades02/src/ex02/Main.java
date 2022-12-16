package ex02;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Main {

	static BufferedReader br;
	
	public static void main(String[] args) {
		int cont = 0;
		
	
		try {
			br = new BufferedReader(new FileReader("./bd/dados2.csv"));
			String line = br.readLine();
			while(line != null) {
				String palavras[] = line.split(";");
				System.out.print(palavras[0]+"\t"+palavras[1]+"\t"+palavras[2]);
				System.out.println("\t" +palavras.length+ " colunas");
				line = br.readLine();
				cont++;
			}
			
			System.out.println("\nO arquivo possui "+cont+" linhas");
			
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo não encontrado, erro: " +e);
		} catch (IOException e) {
			System.out.println("Falha ao ler o arquivo, erro: " +e);
		}


	}

}
