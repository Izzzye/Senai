#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	
	//Contar at� 10 com la�o WHILE de 2 em 2
	int i = 0;
	while (i <= 10){
		printf ("%d\n", i);
		i+=2;
	}
}
