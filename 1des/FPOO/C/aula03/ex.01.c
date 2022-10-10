/*
Desenvolva um programa que leia três variáveis 
(a, b, c) e resolva a expressão: ( a + b ) / c.
*/
#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int a,b,c,d;
	
	//entrada do programa
	printf("Digite um valor para a: ");
	scanf("%d",&a);
	printf("Digite um valor para b: ");
	scanf("%d",&b);
	printf("Digite um valor para c:");
	scanf("%d",&c);
	
	//processamento
	d = (a + b) / c;
	
	//saida do programa
	printf("esse o resultado: %d" ,d);
}
