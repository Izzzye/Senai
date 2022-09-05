//Faça um programa que leia 5 nomes inteiros aleatorios e os classifique em ordem decrescente.

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome[5][30];
	int i, j;
	char aux[30];
	
	//entrada usando string = vetor de carateres
	for(i = 0; i < 5; i++){
		printf("Digite o nome da %dº pessoa:", i + 1);
		scanf("%s", &nome[i]);
	}
	

	// Processamento - Algoritimo de classificação e troca utilizando strcmp
	for ( i = 0; i < 5; i++){
		for (j = i + 1; j < 5; j++){
			if (strcmp(nome[i], nome[j]) < 0){
				strcpy(aux, nome[i]);
				strcpy(nome[i], nome[j]);
				strcpy(nome[j], aux);
			}
		}
	}
	
	
	//saida
	for(i = 0; i < 5; i++){
		printf("%s\n", nome[i]);
	}
}
