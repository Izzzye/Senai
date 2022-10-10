#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main (int argc, char *argv[]){
	int resultado = somar();
	
	printf("Resultado - %d", somar());
	return 0;
}

int somar(){
	int a = 5, b = 7;
	return a + b ;
}
