/* Escreva um programa que exiba na tela a tabuada de um n�mero que dever� ser informado
pelo usu�rio.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int i, m, resultado;
	
	printf("Digite um n�mero:\n");
	scanf ("%d", &i);
	printf("Essa � a tabuada do %d:\n", i);
	for (m = 1; m <= 10; m++){
		resultado = i * m;
		printf("%d x %d = %d\n", i, m, resultado);
	}
}
