#include <stdio.h>
/* Entrada -> Processamento -> Saída*/
int main(){
	char x; //Declaração de variável
	int quadrado;
	//Entrada
	printf("Digite uma letra:");
	scanf("%c",&x);
	//Processamento
	quadrado = x * x;
	//Saída
	printf("O quadrado do código ASCII digitado é %d",quadrado);
}
