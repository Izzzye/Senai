/*Desenvolva um programa que leia o nome de uma cidade, 
o n�mero total de eleitores e o n�mero total de votos 
apurados na �ltima elei��o. O programa dever� calcular 
e exibir a porcentagem de participa��o dos eleitores 
desta cidade na �ltima elei��o.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome;
	int eleitores, votos;
	printf ("Insira o nome da cidade:" );
	scanf ("%s", &nome);
	printf("Insira o n�mero total de eleitores: ");
	scanf ("%d", &eleitores);
	printf ("Insira o n�mero total de votos: ");
	scanf ("%d", &votos);
	votos = votos * 100;
	votos = votos / eleitores;
	printf ("A participa��o dos eleitores da cidade foi de: %d%%",votos);
}
