/*Desenvolva um programa que leia o nome e o salário de 5 pessoas, 
depois leia um valor de índice percentual (%) de reajuste do salário. 
Calcule e apresente na tela, o valor do novo salário e o nome das 5 
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
	printf("Digite  o nome dos 5 funcionários:\n");
	for(i = 0; i < 5; i++){
		scanf("%s", &nomes[i]);
	}
	printf("\nDigite os 5 salários respectivamente:\n");
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
		printf("%s - novo salário: R$%.2f\n", nomes[i], salarios[i]);
	}
}
