/*Crie um programa que calculcule a m�dia de 3 notas do aluno
e informe sua situa��o: 
	(nota maior ou igual a 6: aprovado)
	(nota inferior a 6 e maior  ou igual a 4: recupera��o)
*/

#include <stdio.h>
#include <locale.h>

int main (){
	setlocale (LC_ALL, "");
	int n1, n2,n3;
	float media;
	
	printf ("Digite as tr�s notas do aluno: ");
	scanf ("%d", &n1);
	scanf ("%d", &n2);
	scanf ("%d", &n3);
	
	media = (n1 + n2 + n3) / 3;
	
	if (media >= 6){
		printf ("Sua m�dia � %.1f voc� foi aprovado.", media);
	}else if (media >= 4){
		printf ("Sua m�dia � %.1f voc� est� em recupera��o.", media);
	}else{
		printf ("Sua m�dia � %.1f voc� foi reporvado.", media);
	}
}
