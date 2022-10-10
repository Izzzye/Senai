//Crie uma função que receba um valor em Fahrenheit e retorne em Celsius.

#include <stdio.h>
#include <locale.h>

float converter(float fahrenheit);

int main (){
	setlocale(LC_ALL,"");
	float temperatura;
	
	printf("Digite a temperatura em graus Fahrenheit: ");
	scanf("%f", &temperatura);
	
	printf("\n%.1f° Celsius.", converter(temperatura));
}

float converter(float fahrenheit){
	float celsius = (fahrenheit - 32) * 5/9;
	
	return celsius;
}
