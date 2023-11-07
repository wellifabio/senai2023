#include <stdio.h>
#include <locale.h>
//Função que retorna a soma de dois parâmetros inteiros
int soma(int a, int b){
	return a + b;
}

//Função que retorna a média de dois parâmetros inteiros
int media(int a, int b){
	return (a + b) / 2;
}

//Exemplo de um procedimento que escreve uma frase 100 vezes
void procedimentoBart(){
	int i;
	for(i = 0; i < 100; i++)
		printf("Não vou atormentar a Lisa\n");
}

//Procedimento que escreve uma frase qualquer N vezes
void frases(char *frase, int n){
	int i;
	for(i = 0; i < n; i++)
		printf("%s\n", frase);
}

//Função que calcula a média de 3 notas
float media3(float a, float b, float c){
	return (a + b + c) / 3;
}

//Função que calcula a média de N notas
float mediaN(float notas[], int n){
	float total = 0;
	int i;
	for(i = 0; i < n; i++)
		total += notas[i];
	return total / n;
}

int main(){
	setlocale(LC_ALL,"");
	float notas[] = {10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5};
	int bytes = sizeof(notas);
	int elementos = bytes / sizeof(notas[0]);
	printf("Tamanho do vetor em bytes = %d\n", bytes);
	printf("Quantidade de elementos do vetor = %d\n", elementos);
	printf("%.1f", mediaN(notas, elementos));
	return 0;
}
