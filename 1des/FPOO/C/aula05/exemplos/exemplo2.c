#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	
	//Contar at� 10 com la�o FOR
	int i;
	for (i = 1; i <= 10; i++){
		printf ("%d\n", i);
	}
}
