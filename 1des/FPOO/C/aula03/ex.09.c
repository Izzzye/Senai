/*Desenvolva um programa que leia o nome e o preço de uma mercadoria. 
O programa deverá calcular um aumento de 5% no preço da mercadoria e 
mostrar o nome da mercadoria e o seu novo preço.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome;
	float preco, ajuste, novo;
	printf ("Digite o nome da mercadoria:");
	scanf ("%s", &nome);
	printf ("Digite o preço da mercaroria:");
	scanf ("%f", &preco);
	ajuste = preco * 5 / 100;
	novo = preco + ajuste;
	printf ("\nO novo preço é: %.2f" ,novo);
}
