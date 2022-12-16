package ex03;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

	static BufferedReader br;
	
	public static void main(String[] args) {
		
		int i = 0;
		float total = 0;
		float caro = 0;
		float barato = 10000000;
		float novo = 0;
		float velho = 1000000;
		String mCaro = "";
		String mBarato = "";
		String mNovo = "";
		String mVelho = "";
		
		try {
			br = new BufferedReader(new FileReader("./bd/dados2.csv"));
			
			String line = br.readLine();
			while(line != null) {
				String coluna[] = line.split(";");
				System.out.println(coluna[0]+"\t"+coluna[1]+"\t"+coluna[2]);
				
				if(i != 0) {
					float preco = 0;
					int ano = 0;
					preco = Float.parseFloat(coluna[2]);
					ano = Integer.parseInt(coluna[1]);
					if(caro < preco) {
						caro = preco;
						mCaro = coluna[0]+"\t"+coluna[1]+"\t"+coluna[2];
					}
					if(barato > preco) {
						barato = preco;
						mBarato = coluna[0]+"\t"+coluna[1]+"\t"+coluna[2];
					}
					if(novo < ano) {
						novo = ano;
						mNovo = coluna[0]+"\t"+coluna[1]+"\t"+coluna[2];
					}
					if(velho > ano) {
						velho = ano;
						mVelho = coluna[0]+"\t"+coluna[1]+"\t"+coluna[2];
					}
					total += preco;
				}
				BufferedWriter bw = new BufferedWriter(new FileWriter("./bd/relatório.txt",true));
				bw.write(line+"\n");
				i++;
				line = br.readLine();

			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo não encontrado, erro: " +e);
		} catch (IOException e) {
			System.out.println("Falha ao ler o arquivo, erro: " +e);
		}
		
		System.out.printf("\nA média de preços: %.2f", total/(i-1));
		System.out.println("\nO veículo mais barato: "+mBarato);
		System.out.println("O veículo mais caro: "+mCaro);
		System.out.println("O veículo mais novo: "+mNovo);
		System.out.println("O veículo mais velho: "+mVelho);

		
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("./bd/relatório.txt"));
			bw.write("\nA média de preços: "+ total/(i-1)+"\nO veículo mais barato: "+mBarato + 
					"\nO veículo mais caro: "+mCaro+ "\nO veiculo mais novo: "+mNovo+ "\nO veículo mais velho: "+mVelho);
			bw.close();
			System.out.println("\nArquivo salvo com sucesso.");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
