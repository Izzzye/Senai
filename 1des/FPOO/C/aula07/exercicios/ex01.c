/*Desenvolva um programa que leia o nome e o sal�rio de 5 pessoas, 
depois leia um valor de �ndice percentual (%) de reajuste do sal�rio. 
Calcule e apresente na tela, o valor do novo sal�rio e o nome das 5 
pessoas.
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nomes[5][10];
	float salarios[5];
	float percentual;
	int i;
	
// Entrada
	printf("Digite  o nome dos 5 funcion�rios:\n");
	for(i = 0; i < 5; i++){
		scanf("%s", &nomes[i]);
	}
	printf("\nDigite os 5 sal�rios respectivamente:\n");
	for(i = 0; i < 5; i++){
		do{
			scanf("%f", &salarios[i]);	
		}while(salarios[i] < 0 || salarios[i] > 1000000);
	}
	printf("\nDigite o percentual(%%) de ajuste:\n");
	do{
		scanf("%f", &percentual);
	}while(percentual < 0 || percentual > 1000);
	
//processamento
	for(i = 0; i < 5; i++){
		salarios[i] = salarios[i] * percentual / 100 + salarios[i];
		printf("%s - novo sal�rio: R$%.2f\n", nomes[i], salarios[i]);
	}
}
