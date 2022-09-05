//Faça um programa que gere 100 valores inteiros aleatorios e os classifique em ordem crescente.

#include <stdio.h>
#include <locale.h>
#include <time.h>
int main (){
	setlocale (LC_ALL,"");
	srand(time(NULL));// Utiliza o relógio do pc para gerar pseudo aleatórios
	int vetor[100]; // vetor a ser classificado
	int i = 0, j; // contadores
	int aux; // auxiliar para fazer trocas
	int igual; //validar se um número aleatório é igual a algum outro
	
	
//Gera 100 números aleatórios de 0 a 1000 e sem duplicatas
	i = 0;
	do{
		aux = rand() % 1000;
		igual = 0;
		for (j = 0; j < 100; j++){
			if(vetor[j] == aux) igual = 1;
		}
		if(igual == 0){
			vetor[i] = aux;
			i++;
		}
	}while(i < 100);

	
// Processamento - Algoritimo de classificação e troca
	for ( i = 0; i < 100; i++){
		for (j = i + 1; j < 100; j++){
			if (vetor[i] > vetor[j]){
				aux = vetor[i];
				vetor[i] = vetor[j];
				vetor[j] = aux;
			}
		}
	}
	

// Saida com o vetor ordenado
	for(i = 0; i < 100; i++){
		printf("%dº valor: %d\n ", i + 1, vetor[i]);
	}	
}
