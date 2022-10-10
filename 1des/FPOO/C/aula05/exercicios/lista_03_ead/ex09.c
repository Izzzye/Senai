/* O Sr. Joaquim acaba de adquirir uma panificadora e pretende implantar a matodologia da tabelinha, que j� �
um sucesso na loja de R$1,99. Voc� fo contratado para desenvolver o programa que monta a tabela de pre�os de p�es
a partir do pre�o do p�o informado pelo usu�rio, conforme o exemplo abaixo:

	Pre�o do p�o: R$0.18
	Panificadora P�o de Ontem - Tabela de Pre�os
		1 - R$0.18
		2 - R$ 0.36
		...
		50 - R$9,00*/
		
#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	int i = 0, cont = 1;
	float preco = 0;
	
	printf("insira o Pre�o do p�o: ");
	scanf("%f", &preco);
	system("cls");
	
	printf("Pre�o do P�o: R$%.2f \nPanificadora P�o de Ontem - Tabela de Pre�os\n", preco);
	
	for ( i = 1; i <= 50; i++){
		printf("\n%d - R$%.2f", i, i*preco);
	}
	
}
