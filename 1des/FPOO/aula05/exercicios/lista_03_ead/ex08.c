/*O Sr. Manoel Joaquim possui uma grande loja de artigos de R$1,99, com cerca de 10 operadores de caixas.
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que contém o número
de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas
contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver
o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 ptodutos, conforme a tabela abaixo:

Lojas Quase Dois - Tabela de preços 
	1 - R$1,99
	2 _ R$3,98
	...
	50 - R$99,50
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	int i = 0, cont = 1;
	float preco = 0;
	
	printf("Lojas Quase Dois - Tabela de Preços");
	
	for(i = 0; i < 50; i++){
		preco = preco + 1.99;
		printf("\n%d - R$%.2f", cont, preco);
		cont++;
	}
}
