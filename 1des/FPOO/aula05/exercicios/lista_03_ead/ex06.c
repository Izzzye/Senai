/*Fa�a um programa para um caixa eletr�nico. O programa dever� perguntar ao usu�rio
do valor do saque e depois informar quantas notas de cada valor ser�o fornecidas.
As notas dspon�veis ser�o as de 1, 5, 10, 50 e 100 reais. O valor m�nimo � de 10
reais e o m�ximo de 600 reais. O programa n�o deve se preocupar com a quantidade 
de notas ecistentes na m�quina.
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale (LC_ALL,"");
	int saque = - 1, nota100 = 0, nota50 = 0, nota10 = 0, nota5 = 0, nota1 = 0;
	
	while (saque > 10 || saque < 600){
		printf ("Insira o valor do saque: ");
		scanf ("%d", &saque);
	}
	
	while (saque >= 100){
		nota100++;
		saque = saque - 100;
	}
		while (saque >= 50){
		nota50++;
		saque = saque - 50;
	}
		while (saque >= 10){
		nota10++;
		saque = saque - 10;
	}
		while (saque >= 5){
		nota5++;
		saque = saque - 5;
	}
		while (saque >= 1){
		nota1++;
		saque = saque - 1;
	}
	
	printf("Seu saque � %f.", saque);
	printf("%f notas de 100 reais.");
	printf("%f notas de 50 reais.");
	printf("%f notas de 10 reais.");
	printf("%f notas de 5 reais.");
	printf("%f notas de 1 real.");
	
}
