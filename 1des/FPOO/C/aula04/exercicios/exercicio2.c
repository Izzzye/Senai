/*Desenvolva um programa que leia o salário de um funcioário e o número de 
filhos. Se o salário for menor que 2000 o funcionário receberá um salário
família equivalente a 45 reais por filho. Apresente o salário final.*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	float salario, salFamilia = 0;
	int filhos;
	
	printf ("Digite seu salário:");
	scanf ("%f", &salario);
	printf ("Quantos filhos você tem?:");
	scanf ("%d", &filhos);
	
	if(salario < 1655.98){
		salFamilia = 56.47 * filhos;
	}
		printf ("O seu salário é R$ %.2f \n", salario);
		printf ("O salário família é R$ %.2f \n", salFamilia);
		printf ("O salário final é R$ %.2f \n", salario + salFamilia);
}
