/*Desenvolva um programa que leia  nome e o preço de uma mercadoria. Se o
preço for menor que 1000 terá aumento de 5% no preço da mercadoria, senão
o aumento será de 7%. Mostrar nome da mercadoria e novo preço.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	char nome[20];
	float preco;
	
	printf ("Insira o nome da mercadoria: ");
	scanf ("%s", &nome);
	printf ("Insira o preço da mercadoria:" );
	scanf ("%f", &preco);
	
	if(preco < 1000){
		preco = (float) preco + preco *  5 / 100;
	}else{
		preco = (float) preco + preco *  7 / 100;
	}
	
	printf ("O novo preço da mercadoria %s é R$%.2f", nome, preco);
}
