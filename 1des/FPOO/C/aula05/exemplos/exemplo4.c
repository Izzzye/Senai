#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	
	//Contar at� 10 com la�o FOR de 2 em 2
	int i;
	for (i = 0; i <= 10; i+=2){
		printf ("%d\n", i);
	}
}
