//Crie uma fun��o que receba um n�mero decimal e imprima sua representa��o em bin�rio.

#include<stdio.h>
#include<locale.h>

void conversor(int n); //Assinatura da fun��o

int main(){
	setlocale(LC_ALL,"");
	int num;
	
	printf("Digite o n�mero inteiro que ser� convertido em binario: ");
	scanf("%d",&num);
	
	printf("O n�mero %d em bin�rio � ",num);
	conversor(num);
}

//Fun��o que converte um n�mero inteiro em bin�rio
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
