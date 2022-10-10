/*Um caminhão consegue transportar 18 toneladas de laranjas em uma 
viagem que faz entre a fazenda e a fábrica de suco de laranja. Um 
alqueire de terra produz em média 250 toneladas de laranjas. Faça 
um programa que leia quantos caminhões e quantos alqueires uma 
fazenda produtora de laranjas possui, calcule e apresente na tela 
quantas viagens de caminhão serão necessárias para transportar toda 
a colheita de laranjas.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	int caminhao, alqueire, viagem;
	printf ("Quantos alqueires a fazenda possui?");
	scanf ("%d" , &alqueire);
	printf ("Quantos caminhões estarão disponíveis? ");
	scanf ("%d", &caminhao);
	caminhao = caminhao * 18;
	alqueire = alqueire * 250;
	viagem = alqueire / caminhao;
	printf ("Serão necessárias %d viagens para cada caminhão. " , viagem);
}
