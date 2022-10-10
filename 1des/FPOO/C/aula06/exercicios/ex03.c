/*Utilizando apenas um vetor de tamanho 6, troque os valores de maneira inversa;*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale(LC_ALL,"");
	
	int vetor[6], aux;
	int i, cont = 1;
	
	
	printf("Digite os valores do  vetor:\n");
	for (i = 0; i < 6; i++){
		printf("%dº valor: ", cont);
		scanf ("%d", &vetor[i]);
		cont++;
	}
	
	//Processamento - (TROCA-  Inverter o vetor)
	for (i = 0; i < 6; i+=2){
		aux = vetor[i];
		vetor[i] = vetor[5-i];
		vetor[5-i] = aux;
	}
	
	printf ("\nEsses são os valores do vetor de forma inversa:\n");
	for (i = 0; i < 6; i++){
		printf ("%d\n",vetor[i]);
	}
}
