/*Jo�o Papo-De-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento
di�rio de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo
regulamento de pesca do estado de S�o Paulo (50 kilos) deve pagar uma multa de R$4,00 por quilo
excedente. Jo�o precisa que voc� fa�a um programa que leia  a vari�vel peso (peso de peixes) e calcule
o excesso. Gravar na vari�vel excesso a quantidade de quilos al�m do limite e na vari�vel multa o valor
da multa que Jo�o dever� pagar. Imprima na tela os dados do programa com as mensgens adequadas.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	float peso, excesso, multa, pesolimite = 50;
	
	printf("Ol� Jo�o Papo-De-Pescador :)\nInsira aqui o peso total de peixes pescados no dia de hoje: ");
	scanf("%f", &peso);
	
	if (peso > pesolimite){
		excesso = peso - pesolimite;
		multa = excesso * 4.00;
		printf("Segundo regulamento de pesca de S�o Paulo, voc� excedeu o limite de peso de pesca em %.1f Kilos.\nSer� necess�rio pagar R$%.2f de multa.", excesso, multa);
	}else{
		printf("A quantidade pescada � igual ou inferior a 50 Kilos.\nN�o � necess�rio pagar multa.");
	}
	
}
