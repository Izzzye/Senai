/*Para participar dos campeonatos os competidores preenchem um formul�rio com sua data de nascimento, crie uma fun��o 
que receba o ano de nascimento e retorne a idade do competidor.
*/

#include <stdio.h>
#include <locale.h>

int calculadora (int ano);

int main (void){
	setlocale(LC_ALL,"");
	int ano;
	
	printf("Ano de nascimento do participante: ");
	scanf("%d", &ano);
	
	printf("Sua idade  � %d.", calculadora(ano));
	
}

int calculadora (int ano){
	int idade, i;
	
	idade = 2022 - ano;

	return idade;
}
