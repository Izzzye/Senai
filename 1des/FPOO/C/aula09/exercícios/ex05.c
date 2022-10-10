 /*Ana maria precisa de mais precis�o no c�lculo da idade, ent�o crie uma fun��o que receba dia, m�s e ano de 
nascimento e retorne a idade do competidor.
*/

#include<stdio.h>
#include<locale.h>
#include<windows.h>

int idade(int dia, int mes, int ano);

int main(){
	setlocale(LC_ALL,"");
	int dia, mes, ano;
	
	printf("Digite data que voc� nasceu:");
	scanf("%d/%d/%d",&dia,&mes,&ano);
	
	printf("Voc� tem %d anos",idade(dia,mes,ano));

}

int idade(int dia, int mes, int ano){
	SYSTEMTIME hoje; //Tipo de variavel para datas
	GetLocalTime(&hoje); //Obtem a data de hoje
	int anoAtual = hoje.wYear;//Pega apenas o ano
	int mesAtual = hoje.wMonth;//Pega apenas o ano
	int diaAtual = hoje.wDay;//Pega apenas o ano
	int idade = anoAtual - ano;
	
	if(mes > mesAtual)
		idade--;
	else if(mes == mesAtual && dia > diaAtual)
		idade--;
		
	return idade;
}
