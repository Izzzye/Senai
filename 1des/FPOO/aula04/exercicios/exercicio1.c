/*desenvolva um programa que leia o pre�o de um produto
e se o pre�o for maior que 1000 reais aplique um desconto 
de 8%. mostre o pre�o final do produto.*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	char nome;
	float preco, desconto, NovoPreco;
	
	printf ("Digite o nome do produto:");
	scanf ("%s", &nome);
	printf ("Digite o pre�o do produto:");
	scanf ("%f", &preco);
	
	if( preco > 1000){
		desconto = preco * 8 / 100;
		NovoPreco = preco - desconto;
		printf ("Seu novo pre�o �: %.2f", NovoPreco);
	}else{
		printf ("O pre�o do produto �: %.2f", preco);
	}
}
