#include <stdio.h>
#include <locale.h>

int main(){
	//Configura��es e Vari�veis
	setlocale(LC_ALL,"");
	char cor[10], result[30];
	
	//Entradas
	printf("Digite a cor do sem�foro: ");
	scanf("%s",&cor);
	
	//Processamento
	if(strcmp(cor,"verde") == 0){
		sprintf(result,"pode ir");
	}else if(strcmp(cor,"amarelo") == 0){
		sprintf(result,"aten��o");
	}else if(strcmp(cor,"vermelho")== 0){
		sprintf(result,"espere");
	}else{
		sprintf(result,"cor inv�lida para sem�foro");
	}
	
	//Sa�das
	printf("Voc� digitou a cor %s \n",cor);
	printf("Por isso %s \n",result);
}
