#include <stdio.h>
int main(){
	//Declaração de variáveis
	int a, b, c, x;
	//Etrada
	printf("Digite três números inteiro separados por espaços:");
	scanf("%d %d %d",&a, &b, &c);
	//Processamento
	x = ( a + b ) / c;
	//Saída
	printf("a = %d\nb = %d\nc = %d\n", a, b, c);
	printf("O resultado da expressão (a + b) / c = %d",x);
	return 0;
}
