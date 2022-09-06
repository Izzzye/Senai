/* Desenvolva um programa que leia o nome de 5 times de futebol, 
o n�mero de vit�rias e o n�mero de empates de cada time. O programa 
dever� calcular e apresentar na tela, o nome dos times e o total de 
pontos de cada um e a ordem de classifica��o decrescente. Lembrando 
que a vit�ria vale 3 pontos e o empate vale 1 ponto.
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char times[5][20], auxt[15];
	int empate[5], vitoria[5], pontos[5];
	int i = 0, j = 0, aux = 0;
	
	
// Entrada
	printf("Digite o nome dos 5 times:\n");
	for(i = 0; i < 5; i++){
		scanf("%s", &times[i]);
	}
	printf("\nDigite a quantidade de vit�rias:\n");
	for(i = 0; i < 5; i++){
		scanf("%d", &vitoria[i]);
	}
	printf("\nDigite a quantidade de empates:\n");
	for(i = 0; i < 5; i++){
		scanf("%d", &empate[i]);
	}
	
//processamento calculo dos pontos
	for(i = 0; i < 5; i++){
		pontos[i] = vitoria[i] * 3 + empate[i];	
	}
	
//processamento - algoritimo de troca e classifica��o	
	for ( i = 0; i < 5; i++){
		for (j = i + 1; j < 5; j++){
			if (pontos[i] < pontos[j]){// os criterios s�o os pontos
				//fazer a troca dos pontos
				aux = pontos[i];
				pontos[i] = pontos[j];
				pontos[j] = aux;
				
				//fazer a troca dos nomes
				strcpy(auxt, times[i]);
				strcpy(times[i], times[j]);
				strcpy(times[j], auxt);
			}
		}
	}
	
//sa�da
	printf("\n");
	for(i = 0; i < 5; i++){
		printf("%s - %d\n", times[i], pontos[i]);
	}
}
