#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");

	// Programa que leia duas notas e encontre a média
	// o programa deve perguntar ao usuário se deseja continuar
	
	int continuar = 1;
	float media;
	//||= ou
	while (continuar == 1){
		int nota01 = -1, nota02 = -1;
		while (nota01 < 0 || nota01 > 100){
			printf ("Digite a primeira nota (entre 0 e 100):" );
			scanf ("%d", &nota01);
		}		
	
		while (nota02 < 0 || nota02 > 100){
			printf ("Digite a segunda nota (entre 0 e 100):" );
			scanf ("%d", &nota02);
		}
	
		media = (float) (nota01 + nota02) / 2;
		printf ("A média é %.1f\n", media);
		
		printf ("Deseja continuar?\n [1. Sim] [2.Não]\n");
		scanf ("%d", &continuar);
	}
}
