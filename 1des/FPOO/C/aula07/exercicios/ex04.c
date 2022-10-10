/*Desenvolva um programa que leia o nome de uma cidade, o número total 
de eleitores e o número total de votos apurados na última eleição. O 
programa deverá calcular e exibir a porcentagem de participação dos 
eleitores desta cidade na última eleição e fazer isso para 5 cidades.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int i;
	float eleitores[5], votos[5];
	char cidades[5][20];
	
	for(i = 0; i < 5; i++){
		printf("\nDigite o nome da %dº cidade: ",i + 1);
		scanf("%s", &cidades[i]);
		printf("Número total de eleitores: ");
		scanf("%f", &eleitores[i]);
		printf("Número de votos apurados: ");
		scanf("%f", &votos[i]);
	}
	
	for(i = 0; i < 5; i++){
		votos[i] = votos[i] * 100;
		votos[i] = votos[i] / eleitores[i];
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("A porcentagem de participação dos eleitores na cidade %s foi de %.1f%%.\n", cidades[i], votos[i]);
	}
}
