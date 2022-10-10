/*Desenvolva um programa que leia um número ”n” inteiro, 
positivo e diferente de zero e apresente na tela: n – 1, 
e também n + 1.*/

#include <stdio.h>
#include <locale.h>
int main (){
	setlocale(LC_ALL,"");
	int n;
	printf ("Digite o valor de n: ");
	scanf ("%d" ,&n);
	printf ("\nO valor de n-1: %d" , n-1);
	printf ("\no valor de n+1: %d" , n+1);
}
