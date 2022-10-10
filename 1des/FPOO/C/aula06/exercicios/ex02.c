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
	int i = -1, cont = 1, SomaPar = 0, SomaImpar = 0;
	int contPar = 0, contImpar = 0, mediaPar = 0, mediaImpar = 0;
	
	printf("Digite os valores do  vetor:\n");
	for (i = 0; i < 10; i++){
		printf("%dº valor: ", cont);
		scanf ("%d", &vetor[i]);
		cont++;
	}
	
	for (i = 0; i < 10; i++){
		if (vetor[i] % 2 == 0){
			SomaPar += vetor[i];
			contPar++;
		}else{
			SomaImpar += vetor[i];
			contImpar++;
		}
	}
	
	if (contPar != 0) mediaPar = SomaPar / contPar; 
	if (contImpar != 0) mediaImpar = SomaImpar / contImpar;
	
	printf("\nA soma e média dos pares: [%d] e [%d]\n", SomaPar, mediaPar); 
	printf("A soma e média dos impares: [%d] e [%d]\n", SomaImpar, mediaImpar);
	printf("O total de números pares [%d]\n", contPar);
	printf("O total de números impares [%d]", contImpar);
}
