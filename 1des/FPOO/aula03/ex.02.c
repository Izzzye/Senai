/*
Desenvolva um programa que leia a velocidade de um carro (km/h) e a 
distância a ser percorrida (km) por ele. Calcule e apresente na tela, 
quanto tempo (horas) será necessário para o carro percorrer a distância informada.
*/
/*nenhuma variável começa com número na frente 
 a variável tem que estar igual em todo o programa e não pode ter espaços
 */
 
#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,""); //configura o programa para aceitar acentos
	float km, kmH, T;
	// entrada
	printf ("Digite a velocidade média de um carro em kilômetros por hora:");
	scanf ("%f", &kmH);
    printf ("Digite a distância percorrida em Km: ");
    scanf ("%f", &km);
    // processamento
	T = km / kmH;
    // saida
	printf ("O tempo necessário para percorrer a distância é de: %.1f Horas", T);
	// %.1f = 1 casa decimal  %.2f = 2 casas decimais 
}

