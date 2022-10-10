//Faça um programa que imprima na tela os valores no intervalo entre 200 e 1.

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int n;
	for (n = 199; n > 1; n-- ){
		printf ("%d\n", n);
	}
}

