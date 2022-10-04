#include <stdio.h>
#include <locale.h>

int main (){
	setlocale(LC_ALL,"");
	int ladoA[8], ladoB[8], ladoC[8], i;
	
	for(i = 0; i < 8; i++){
		printf("Digite os 3 lados do triângulo: ");
		scanf("%d", &ladoA[i]);
		scanf("%d", &ladoB[i]);
		scanf("%d", &ladoC[i]);
	}
	
	for(i = 0; i < 8; i++){
		if(ladoA[i] == ladoB[i] == ladoC[i]){
			printf("\nEquilátero");
		}else if(ladoA[i] != ladoB[i] != ladoC[i]){
			printf("\nEscaleno");
		}else{
			printf("\nIsóseles");
		}
	}
} 
