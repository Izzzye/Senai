/*Sabendo-se que a velocidade de cruzeiro de um avi�o 747-300 
� de 900 km/h, fa�a um programa que leia uma dist�ncia (km), 
calcule e apresente na tela, quanto tempo (horas) ser� necess�rio 
para um 747-300 sobrevoar a dist�ncia informada.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	float distancia, tempo;
	printf ("Insira a dist�ncia que o avi�o ir� percorrer:");
	scanf ("%f", &distancia);
	tempo = distancia / 900;
	printf ("O avi�o demorar� %.1f horas para chegar ao destino." , tempo);
}

