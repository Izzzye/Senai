/* Crie um vetor de tamanho 10, permita que o usu�rio o preencha e informe :
	- A soma e m�dia dos pares;
	- A soma e m�dia dos impares;
	- O total de n�meros pares;
	- O total de n�meros impares;
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL,"");
	int vetor[10];
	int i = -1, cont = 1;
	
	printf("Digite os valores do  vetor:\n");
	for (i = 0; i < 10; i++){
		printf("%d� valor: ", cont);
		scanf ("%d", &vetor[i]);
		cont++;
	}
}
