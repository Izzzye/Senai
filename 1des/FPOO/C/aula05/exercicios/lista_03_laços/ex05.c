/*fa�a um programa que imprima na tela todos os n�meros pares  um 
intervalo formado pelo usu�rio.
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int n, val1 = -1, val2 = -1;
	
		while(val1 < 0 || val1 > 32767){
			printf("Digite um n�mero: ");
			scanf("%d", &val1);
		}
		while(val2 < 0 || val2 > 32767){
			printf("Digite outro n�mero: ");
			scanf("%d", &val2);
		}

	if (val2<val1){
		n = val1;
		val1 = val2;
		val2 = n;
	}
	
		for (n = val1; n <= val2; n++){
			if (n % 2 == 0){
			printf ("%d\n", n);	
			}
		}
}	
	
