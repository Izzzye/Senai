/*faça um programa que imprima na tela a soma dos valores de um intervalo 
definido pelo usuário.
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale (LC_ALL, "");
	int i, soma = 0, val1 = -1, val2 = -1;
	
	printf("Insira um número:");
	scanf("%d", &val1);
	printf("Insira outro número:");
	scanf("%d", &val2);
	
	for (i = val1; i <= val2; i++){
		soma+=i;
	}
	
	printf("%d", soma);
}
