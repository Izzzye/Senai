/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas
são:
	- "Telefonou para a vítima?"
	- "Esteve no local do crime?"
	- "Mora perto da vítima?"
	- "Devia para a vítima?"
	- "Já trabalhou para vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa
no crime. Se a pessoa responder positivamente a 2 questões ela deve ser considerada
"Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assasssino". Caso contrário, ele
será classificado como "inocente".
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	int resposta[5];
	int i = 0, soma = 0, cont = 0;
	
	printf("Responda com [0] para Não e [1] para Sim.\n");

		printf("\nTelefonou para a vítima?");
		scanf("%d", &resposta[0]);
	
		printf("Esteve no local do crime?");
		scanf("%d", &resposta[1]);
	
		printf("Mora perto da vítima?");
		scanf("%d", &resposta[2]);
	
		printf("Devia para a vítima?");
		scanf("%d", &resposta[3]);
	
		printf("Já trabalhou para vítima?");
		scanf("%d", &resposta[4]);
	
	
	soma = resposta[0] + resposta[1] + resposta[2] + resposta[3] + resposta[4];
	
	if(soma == 2){
		printf("Você é suspeito.");
	}else if (soma == 3 || soma == 4){
		printf("Você é cumplice.");
	}else if (soma == 5){
		printf("Você é assassino.");
	}else{
		printf("Você é inocente.");
	}
}
