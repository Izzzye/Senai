#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	
	int idade[7], i, j;
	char nome[20][7];
	
	for(i = 0; i < 7; i++){
		printf("Digite o %d nome e sua idade: ", i + 1);
		scanf("%s", &nome[i]);
		scanf("%d", &idade[i]);
	}
	
	printf("\n");
	
	for(i = 0; i < 7; i++){
		if(idade[i] < 12){
			printf("%s - Criança\n", nome[i]);
		}else if(idade[i] >= 12 && idade[i] <= 17){
			printf("%s - Jovem\n", nome[i]);
		}else if(idade[i] >= 18 && idade[i] <= 30){
			printf("%s - Adulto\n", nome[i]);
		}else if(idade[i] >= 31 && idade[i] <= 65){
			printf("%s - Meia idade\n", nome[i]);
		}else if(idade[i] > 65){
			printf("%s - Idoso\n", nome[i]);
		}
	}
}
