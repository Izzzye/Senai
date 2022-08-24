/*Desenvolva um programa que leia o nome de uma cidade, 
o número total de eleitores e o número total de votos 
apurados na última eleição. O programa deverá calcular 
e exibir a porcentagem de participação dos eleitores 
desta cidade na última eleição.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome;
	int eleitores, votos;
	printf ("Insira o nome da cidade:" );
	scanf ("%s", &nome);
	printf("Insira o número total de eleitores: ");
	scanf ("%d", &eleitores);
	printf ("Insira o número total de votos: ");
	scanf ("%d", &votos);
	votos = votos * 100;
	votos = votos / eleitores;
	printf ("A participação dos eleitores da cidade foi de: %d%%",votos);
}
