/*Desenvolva um programa que leia o nome e o pre�o de uma mercadoria. 
O programa dever� calcular um aumento de 5% no pre�o da mercadoria e 
mostrar o nome da mercadoria e o seu novo pre�o.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome;
	float preco, ajuste, novo;
	printf ("Digite o nome da mercadoria:");
	scanf ("%s", &nome);
	printf ("Digite o pre�o da mercaroria:");
	scanf ("%f", &preco);
	ajuste = preco * 5 / 100;
	novo = preco + ajuste;
	printf ("\nO novo pre�o �: %.2f" ,novo);
}
