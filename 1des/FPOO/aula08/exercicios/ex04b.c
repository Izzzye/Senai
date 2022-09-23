#include <stdio.h>
#include <locale.h>

int comparador (int valor1, int valor2);
int comparador2 (int valor1, int valor2);

int main (void){
	setlocale(LC_ALL,"");
	int valor1, valor2;
	
		printf("Digite o 1° valor: ");
		scanf("%d", &valor1);
		
		printf("Digite o 2° valor: ");
		scanf("%d", &valor2);
	
		
	if(valor1 == valor2){
		printf("\nOs valores são iguais.");
	}else{
		printf("\nO menor valor é %d e o maior é %d.", comparador(valor1, valor2), comparador2(valor1, valor2));
	}
	
	return 0;
}

int comparador(int valor1, int valor2){
	int menor;
	
	if (valor1 < valor2){
		menor = valor1;
	}else{
		menor = valor2;
	}
		
	return menor;
}

int comparador2 (int valor1, int valor2){
	int maior;

if (valor1 < valor2){
		maior = valor2;
	}else{
		maior = valor1;
	}
	
	return maior;
}
