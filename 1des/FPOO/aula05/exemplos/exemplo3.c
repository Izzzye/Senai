#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	
	//Contar at� 10 com la�o WHILE
	int i = 1;
	while (i <= 10){
		printf ("%d\n", i);
		i++;
	}
}
