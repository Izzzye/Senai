/*Desenvolva um progarma que leia 6 n�meros inteiros e exiba
na tela final, o maior n�mero que foi digitado pelo usu�rio.
*/

#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "");
	int a, b, c, d, e, f;
	
	printf ("Digite seis n�meros inteiros separados por espa�o: ");
	scanf ("%d" , &a);
	scanf ("%d" , &b);
	scanf ("%d" , &c);
	scanf ("%d" , &d);
	scanf ("%d" , &e);
	scanf ("%d" , &f);
	
	if (a > b && a > c && a > d && a > e && a > f){
		printf ("O maior n�mero � %d.", a);
	}else if (b > a && b > c && b > d && b > e && b > f){
		printf ("O maior n�mero � %d.", b);
	}else if (c > a && c > b && c > d && c > e && c > f){
		printf ("O maior n�mero � %d.", c);
	}else if (d > a && d > b && d > c && d > e && d > f){
		printf ("O maior n�mero � %d.", d);
	}else if (e > a && e > b && e > c && e > d && e > f){
		printf ("O maior n�mero � %d.", e);
	}else if (f > a && f > b && f > c && f > d && f > e){
		printf ("O maior n�mero � %d.", f);
	}
}
