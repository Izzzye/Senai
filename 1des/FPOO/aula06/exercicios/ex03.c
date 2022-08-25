/*Utilizando apenas um vetor de tamanho 6, troque os valores de maneira inversa;*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale(LC_ALL,"");
	
	int vetor[6], aux[6];
	int i, cont = 1;
	
	
	printf("Digite os valores do  vetor:\n");
	for (i = 0; i < 6; i++){
		printf("%dº valor: ", cont);
		scanf ("%d", &vetor[i]);
		cont++;
	}	
}
