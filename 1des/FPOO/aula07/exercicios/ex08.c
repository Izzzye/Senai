/*Gere e imprima uma matriz 5x5 com valores aleat�rios entre 0 e 25. Ap�s isso indique qual � o maior 
e o menor valor da linha 4 e o maior e menor valor da coluna 3.*/

#include <stdio.h>
#include <locale.h>
#include <time.h>

int main (){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	int matriz [5][5];
	int i, j, maior = 0, menor = 26, linha = 0, coluna = 0;
	//Processamento (preencher a matriz com n�mero aleat�rios)
	for(i = 0;i < 5; i++)
		for(j = 0; j < 5; j++)
			matriz[i][j] = rand()%26;
		
	
	//sa�da
	for(i = 0;i < 5; i++){
		for(j = 0; j < 5; j++){
			if (matriz[i][j] < 10){
				printf("[0%d]", matriz[i][j]);
			}else {
				printf("[%d]", matriz[i][j]);
			}
		}
		printf("\n");
	}
	//pegar o maior e o menor n�mero da linha 4
	for(j = 0; j < 5; j++){
		if(matriz[4][j] > maior)
			maior = matriz[4][j];
		if(matriz[4][j]< menor)
			menor = matriz[4][j];
	}
	printf("O maior e o menor n�mero da linha 4 s�o respectivamente %d e %d\n", maior, menor);
	
	//pegar o maior e o menor n�mero da coluna 3
	maior = 0;
	menor = 26;
	for(i = 0; i < 5; i++){
		if(matriz[i][3] > maior)
			maior = matriz[i][3];
		if(matriz[i][3]< menor)
			menor = matriz[i][3];
	}
	printf("O maior e o menor n�mero da coluna 3 s�o respectivamente %d e %d\n", maior, menor);
}
