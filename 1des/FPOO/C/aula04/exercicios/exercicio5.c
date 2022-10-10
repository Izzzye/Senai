/*Desenvolva um programa que leia  nome e o pre�o de uma mercadoria. Se o
pre�o for menor que 1000 ter� aumento de 5% no pre�o da mercadoria, sen�o
o aumento ser� de 7%. Mostrar nome da mercadoria e novo pre�o.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	char nome[20];
	float preco;
	
	printf ("Insira o nome da mercadoria: ");
	scanf ("%s", &nome);
	printf ("Insira o pre�o da mercadoria:" );
	scanf ("%f", &preco);
	
	if(preco < 1000){
		preco = (float) preco + preco *  5 / 100;
	}else{
		preco = (float) preco + preco *  7 / 100;
	}
	
	printf ("O novo pre�o da mercadoria %s � R$%.2f", nome, preco);
}
