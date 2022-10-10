/*Desenvolva um programa que leia o nome de um time de futebol, 
o número de vitórias e o número de empates. O programa deverá calcular
e apresentar na tela, o nome do time e o total de pontos. Lembrando 
que a vitória vale 3 pontos e o empate vale 1 ponto.
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome [20];
	int vitorias, empates, pv, total;
	printf ("Insira o nome do time:" );
	scanf ("%s", &nome);
	printf ("Insira o número de vitórias:");
	scanf ("%d" , &vitorias);
	printf ("Insira o número de empates:");
	scanf ("%d", &empates);
	pv = vitorias * 3;
	total = pv + empates;
	printf ("\nO total de pontos do time %s é: %d ", nome, total);
	
	
	
}
