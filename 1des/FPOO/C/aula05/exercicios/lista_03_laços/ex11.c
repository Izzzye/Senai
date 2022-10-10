/* Escreva um programa que exiba na tela a tabuada de um número que deverá ser informado
pelo usuário.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int i, m, resultado;
	
	printf("Digite um número:\n");
	scanf ("%d", &i);
	printf("Essa é a tabuada do %d:\n", i);
	for (m = 1; m <= 10; m++){
		resultado = i * m;
		printf("%d x %d = %d\n", i, m, resultado);
	}
}
