/*Fa�a um programa que fa�a 5 perguntas para uma pessoa sobre um crime. As perguntas
s�o:
	- "Telefonou para a v�tima?"
	- "Esteve no local do crime?"
	- "Mora perto da v�tima?"
	- "Devia para a v�tima?"
	- "J� trabalhou para v�tima?"
O programa deve no final emitir uma classifica��o sobre a participa��o da pessoa
no crime. Se a pessoa responder positivamente a 2 quest�es ela deve ser considerada
"Suspeita", entre 3 e 4 como "C�mplice" e 5 como "Assasssino". Caso contr�rio, ele
ser� classificado como "inocente".
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	int resposta[5];
	int i = 0, soma = 0, cont = 0;
	
	printf("Responda com [0] para N�o e [1] para Sim.\n");

		printf("\nTelefonou para a v�tima?");
		scanf("%d", &resposta[0]);
	
		printf("Esteve no local do crime?");
		scanf("%d", &resposta[1]);
	
		printf("Mora perto da v�tima?");
		scanf("%d", &resposta[2]);
	
		printf("Devia para a v�tima?");
		scanf("%d", &resposta[3]);
	
		printf("J� trabalhou para v�tima?");
		scanf("%d", &resposta[4]);
	
	
	soma = resposta[0] + resposta[1] + resposta[2] + resposta[3] + resposta[4];
	
	if(soma == 2){
		printf("Voc� � suspeito.");
	}else if (soma == 3 || soma == 4){
		printf("Voc� � cumplice.");
	}else if (soma == 5){
		printf("Voc� � assassino.");
	}else{
		printf("Voc� � inocente.");
	}
}
