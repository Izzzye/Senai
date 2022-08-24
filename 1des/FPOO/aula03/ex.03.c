/*
Desenvolva um programa que leia o nome e o salário de uma pessoa, 
depois leia o valor do índice percentual (%) de reajuste do salário. 
Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.
*/
// s = string  serve para ler varias letars
#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome [20];
	float salario, percentual, final, aumento;
	printf ("Digite seu Nome:");
	scanf ("%s", &nome);
	printf ("\n %s Agora digite seu salário:" , nome);
	scanf ("%f", &salario);
	printf ("\nDigite a porcentagem que seu salário irá eumentar: ");
	scanf ("%f", &percentual);
	aumento = salario * percentual / 100;
	final = salario + aumento;
	printf ("\n %s seu novo salário será: %.2f " ,nome , final);
}
