/*
Desenvolva um programa que leia a velocidade de um carro (km/h) e a 
dist�ncia a ser percorrida (km) por ele. Calcule e apresente na tela, 
quanto tempo (horas) ser� necess�rio para o carro percorrer a dist�ncia informada.
*/
/*nenhuma vari�vel come�a com n�mero na frente 
 a vari�vel tem que estar igual em todo o programa e n�o pode ter espa�os
 */
 
#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,""); //configura o programa para aceitar acentos
	float km, kmH, T;
	// entrada
	printf ("Digite a velocidade m�dia de um carro em kil�metros por hora:");
	scanf ("%f", &kmH);
    printf ("Digite a dist�ncia percorrida em Km: ");
    scanf ("%f", &km);
    // processamento
	T = km / kmH;
    // saida
	printf ("O tempo necess�rio para percorrer a dist�ncia � de: %.1f Horas", T);
	// %.1f = 1 casa decimal  %.2f = 2 casas decimais 
}

