/*Desenvolva um programa que leia os valores de tr�s lados de um tri�ngulo
(a,b,c) e se os tr�s lados forem diferentes escreva ESCALENO, se os tr�s lados
forem iguais EQUIL�TERO e se apenas dois lados forem iguais escreva IS�SELES.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale (LC_ALL, "");
	float a, b, c;
	
	// != n�o igual - diferente
	
	printf("Digite o comprimento do primeiro lado do tri�ngulo:" );
	scanf ("%f", &a);
	printf("Digite o comprimento do segundo lado do tri�ngulo:" );
	scanf ("%f", &b);
	printf("Digite o comprimento do terceiro lado do tri�ngulo:" );
	scanf ("%f", &c);
	
	if ( a == b && b == c){
		printf ("O tri�mgulo � equil�tero." );
	}else if ( a != b && b != c && a != c){
		printf ("O tri�ngulo � escaleno." );
	}else{
		printf ("O tri�ngulo � is�celes." );
	}
}
