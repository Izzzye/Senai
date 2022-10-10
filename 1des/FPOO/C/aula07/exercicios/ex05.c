/*Desenvolva um programa que leia o nome e o pre�o de 10 mercadorias, depois leia o valor do �ndice percentual (%) de desconto no pre�o 
da mercadoria. Calcule e apresente na tela, o nome, o pre�o original, o valor do desconto e pre�o final de cada mercadoria com desconto.
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	float preco[10], precofinal[10];
	int i, percentual, desconto[10];
	char nome[10][20];
	
	for(i = 0; i < 10; i++){
		printf("Digite o nome da %d� mercadoria: ", i + 1);
		scanf("%s", &nome[i]);
		printf("Digite seu pre�o: ", i + 1);
		scanf("%f", &preco[i]);
	}
	
	printf("\nDigite o percentual de desconto: ");
	scanf("%d", &percentual);
	
	for(i = 0; i < 10; i++){
		precofinal[i] = preco[i] * 100 / percentual;
		desconto[i] = preco[i] - precofinal[i];
	}
	
	printf("\n");
	
	for(i = 0; i < 10; i++){
		printf("\n%s - Pre�o:R$%.2f - Desconto:R$%.2f - Pre�o Final:R$%.2f\n", nome[i], preco[i], desconto[i], precofinal[i]);
	}
}
