//faça um programa onde o usuário digite um valor, e imprima na tela todos os valores entre 0 e o valor digitado.

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int n, valor = -1;

	while (valor < 0 || valor > 32767){
		printf ("Digite um número maior que 0 e menor que 32.767: ");
		scanf ("%d", &valor);
	}

	for (n = 1; n < valor; n++){
		printf ("%d\n", n);
	}
	
}
