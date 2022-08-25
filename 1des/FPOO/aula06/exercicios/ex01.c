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

	soma = vetor1[0] + vetor2[4];
	printf("\n%d + %d = %d", vetor1[0], vetor2[4], soma);
	
	soma = vetor1[1] + vetor2[3];
	printf("\n%d + %d = %d", vetor1[1], vetor2[3], soma);
	
	soma = vetor1[2] + vetor2[2];
	printf("\n%d + %d = %d", vetor1[2], vetor2[2], soma);
	
	soma = vetor1[3] + vetor2[1];
	printf("\n%d + %d = %d", vetor1[3], vetor2[1], soma);
	
	soma = vetor1[4] + vetor2[0];
	printf("\n%d + %d = %d", vetor1[4], vetor2[0], soma);
	
	
	/*for (vetor1 = 0; vetor1 <= 4; vetor1++; vetor2 = 4; vetor2 > 0; vetor2--){
		
		soma = vetor1[i] + vetor2[i];
		printf("\n%d + %d = %d", vetor1[i], vetor2[i], soma);
	}*/
	
}
