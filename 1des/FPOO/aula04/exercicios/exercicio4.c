/*Desenvolva um programa que leia os valores de três lados de um triângulo
(a,b,c) e se os três lados forem diferentes escreva ESCALENO, se os três lados
forem iguais EQUILÁTERO e se apenas dois lados forem iguais escreva ISÓSELES.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale (LC_ALL, "");
	float a, b, c;
	
	// != não igual - diferente
	
	printf("Digite o comprimento do primeiro lado do triângulo:" );
	scanf ("%f", &a);
	printf("Digite o comprimento do segundo lado do triângulo:" );
	scanf ("%f", &b);
	printf("Digite o comprimento do terceiro lado do triângulo:" );
	scanf ("%f", &c);
	
	if ( a == b && b == c){
		printf ("O triâmgulo é equilátero." );
	}else if ( a != b && b != c && a != c){
		printf ("O triângulo é escaleno." );
	}else{
		printf ("O triângulo é isóceles." );
	}
}
