/*Ana Maria, precisa de dinheiro e decidiu fazer uma rifa de sua bicicleta. Para ajudar Ana maria crie uma função 
que receba como parâmetro um vetor de 10 nomes e sorteie um aleatóriamente.
*/

#include <stdio.h>
#include <locale.h>
#include <time.h>
#include <stdlib.h>

int sorteado();

int main (void){
	setlocale(LC_ALL,"");
	
	char nomes[50][10];
	int i;
	
	for(i = 0; i <10; i++){
		printf("Digite o %d° nome: ", i + 1);
		scanf("%s", &nomes[i]);
	}
	
	printf("\nO nome sorteado foi: %s.", nomes[sorteado()]);

	return 0;
}

int sorteado(){
	srand(time(NULL));
	int NumSorteado = rand() % 10;	
	return NumSorteado;
}
