//Crie uma função que receba um valor em Celsius e retorne em Fahrenheit.

#include <stdio.h>
#include <locale.h>

float converter(float celsius);

int main (){
	setlocale(LC_ALL,"");
	float temperatura;
	
	printf("Digite a temperatura em graus celsius: ");
	scanf("%f", &temperatura);
	
	printf("\n%.1f° Fahrenheit", converter(temperatura));
}

float converter(float celsius){
	float fahrenheit = (celsius * 9/5) + 32;
	
	return fahrenheit;
}
