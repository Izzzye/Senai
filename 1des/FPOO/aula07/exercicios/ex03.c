/*Desenvolva um programa que leia o nome e o preço de 5 mercadorias. Se 
o preço for menor do que 1000 terá um aumento de 5% no preço da mercadoria,
senão o aumento será de 7%. Mostrar o nome das mercadorias e o seu novo 
preço.
*/

#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	
	float preco[5];
	char nome[5][20];
	int i = 0, l = 0 ; 
	
	for(i = 0; i < 5; i++){
		printf("Digite o nome e o preço da %dº mercadoria: ", i + 1);
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
		printf("O novo preço de %s é: R$%.2f.\n", nome[l], preco[i]);
	}
}
