/*Desenvolva um programa que leia o nome e o pre�o de 5 mercadorias. Se 
o pre�o for menor do que 1000 ter� um aumento de 5% no pre�o da mercadoria,
sen�o o aumento ser� de 7%. Mostrar o nome das mercadorias e o seu novo 
pre�o.
*/

#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	
	float preco[5];
	char nome[5][20];
	int i = 0, l = 0 ; 
	
	for(i = 0; i < 5; i++){
		printf("Digite o nome e o pre�o da %d� mercadoria: ", i + 1);
		scanf("%s", &nome);
		scanf("%f", &preco);
	}
	
	for(i = 0; i < 5; i++){
		if(preco[i] < 1000){
			preco[i] = preco[i]  + preco[i] / 100 * 5;
		}else {
			preco[i] = preco[i] + preco[i] / 100 * 7;
		}
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("O novo pre�o de %s �: R$%.2f.\n", nome[l], preco[i]);
	}
}
