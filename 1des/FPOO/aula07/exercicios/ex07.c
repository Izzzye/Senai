/*Gere e imprima uma matriz 3x3 com valores aleatórios entre 0 e 9. Após, determine o maior número da matriz e sua posição.*/

#include <stdio.h>
#include <locale.h>
#include <time.h>

int main (){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	int matriz [3][3];
	int i, j, maior = 0, linha = 0, coluna = 0;
	//Processamento (preencher a matriz com número aleatórios)
	for(i = 0;i < 3; i++)
		for(j = 0; j < 3; j++)
			matriz[i][j] = rand()%10;
		
	
	//saída
	for(i = 0;i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("[%d]", matriz[i][j]);
			//Pegar a posição do maior
			if (matriz[i][j]> maior){
				maior = matriz[i][j];
				linha = i;
				coluna = j;
			}
		}
		printf("\n");
	}
	printf("O maior número é %d e está na posição [%d,%d]", maior, linha, coluna);
}
