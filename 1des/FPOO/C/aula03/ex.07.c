/*Um caminh�o consegue transportar 18 toneladas de laranjas em uma 
viagem que faz entre a fazenda e a f�brica de suco de laranja. Um 
alqueire de terra produz em m�dia 250 toneladas de laranjas. Fa�a 
um programa que leia quantos caminh�es e quantos alqueires uma 
fazenda produtora de laranjas possui, calcule e apresente na tela 
quantas viagens de caminh�o ser�o necess�rias para transportar toda 
a colheita de laranjas.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	int caminhao, alqueire, viagem;
	printf ("Quantos alqueires a fazenda possui?");
	scanf ("%d" , &alqueire);
	printf ("Quantos caminh�es estar�o dispon�veis? ");
	scanf ("%d", &caminhao);
	caminhao = caminhao * 18;
	alqueire = alqueire * 250;
	viagem = alqueire / caminhao;
	printf ("Ser�o necess�rias %d viagens para cada caminh�o. " , viagem);
}
