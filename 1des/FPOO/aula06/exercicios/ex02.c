/* Crie um vetor de tamanho 10, permita que o usuário o preencha e informe :
	- A soma e média dos pares;
	- A soma e média dos impares;
	- O total de números pares;
	- O total de números impares;
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL,"");
	int vetor[10];
	int i = -1, cont = 1;
	
	printf("Digite os valores do  vetor:\n");
	for (i = 0; i < 10; i++){
		printf("%dº valor: ", cont);
		scanf ("%d", &vetor[i]);
		cont++;
	}
}
