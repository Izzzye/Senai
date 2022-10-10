#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	
	//Contar até 10 com laço WHILE de 2 em 2
	int i = 0;
	while (i <= 10){
		printf ("%d\n", i);
		i+=2;
	}
}
