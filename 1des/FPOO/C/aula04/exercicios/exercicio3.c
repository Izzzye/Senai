/*Desenvolva um programa que calcule desconto de INSS de um funcion�rio, 
se o sal�rio for menor ou igual a R$1212,00 reais ser� de 7,5%, 
se estiver entre R$1212,01 e R$2427,35 ser� de 9%, se estiver entre 
R$2427,36 e R$3641,03 o desconto � de 12%, se estiver entre R$3641,04 a 
R$7087,22 ser� de 14% e se for maior o teto que � o m�ximo cobrado 14% de 
R$7087,22. Mostre o desconto e o valor do sal�rio final.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	float salario, inssReal, inssPorcento, salFinal;
	
	printf ("Digite seu sal�rio: ");
	scanf ("%f", &salario);
	
	/* casting - usado para for�ar alguma conta 
	(int) - for�a a conta a ser inteira 
	(float) - for�a a conta a ser real 
	(double) - for�a a conta a ser real {com mais precis�o por ter mais bites*/
	
	if (salario < 1212.01){
		inssPorcento = 7.5 / 100;
		inssReal = salario * inssPorcento;
	}else if (salario < 2427.36){
		inssPorcento = (float) 9 / 100;
		inssReal = salario * inssPorcento;
	}else if (salario < 3641.04){
		inssPorcento = (float) 12 / 100;
		inssReal = salario * inssPorcento;
	}else if (salario < 7087.23){
		inssPorcento = (float) 14 / 100;
		inssReal = salario * inssPorcento;
	}else{
		inssPorcento =  (float) 14 / 100;
		inssReal = 7087.22 * inssPorcento;
	}
	salFinal = salario - inssReal;
	
	printf ("O desconto do INSS ser� de %.2f \n", inssReal);
	printf ("O sal�rio final ser� de R$ %.2f", salario - inssReal);
}
