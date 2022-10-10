#include <stdio.h>
#include <locale.h>
#include <time.h>
int main (){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	
	int matriz[5][5];//matriz
	int i, j; // contadores para percorrer a matriz
	
	
//preencher a matriz com números aleatórios de 0 a 100
	for(i = 0; i < 5; i++) // quanto tem apenas um comando dentro do laço não precisa colocar {
		for(j = 0; j < 5; j++)
			matriz[i][j] = rand() % 100;
			

//Mostrar a matriz preenchida com as posições
	for(i = 0; i < 5; i++){
		for(j = 0; j < 5; j++){
			if(matriz[i][j] < 0) printf("[%d, %d]: 0%d\t", i,j,matriz[i][j]);
			else printf("[%d, %d]: %d\t", i,j,matriz[i][j]);
		}
		printf("\n");
	}
	
}
