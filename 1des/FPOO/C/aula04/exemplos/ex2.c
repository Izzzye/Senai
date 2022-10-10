#include <stdio.h>
#include <locale.h>

int main(){
	int cor;
	setlocale (LC_ALL, "");
	
	printf ("Digite a cor do semáforo: \n[1 pra verde] \n[2 pra amarelo] \n[3 pra vermelho]");
	scanf ("%d", &cor);
	
	if (cor == 1){
		printf ("Você escolheu a cor verde pode ir.\n");
	}else if (cor == 2){
		printf ("Você escolheu a amarelo então fique atento.\n");
	}else if (cor == 3){
		printf ("Voê escolheu a cor vermelho então pare. \n");
	}else{
		printf ("Opção invalida.\n");
	}
	printf ("Acabou.");
}
