/*Escreva um progarma que leia dois n�meros inteiros 
e determine qual � o maior e qual � o menor.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int a, b;
	
	printf ("Digite dois n�meros inteiros separados por espa�o: ");
	scanf ("%d", &a);
	scanf ("%d", &b);
	
	if (a > b){
		printf ("O maior n�mero � %d\n", a);
		printf ("O menor n�mero � %d", b);
	}else{
		printf ("O maior n�mero � %d\n", b);
		printf ("O menor n�mero � %d", a);
	}
}
