/* Crie um programa que calcule o IMC (Índice de Massa Corpórea) de 5 pessoas Entradas: 
Nome, peso e altura, Saída Nome, Peso, Altura e IMC.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome[5][20];
	float peso[5], altura[5], IMC[5];
	int i;
	
	for(i = 0; i < 5; i++){
		printf("Digite o %dº nome o peso e a altura:", i + 1);
		scanf("%s", &nome[i]);
		scanf("%f", &peso[i]);
		scanf("%f", &altura[i]);
		printf("\n");
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		IMC[i] = (float) peso[i]/(altura[i] * altura[i]);
		printf("%s - Peso:%.2f - Altura:%.2f - IMC:%.2f\n", nome[i], peso[i], altura[i], IMC[i]);
	}
}
