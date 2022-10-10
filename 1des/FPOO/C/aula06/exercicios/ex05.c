//Faça um programa que leia 10 valores inteiros em qualquer ordem e os classifique em ordem crescente.

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale (LC_ALL,"");
	int vetor[10]; // vetor a ser classificado
	int i = 0, j; // contadores
	int aux; // auxiliar para fazer trocas
	
	printf("Digite os valores do  vetor:\n");
	for (i = 0; i < 10; i++){
		printf("%dº valor: ", i + 1);
		scanf ("%d", &vetor[i]);		
	}
	
// Processamento - Algoritimo de classificação e troca
	for ( i = 0; i < 10; i++){
		for (j = i + 1; j < 10; j++){
			if (vetor[i] > vetor[j]){
				aux = vetor[i];
				vetor[i] = vetor[j];
				vetor[j] = aux;
			}
		}
	}

// Saida com o vetor ordenado
	printf("\nValores em ordem Crescente:\n");
	for(i = 0; i < 10; i++){
		printf("%dº valor: %d\n", i + 1, vetor[i]);
		
	}
}
