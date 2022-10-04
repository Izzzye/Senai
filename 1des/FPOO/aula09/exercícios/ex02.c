/*Em alguns casos a rifa poderá ter mais de um ganhador então crie uma função que receba como parâmetro 
um vetor de 10 nomes e um total de quantos deseja sortear, e mostre na tela estes nomes sorteados.
*/

#include <stdio.h>
#include <locale.h>
#include <time.h>
#include <stdlib.h>

int sorteado(int cont);

int main (void){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	
	char nomes[20][10];
	int i, cont;
	
	for(i = 0; i <10; i++){
		printf("Digite o %d° nome: ", i + 1);
		scanf("%s", &nomes[i]);
	}
	
	printf("Digite quantos nomes serão sorteados: ");
	scanf("%d", &cont);
	
	for(i = 0; i < cont; i++){
		printf("\nO nome sorteado foi: %s.", nomes[sorteado(cont)]);
	}
		
	return 0;
}

int sorteado(int cont){
	int NumSorteado, i;
	
	for (i = 0; i <= cont; i++){
		
		NumSorteado = rand() % 10;
	}
		
	return NumSorteado;
}
