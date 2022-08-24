/*Escreva um programa que leia 5 números inteiros em qualquer ordem e exiba na tela ao final, os cinco
números em ordem crescente.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "");
	int a, b, c, d, e;
	int i, n, menor = 32767, maior = 0;
	
	for(i = 0; i < 5; i++){
		n = -1;
		while(n < 0 || n > 32767){
			printf("digite o %d° número: ", i + 1);
			scanf("%d", &n);
		}
		if (n < menor){
			menor = n;
		}
		in( n > maior){
			maior = n;
		}
		if (i == 0) a = n;
		if (i == 0) b = n;
		if (i == 0) c = n;
		if (i == 0) d = n;
		if (i == 0) e = n;
	}
	
}
