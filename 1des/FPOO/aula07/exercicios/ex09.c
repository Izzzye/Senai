/*Preencha uma matriz 5x5 com valores aleatórios entre 0 e 50. Depois exiba os numeros pares 
e impares existentes na matriz, e suas quantidades.*/

#include <stdio.h>
#include <locale.h>
#include <time.h>

int main (){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	int matriz [5][5];
	int i, j, contpar = 0, contimpar = 0;
	//Processamento (preencher a matriz com número aleatórios)
	for(i = 0;i < 5; i++)
		for(j = 0; j < 5; j++)
			matriz[i][j] = rand()%51;
		
	
	//saída
	printf("Matriz completa\n");
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
	
	printf("\n");
	//mostrar somente os pares
	
	for(i = 0;i < 5; i++){
		for(j = 0; j < 5; j++){
			if(matriz[i][j] % 2 == 0){
				if(matriz[i][j] < 10) printf("[0%d]", matriz[i][j]);
				else printf("[%d]", matriz[i][j]);
				contpar++;
			}else{
				printf("[  ]");
			}
		}
		printf("\n");
	}
	printf("Temos %d pares.", contpar);

	printf("\n\n");
	
	//mostrar somente os impares
	for(i = 0;i < 5; i++){
		for(j = 0; j < 5; j++){
			if(matriz[i][j] % 2 == 1){
				if(matriz[i][j] < 10) printf("[0%d]", matriz[i][j]);
				else printf("[%d]", matriz[i][j]);
				contimpar++;
			}else{
				printf("[  ]");
			}
		}
		printf("\n");
	}
	printf("Temos %d impares.", contimpar);
}
