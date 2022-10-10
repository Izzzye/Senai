/* O Sr. Joaquim acaba de adquirir uma panificadora e pretende implantar a matodologia da tabelinha, que já é
um sucesso na loja de R$1,99. Você fo contratado para desenvolver o programa que monta a tabela de preços de pães
a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:

	Preço do pão: R$0.18
	Panificadora Pão de Ontem - Tabela de Preços
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
	
	printf("insira o Preço do pão: ");
	scanf("%f", &preco);
	system("cls");
	
	printf("Preço do Pão: R$%.2f \nPanificadora Pão de Ontem - Tabela de Preços\n", preco);
	
	for ( i = 1; i <= 50; i++){
		printf("\n%d - R$%.2f", i, i*preco);
	}
	
}
