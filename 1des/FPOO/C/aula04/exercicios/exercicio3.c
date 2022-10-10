/*Desenvolva um programa que calcule desconto de INSS de um funcionário, 
se o salário for menor ou igual a R$1212,00 reais será de 7,5%, 
se estiver entre R$1212,01 e R$2427,35 será de 9%, se estiver entre 
R$2427,36 e R$3641,03 o desconto é de 12%, se estiver entre R$3641,04 a 
R$7087,22 será de 14% e se for maior o teto que é o máximo cobrado 14% de 
R$7087,22. Mostre o desconto e o valor do salário final.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	float salario, inssReal, inssPorcento, salFinal;
	
	printf ("Digite seu salário: ");
	scanf ("%f", &salario);
	
	/* casting - usado para forçar alguma conta 
	(int) - força a conta a ser inteira 
	(float) - força a conta a ser real 
	(double) - força a conta a ser real {com mais precisão por ter mais bites*/
	
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
	
	printf ("O desconto do INSS será de %.2f \n", inssReal);
	printf ("O salário final será de R$ %.2f", salario - inssReal);
}
