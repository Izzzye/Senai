/*
Desenvolva um programa que leia o nome e o sal�rio de uma pessoa, 
depois leia o valor do �ndice percentual (%) de reajuste do sal�rio. 
Calcule e apresente na tela, o valor do novo sal�rio e o nome da pessoa.
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
	printf ("\n %s Agora digite seu sal�rio:" , nome);
	scanf ("%f", &salario);
	printf ("\nDigite a porcentagem que seu sal�rio ir� eumentar: ");
	scanf ("%f", &percentual);
	aumento = salario * percentual / 100;
	final = salario + aumento;
	printf ("\n %s seu novo sal�rio ser�: %.2f " ,nome , final);
}
