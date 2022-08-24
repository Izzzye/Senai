/*faça um programa onde o usuário digita 15 valores e imprima na tela a soma desses valores.
*/

#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	int a = -1, b = -1, c = -1, d = -1, e = -1, f = -1, g = -1, h = -1, i = -1, j = -1, k = -1, l = -1, m = -1, n = -1, o = -1, soma = 0;
	
	printf ("insira um valor para a variável A:");
	scanf ("%d", &a);
	printf ("insira um valor para a variável B:");
	scanf ("%d", &b);
	printf ("insira um valor para a variável C:");
	scanf ("%d", &c);
	printf ("insira um valor para a variável D:");
	scanf ("%d", &d);
	printf ("insira um valor para a variável E:");
	scanf ("%d", &e);
	printf ("insira um valor para a variável F:");
	scanf ("%d", &f);
	printf ("insira um valor para a variável G:");
	scanf ("%d", &g);
	printf ("insira um valor para a variável H:");
	scanf ("%d", &h);
	printf ("insira um valor para a variável I:");
	scanf ("%d", &i);
	printf ("insira um valor para a variável J:");
	scanf ("%d", &j);
	printf ("insira um valor para a variável K:");
	scanf ("%d", &k);
	printf ("insira um valor para a variável L:");
	scanf ("%d", &l);
	printf ("insira um valor para a variável M:");
	scanf ("%d", &m);
	printf ("insira um valor para a variável N:");
	scanf ("%d", &n);
	printf ("insira um valor para a variável O:");
	scanf ("%d", &o);
	
	soma = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o;
	
	printf ("%d", soma);
}

