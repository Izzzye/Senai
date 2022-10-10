/*Escreva um progarma que leia dois números inteiros 
e determine qual é o maior e qual é o menor.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int a, b;
	
	printf ("Digite dois números inteiros separados por espaço: ");
	scanf ("%d", &a);
	scanf ("%d", &b);
	
	if (a > b){
		printf ("O maior número é %d\n", a);
		printf ("O menor número é %d", b);
	}else{
		printf ("O maior número é %d\n", b);
		printf ("O menor número é %d", a);
	}
}
