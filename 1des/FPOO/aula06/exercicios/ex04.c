/*Localize um valor informado pelo usu?rio dentro de um vetor com dimens?o 10*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int vetor[10];
	int i, cont = 1, val = 0, flag = 0;
	
	printf("Insira os números do vetor:\n");
	for (i = 1; i <= 10; i++){
		printf("%dº valor:" ,cont);
		scanf("%d", &vetor[i]);
		cont++;
	}
	
	printf("Qual valor deseja localizar? ");
	scanf("%d", &val);
	
	for(i = 1; i <=10; i++){
		if (val == vetor[i]){
			printf("O valor está na posição %d\n", i);
		}
	}	
}
