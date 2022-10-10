//Crie uma função que receba um valor em Celsius e retorne em Fahrenheit.

#include <stdio.h>
#include <locale.h>

void converter(float celsius);

int main (){
	setlocale(LC_ALL,"");
	float temperatura;
	
	printf("Digite a temperatura em graus celsius: ");
	scanf("%f", &temperatura);

	converter(temperatura);	
}

void converter(float celsius){
	float fahrenheit = (celsius * 9/5) + 32;
	
	printf("\n%.1f° Fahrenheit", fahrenheit);
}
