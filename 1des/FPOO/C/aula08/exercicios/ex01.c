//Crie uma função que receba um número decimal e imprima sua representação em binário.

#include<stdio.h>
#include<locale.h>

void conversor(int n); //Assinatura da função

int main(){
	setlocale(LC_ALL,"");
	int num;
	
	printf("Digite o número inteiro que será convertido em binario: ");
	scanf("%d",&num);
	
	printf("O número %d em binário é ",num);
	conversor(num);
}

//Função que converte um número inteiro em binário
void conversor(int n){
	int v[50];
	int i = 0, j;
	
	if(n == 0) printf("0");
	
	while(n > 0){
		v[i] = n % 2;
		i++;
		n = n / 2;
	}
	
	for(j = i -1; j >= 0; j--)
		printf("%d",v[j]);
}
