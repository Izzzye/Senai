#include <stdio.h>
#include <locale.h>

int main(){
	int cor;
	setlocale (LC_ALL, "");
	
	printf ("Digite a cor do sem�foro: \n[1 pra verde] \n[2 pra amarelo] \n[3 pra vermelho]");
	scanf ("%d", &cor);
	
	if (cor == 1){
		printf ("Voc� escolheu a cor verde pode ir.\n");
	}else if (cor == 2){
		printf ("Voc� escolheu a amarelo ent�o fique atento.\n");
	}else if (cor == 3){
		printf ("Vo� escolheu a cor vermelho ent�o pare. \n");
	}else{
		printf ("Op��o invalida.\n");
	}
	printf ("Acabou.");
}
