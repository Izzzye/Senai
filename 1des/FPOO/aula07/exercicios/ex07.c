/*Gere e imprima uma matriz 3x3 com valores aleat�rios entre 0 e 9. Ap�s, determine o maior n�mero da matriz e sua posi��o.*/

#include <stdio.h>
#include <locale.h>
#include <time.h>

int main (){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	int matriz [3][3];
	int i, j, maior = 0, linha = 0, coluna = 0;
	//Processamento (preencher a matriz com n�mero aleat�rios)
	for(i = 0;i < 3; i++)
		for(j = 0; j < 3; j++)
			matriz[i][j] = rand()%10;
		
	
	//sa�da
	for(i = 0;i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("[%d]", matriz[i][j]);
			//Pegar a posi��o do maior
			if (matriz[i][j]> maior){
				maior = matriz[i][j];
				linha = i;
				coluna = j;
			}
		}
		printf("\n");
	}
	printf("O maior n�mero � %d e est� na posi��o [%d,%d]", maior, linha, coluna);
}
