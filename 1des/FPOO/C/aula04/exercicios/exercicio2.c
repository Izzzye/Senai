/*Desenvolva um programa que leia o sal�rio de um funcio�rio e o n�mero de 
filhos. Se o sal�rio for menor que 2000 o funcion�rio receber� um sal�rio
fam�lia equivalente a 45 reais por filho. Apresente o sal�rio final.*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	float salario, salFamilia = 0;
	int filhos;
	
	printf ("Digite seu sal�rio:");
	scanf ("%f", &salario);
	printf ("Quantos filhos voc� tem?:");
	scanf ("%d", &filhos);
	
	if(salario < 1655.98){
		salFamilia = 56.47 * filhos;
	}
		printf ("O seu sal�rio � R$ %.2f \n", salario);
		printf ("O sal�rio fam�lia � R$ %.2f \n", salFamilia);
		printf ("O sal�rio final � R$ %.2f \n", salario + salFamilia);
}
