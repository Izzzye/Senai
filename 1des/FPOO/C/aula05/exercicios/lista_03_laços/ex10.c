/*Escreva um programa que exiba na tela em ordem crescente, apenas 
os n�meros pares existentes de 11 a 250.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "");
	// if tab para deixar os n�meros organizados
	int i, tab = 20;
	printf("N�meros pares entre 11 e 250: \n");
	for (i = 12; i < 250; i+=2){
		printf ("%i\t", i);
		if(tab == i){
			printf ("\n");
			tab += 10;
		}else{
			printf("\t");
		}
	}
}
