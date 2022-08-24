/*faça um programa onde o usuário digita 15 valores e imprima na tela a soma desses valores.
*/

#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	int i, valores, soma = 0;
	
	for(i = 0; i < 15; i++){
		valores = -1;
		while(valores < 0 || valores > 32767){
			printf ("Digite %d° valor: ", i + 1);
			scanf ("%d", &valores);
		}
		soma += valores;
	}
	printf("A soma dos 15 valores digitados é %d", soma);
}
