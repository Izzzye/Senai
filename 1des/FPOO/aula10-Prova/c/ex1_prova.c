#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
	setlocale(LC_ALL,"");
	int idade, dias, sexo;
	
	printf("Campanha de doa��o de sangue.\n");
	
	printf("\nDigite sua idade: ");
	scanf("%d", &idade);
	
	printf("\nDigite seu Sexo Biol�gico.\n1 para Feminino ou 2 para Masculino: ");
		scanf("%d", &sexo);	
	
	if(idade < 16){
		printf("\nVoc� � muito novo para doar sangue.");
		exit(0);
	}else if(idade > 69){
		printf("\nVoc� est� inapto para doar sangue por sua idade avan�ada.");
		exit(0);
	}else{
		printf("\nDigite o n�mero de dias desde sua �ltima doa��o: ");
		scanf("%d", &dias);
	}
		
	if(sexo == 1){
		if(dias < 90){
			printf("\nVoc� est� inapta para doar sangue.");
		}else if(dias >= 90){
		printf("\nVoc� est� apta para doar sangue.");
		}
	}else if(sexo == 2){
		if(dias < 60){
			printf("\nVoc� est� inapto para doar sangue.");
		}else if(dias >= 60){
		printf("\nVoc� est� apto para doar sangue.");
		}	
	}
		
}
