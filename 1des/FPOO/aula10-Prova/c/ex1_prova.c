#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
	setlocale(LC_ALL,"");
	int idade, dias, sexo;
	
	printf("Campanha de doação de sangue.\n");
	
	printf("\nDigite sua idade: ");
	scanf("%d", &idade);
	
	printf("\nDigite seu Sexo Biológico.\n1 para Feminino ou 2 para Masculino: ");
		scanf("%d", &sexo);	
	
	if(idade < 16){
		printf("\nVocê é muito novo para doar sangue.");
		exit(0);
	}else if(idade > 69){
		printf("\nVocê está inapto para doar sangue por sua idade avançada.");
		exit(0);
	}else{
		printf("\nDigite o número de dias desde sua última doação: ");
		scanf("%d", &dias);
	}
		
	if(sexo == 1){
		if(dias < 90){
			printf("\nVocê está inapta para doar sangue.");
		}else if(dias >= 90){
		printf("\nVocê está apta para doar sangue.");
		}
	}else if(sexo == 2){
		if(dias < 60){
			printf("\nVocê está inapto para doar sangue.");
		}else if(dias >= 60){
		printf("\nVocê está apto para doar sangue.");
		}	
	}
		
}
