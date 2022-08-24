/*Faça um programa que imprima na tela os valores no intervalo 
entre 10 e 200.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale (LC_ALL, "");
	int numero, tab = 20;
	// if tab para tabular os números.
	// \t = tab
	for (numero = 11; numero < 200; numero++){
		if (numero < 100) printf ("0"); // acrescenta zeros a esquerda.
		printf ("%d", numero);
		if(tab == numero){
			printf ("\n");
			tab += 10;
		}else{
			printf("\t");
		}
	}
}
