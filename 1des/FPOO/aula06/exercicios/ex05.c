//Fa�a um programa que leia 10 valores inteiros em qualquer ordem e os classifique em ordem crescente.

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale (LC_ALL,"");
	int vetor[10], i = 0;
	int cont = 1;
	
	printf("Digite os valores do  vetor:\n");
	for (i = 0; i < 10; i++){
		printf("%d� valor: ", cont);
		scanf ("%d", &vetor[i]);
		cont++;
	}
	
	
	
	printf("Esses s�o os valores em ordem crescente:");
}

