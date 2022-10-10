/*Faça um programa que pergunte quanto você ganha por hora e o número
de horas trabalhadas no mês. Calcule e mostre o total do seu salário no
referido mês, sabendo-se que são descontaos 11% para o Imposto de Renda,
8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
salario bruto
quanto pagou de IR
quanto pagou de INSS
quanto pagou de sindicato
salário liquido
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "");
	float ValorHora, horas, salbruto, salliquido, IR, INSS, sindicato, descontos;
	
	printf("Insira quanto você ganha por hora: ");
	scanf("%f", &ValorHora);
	printf("Insira quantas horas foram trabalhadas esse mês: ");
	scanf("%f", &horas);
	
	salbruto = ValorHora * horas;
	IR = salbruto / 100.0 * 11.0;
	INSS = salbruto / 100.0 * 8.0;
	sindicato = salbruto / 100.0 * 5.0;
	descontos = IR + INSS + sindicato;
	salliquido = salbruto - descontos;
	
	printf("\nSalário Bruto: R$%.2f.\nImposto De Renda: R$%.2f.\nINSS: R$%.2f.\nSindicato: R$%.2f.\nSalário Liquido: R$%.2f. ", salbruto, IR, INSS, sindicato, salliquido);
	
}
