// faça um progarma que imprima na tela a soma dos valores entre 0 e 100.

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int i, soma = 0;
	
	for (i = 0; i < 100; i++){
		soma+=i;
	}
	
	printf("%d", soma);
}
