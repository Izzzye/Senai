/*As Organiza��es Tabajara resolveram dar um aumento de sal�rio aos seus colaboradores
e lhe contrataram para desenvolver o programa que calcular� os reajsutes. Fa�a um 
programa que recebe o sal�rio de um colaborador e o reajuste segundo o seguinte crit�rio,
baseado no sal�rio atual:
sal�rios at� 280: aumento de 20%
entre 280 e 700: aumento de 15%
entre 700 e 1500: aumento de 10%
entre 1500 adiante: aumento de 5%

Ap�s o aumento ser realizado, informe na tela:
o sal�rio antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo sal�rio, ap�s o aumento.
*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale (LC_ALL, "");
	float salario, percentual, aumento, novosalario;
	
	printf("Digite o sal�rio: ");
	scanf("%f", &salario);
	
	if (salario <= 280.0){
		percentual = 20.0;
		aumento = salario / 100.0 * 20.0;
		novosalario = salario + aumento;
	}else if (salario > 280 && salario <= 700){
		percentual = 15.0;
		aumento = salario / 100.0 * 15.0;
		novosalario = salario + aumento;
	}else if (salario > 700 && salario <= 1500){
		percentual = 10.0;
		aumento = salario / 100.0 * 10.0;
		novosalario = salario + aumento;
	}else{
		percentual = 5.0;
		aumento = salario / 100.0 * 5.0;
		novosalario = salario + aumento;
	}
	
	printf("\nSal�rio: %.2f", salario);
	printf("\nPercentual de aumento aplicado: %.0f%%", percentual);
	printf("\nValor de aumento: %.2f", aumento);
	printf("\nNovo sal�rio: %.2f", novosalario);
}
