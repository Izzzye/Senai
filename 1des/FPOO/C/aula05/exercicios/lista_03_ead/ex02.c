/*Fa�a um programa que pergunte quanto voc� ganha por hora e o n�mero
de horas trabalhadas no m�s. Calcule e mostre o total do seu sal�rio no
referido m�s, sabendo-se que s�o descontaos 11% para o Imposto de Renda,
8% para o INSS e 5% para o sindicato, fa�a um programa que nos d�:
salario bruto
quanto pagou de IR
quanto pagou de INSS
quanto pagou de sindicato
sal�rio liquido
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "");
	float ValorHora, horas, salbruto, salliquido, IR, INSS, sindicato, descontos;
	
	printf("Insira quanto voc� ganha por hora: ");
	scanf("%f", &ValorHora);
	printf("Insira quantas horas foram trabalhadas esse m�s: ");
	scanf("%f", &horas);
	
	salbruto = ValorHora * horas;
	IR = salbruto / 100.0 * 11.0;
	INSS = salbruto / 100.0 * 8.0;
	sindicato = salbruto / 100.0 * 5.0;
	descontos = IR + INSS + sindicato;
	salliquido = salbruto - descontos;
	
	printf("\nSal�rio Bruto: R$%.2f.\nImposto De Renda: R$%.2f.\nINSS: R$%.2f.\nSindicato: R$%.2f.\nSal�rio Liquido: R$%.2f. ", salbruto, IR, INSS, sindicato, salliquido);
	
}
