#include <stdio.h>
#include <locale.h>

int main(){
	char cor[10], resultado[10];
	setlocale (LC_ALL, "");
	
	printf ("Digite a cor do semáforo: \n[1 pra verde] \n[2 pra amarelo] \n[3 pra vermelho]");
	scanf ("%s", &cor);
	
	if (cor == 1){
		printf ("Voê escolheu a cor pode ir.");
	}
	printf ("Acabou.");
}
