/*Desenvolva um programa que leia o raio (cm) e a altura (cm) de 
um cilindro. Calcule e mostre a ·rea (cm2) e o volume (cm3) do 
cilindro.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	float raio, altura, cm2, cm3, pi;
	printf ("Insira o raio:");
	scanf ("%f" , &raio);
	printf ("insira a altura:");
	scanf ("%f" , &altura);
	pi = 3,14;
	cm2 = ( 2 * pi * raio * altura) + 2 * ( pi * ( raio* raio));
	cm3 = pi * (raio * raio) * altura;
	printf ("\n¡rea do cilindro em cm2: %.2f " , cm2);
	printf ("\nVolume do cilindro em cm3: %.2f " , cm3);
}
