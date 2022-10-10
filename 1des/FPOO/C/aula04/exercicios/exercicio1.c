/*desenvolva um programa que leia o preço de um produto
e se o preço for maior que 1000 reais aplique um desconto 
de 8%. mostre o preço final do produto.*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	char nome;
	float preco, desconto, NovoPreco;
	
	printf ("Digite o nome do produto:");
	scanf ("%s", &nome);
	printf ("Digite o preço do produto:");
	scanf ("%f", &preco);
	
	if( preco > 1000){
		desconto = preco * 8 / 100;
		NovoPreco = preco - desconto;
		printf ("Seu novo preço é: %.2f", NovoPreco);
	}else{
		printf ("O preço do produto é: %.2f", preco);
	}
}
