# Aula12 - Funções
## O que são funções?
Trechos de código reutilizáveis
- Procedimentos: quando não há retorno **void** vazio.
- Funções: quando há algum retorno

## O que já estudamos
- Lógica de programação:
	- variáveis, constantes e seus tipos primitivos
	- processamento, operadores(aritimético + - * / e lógico == > < !=)
	- Entrada e Saída scanf() printf()
	- Decisão if(lógico) switch(lógico) case
	- Laços de repetição while(lógico) for(lógico)
	- Vetores [] variáveis (listas de variáveis)
	- Matrizes
### Exemplos
```c
#include <stdio.h>
#include <locale.h>
//Função que retorna a soma de dois par�metros inteiros
int soma(int a, int b){
	return a + b;
}

//Função que retorna a média de dois par�metros inteiros
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
```
```c
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

//Função principal do programa
int main(){
	setlocale(LC_ALL,"");
	printf("A soma de 123 + 44 = %d\n", soma(123,44));
	printf("A média das notas 100 e 75 é %d\n", media(100,75));
	frases("Palmeiras não tem mundial", 3);
	float notas[] = { 100, 80, 30, 100, 45 };
	float media = mediaN(notas, 5);
	printf("5 notas {100, 80, 30, 100, 45} Média:%.1f\n",media);
	procedimentoBart();
	return 0;
}
```
## Ponteiros
Variável que aponta para o primeiro elemento de um vetor:
```c
#include <stdio.h>
int main(){
	char nome[] = "Marcelo"; //Vetor com 7 bytes
	char *ponteiro = nome; //Ponteiro com 1 byte que aponta para o vetor nome
	printf("%s\n", nome);
	printf("%c\n", ponteiro[0]);
	return 0;
}
```

```c
#include <stdio.h>

//Procedimento que recebe um vetor e um indice e grava 0 na posição indicada
void zeraElemento(int *ponteiro, int indice){
	ponteiro[indice] = 0;		
}

//Procedimento para mostrar o conteúdo de um vetor
void mostraVetor(int *ponteiro, int n){
	int i;
	for(i = 0; i < n; i++)
		printf("%d[%02d]\n", i, ponteiro[i]);
}

int main(){
	int numeros[] = {10, 8, 7, 3, 40, 80, 50, 30};
	zeraElemento(numeros, 0);
	mostraVetor(numeros, 8);
	return 0;
}
```

## Atividades:
- 1 Crie uma função de Busca, que receba como parâmetros um vetor, a quantidade n de elementos do vetor, e um valor a ser procurado. Deve retornar -1 se não for encontrado e se for encontrado a posição do valor no vetor.

```c
#include <stdio.h>
#include <locale.h>
//Procedimento que mostra todos os elementos de um vetor
void mostrar(int vetor[], int n){
	int i;
	printf("Índice\tConteúdo\n");
	for(i = 0; i < n; i++)
		printf("%d\t[%003d]\n", i, vetor[i]);	
}

//Função de busca
int buscar(int *vetor, int n, int valor){
	int i, posicao = -1;
	for(i = 0; i < n; i++){
		if(valor == vetor[i]){
			posicao = i;
			break;
		}
	}
	return posicao;
}

int main(){
	setlocale(LC_ALL,"");
	int range[] = { 16, 15, 24, 32, -1, -8, 15, 0, 84, 78 };
	int n = sizeof(range) / sizeof(range[0]);
	mostrar(range, n);
	int valor;
	printf("Digite o valor a ser buscado: ");
	scanf("%d", &valor);
	int resultado = buscar(range, n, valor);
	if(resultado == -1)
		printf("Valor não encontrado");
	else
		printf("O valor foi encontrado na posição %d", resultado);
	return 0;
}
```
- 2 Crie outra função neste mesmo programa que organize o vetor em ordem crescente.