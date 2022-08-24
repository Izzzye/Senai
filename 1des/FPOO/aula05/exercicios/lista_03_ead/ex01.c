/*João Papo-De-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento
diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo
regulamento de pesca do estado de São Paulo (50 kilos) deve pagar uma multa de R$4,00 por quilo
excedente. João precisa que você faça um programa que leia  a variável peso (peso de peixes) e calcule
o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor
da multa que João deverá pagar. Imprima na tela os dados do programa com as mensgens adequadas.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	float peso, excesso, multa, pesolimite = 50;
	
	printf("Olá João Papo-De-Pescador :)\nInsira aqui o peso total de peixes pescados no dia de hoje: ");
	scanf("%f", &peso);
	
	if (peso > pesolimite){
		excesso = peso - pesolimite;
		multa = excesso * 4.00;
		printf("Segundo regulamento de pesca de São Paulo, você excedeu o limite de peso de pesca em %.1f Kilos.\nSerá necessário pagar R$%.2f de multa.", excesso, multa);
	}else{
		printf("A quantidade pescada é igual ou inferior a 50 Kilos.\nNão é necessário pagar multa.");
	}
	
}
