/*Ana Maria organiza campeonatos de diversos esportes, como futebol, basquete, entre outros, crie uma função que receba 
40 nomes de times e quantos times cada grupo deve ter, a função deve mostrar na tela os times separados em grupos porém 
sorteados aleatóriamente.
*/

#include<stdio.h>
#include<locale.h>
#include<time.h>

void sorteio(char nomes[40][20], int quantos);

int main(){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	
	char nomes[40][20];
	int i, quantos;
	
	printf("Digite os nomes dos 40 times:\n");
	for(i = 0; i < 40; i++){
		scanf("%s",&nomes[i]);
	}
	
	printf("\nDigite quantos integrantes cadas grupo deve ter: ");
	scanf("%d",&quantos);
	sorteio(nomes, quantos);
}

//Sortear sem duplicados
void sorteio(char nomes[40][20], int quantos){
	int i = 0, j, n[40];
	int encontrado, grupo = 1, elementos = 0;
	
	//Preenche um vetor com números aleatórios não repetidos de tamanho 40
	do{
		n[i] = rand() % 40;
		
		if(i == 0) i++;
		else{
			encontrado = 0;
			for(j = 0; j < i; j++){
				if(n[i] == n[j])
					encontrado = 1;
			}
			if(!encontrado) i++;
		}
	}while(i < 40);
	
	printf("\nOs times sorteados foram:");
	for(i = 0; i < 40; i++){
		if(elementos == i) {
			printf("\nGrupo %d\n",grupo);
			elementos += quantos;
			grupo++;
		}
		printf("%s\n",nomes[n[i]]);
	}
}
