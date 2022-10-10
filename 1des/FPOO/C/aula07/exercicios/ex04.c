/*Desenvolva um programa que leia o nome de uma cidade, o n�mero total 
de eleitores e o n�mero total de votos apurados na �ltima elei��o. O 
programa dever� calcular e exibir a porcentagem de participa��o dos 
eleitores desta cidade na �ltima elei��o e fazer isso para 5 cidades.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int i;
	float eleitores[5], votos[5];
	char cidades[5][20];
	
	for(i = 0; i < 5; i++){
		printf("\nDigite o nome da %d� cidade: ",i + 1);
		scanf("%s", &cidades[i]);
		printf("N�mero total de eleitores: ");
		scanf("%f", &eleitores[i]);
		printf("N�mero de votos apurados: ");
		scanf("%f", &votos[i]);
	}
	
	for(i = 0; i < 5; i++){
		votos[i] = votos[i] * 100;
		votos[i] = votos[i] / eleitores[i];
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("A porcentagem de participa��o dos eleitores na cidade %s foi de %.1f%%.\n", cidades[i], votos[i]);
	}
}
