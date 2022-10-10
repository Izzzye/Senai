/*Crie dois vetores numéricos de dimensão 5 com valores informados pelo usuário.
Apresente a soma do primeiro vetor com o inverso do segundo.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale(LC_ALL,"");
	
	int vetor1[5], vetor2[5];
	int i = -1, i2 = -1, soma = 0, cont = 1, cont2 = 1;
	
	printf("Digite os valores do primeiro vetor:\n");
	for (i = 0; i < 5; i++){
		printf("%dº valor: ", cont);
		scanf ("%d", &vetor1[i]);
		cont++;
	}
	printf("\nDigite os valores do segundo vetor:\n");
	for (i = 0; i < 5; i++){
		printf("%dº valor: ", cont2);
		scanf ("%d", &vetor2[i]);
		cont2++;
	}
	printf("\nA soma dos números do primeiro vetor com o inverso do segundo é:");

	for (i = 0; i < 5; i++){
		soma = vetor1[i] + vetor2[j];
		printf("\n%d + %d = %d", vetor1[i], vetor2[j], soma);
		vetor2[j]--;
	}	
}
