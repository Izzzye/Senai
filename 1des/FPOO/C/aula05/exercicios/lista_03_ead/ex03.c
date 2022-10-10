/*Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em mentros quadrados
da área a ser pintada. Considere que a cobertura da tinta é 1 litro para cada 6 metros quadrados e 
que a tinta é vendida em latas de 18 litros, que custam R$80,00 ou em galões de 3,6 litros, que 
custam R$25,00. Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços
em 2 situações: 
comprar apenas latas de 18 litros;
comprar apenas galões de 3,6 litros.
*/

#include <stdio.h>
#include <locale.h>
#include <math.h>

int main (){
	setlocale(LC_ALL, "");
	float area, tinta, lata, galao, precol, precog, a, b;
	
	printf("Informe o tamanho em m² da área a ser pintada: ");
	scanf("%f", &area);
		
	tinta = area / 6.0;
	
	lata = tinta / 18.0;
	precol = lata * 80.0;
	
	galao = tinta / 3.6;
	precog = galao * 25.0;
	
	
	
	printf ("\nÉ necessário %.2f litros de tinta para pintar a área de %.0fm²\n", tinta, area);
	printf ("Comprando apenas latas de 18L serão necessárias %.0f.Com valor de R$%.2f.\n", ceil(lata), precol);
	printf ("Comprando apenas galões de 3,6L serão necessárias %.0f. Com valor de R$%.2f.\n", ceil(galao), precog);
}
