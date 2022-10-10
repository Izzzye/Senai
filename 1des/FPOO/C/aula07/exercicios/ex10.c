/*Crie um programa que leia o nome e duas notas de 5 alunos, em seguida mostre a lista com nomes notas e médias dos 5 alunos.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome[5][20];
	int i, nota[5], nota2[5];
	float media[5];
	
	for(i = 0; i < 5; i++){
		printf("Digite o %dº nome e as duas notas: ", i + 1);
		scanf("%s", &nome[i]);
		scanf("%d", &nota[i]);
		scanf("%d", &nota2[i]);
		printf("\n");
	}
	for(i = 0; i < 5; i++){
		media[i] = (float)(nota[i] + nota2[i]) / 2;
		printf("%s - [%d][%d] - %.1f\n", nome[i], nota[i], nota2[i], media[i]);
	}
}
