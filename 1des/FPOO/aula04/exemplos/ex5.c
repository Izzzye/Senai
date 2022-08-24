#include <stdio.h>
#include <locale.h>

int main(){
	//Configura��es e Vari�veis
	setlocale(LC_ALL,"");
	int numero1 = 10;
	int numero2 = 15;

	//Comparar N�meros	
	if(numero1 == numero2){
		printf("Os n�meros s�o iguais\n");
	}else{
		printf("Os n�meros s�o diferentes\n");
	}

	//Configura��es e Vari�veis
	char nome1[3] = "Ana";
	char nome2[3] = "Ivo";
	printf("A compara��o retornou %d \n",strcmp(nome1,nome2));
	
	if(strcmp(nome1,nome2) == 0){
		printf("Os nomes s�o iguais\n");
	}else{
		printf("Os nomes s�o diferentes\n");
	}
		
}
