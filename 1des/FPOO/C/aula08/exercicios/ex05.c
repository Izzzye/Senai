// Crie uma fun��o que compare se dois valores s�o iguais e retorne um booleano.

#include <stdio.h>
#include <locale.h>
#include <stdbool.h>

bool comparador(int valor1, int valor2);

int main (void){
	setlocale(LC_ALL,"");
	int valor1, valor2;
	
	printf("Digite o 1� valor: ");
	scanf("%d", &valor1);
	
	printf("Digite o 2� valor: ");
	scanf("%d", &valor2);
	
	
	if(comparador(valor1, valor2)){
		printf("Os n�meros s�o iguais.");
	}else{
		printf("Os n�meros s�o diferentes.");
	}
	return 0;
}

bool comparador(int valor1, int valor2){
	if (valor1 == valor2){
		return true;
	}else{
		return false;
	}
}
