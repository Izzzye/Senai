/*Sabendo-se que a velocidade de cruzeiro de um avião 747-300 
é de 900 km/h, faça um programa que leia uma distância (km), 
calcule e apresente na tela, quanto tempo (horas) será necessário 
para um 747-300 sobrevoar a distância informada.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	float distancia, tempo;
	printf ("Insira a distância que o avião irá percorrer:");
	scanf ("%f", &distancia);
	tempo = distancia / 900;
	printf ("O avião demorará %.1f horas para chegar ao destino." , tempo);
}

