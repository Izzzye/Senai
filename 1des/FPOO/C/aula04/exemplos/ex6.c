#include <stdio.h>
#include <locale.h>

int main(){
	//Configura��es e Vari�veis
	setlocale(LC_ALL,"");
	int cor, alcool;
	//Entrada
	printf("Digite a cor do sem�foro \n[1.verde   ]\n[2.amarelo ]\n[3.vermelho]\n");
	scanf("%d",&cor);
	printf("Voc� ingeriu bebida alco�lica? \n[1.Sim]\n[2.n�o]\n");
	scanf("%d",&alcool);
	//Processamento e Sa�da
	printf("Fim.");
}
