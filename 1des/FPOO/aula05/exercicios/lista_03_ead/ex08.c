/*O Sr. Manoel Joaquim possui uma grande loja de artigos de R$1,99, com cerca de 10 operadores de caixas.
Para agilizar o c�lculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que cont�m o n�mero
de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas
contar quantos itens o cliente est� levando e olhar na tabela de pre�os. Voc� foi contratado para desenvolver
o programa que monta esta tabela de pre�os, que conter� os pre�os de 1 at� 50 ptodutos, conforme a tabela abaixo:

Lojas Quase Dois - Tabela de pre�os 
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
	
	printf("Lojas Quase Dois - Tabela de Pre�os");
	
	for(i = 0; i < 50; i++){
		preco = preco + 1.99;
		printf("\n%d - R$%.2f", cont, preco);
		cont++;
	}
}
