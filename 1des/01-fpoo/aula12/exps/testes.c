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

//Função de ordenação crescente (Algoritmo booble sort)
int sort(int *vetor, int n){
	int i, j, aux;
	for(i = 0; i < n - 1; i++)
		for(j = i + 1; j < n; j++)
			if(vetor[i] > vetor[j]){
				aux = vetor[i];
				vetor[i] = vetor[j];
				vetor[j] = aux;
			}
}

//Função principal
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
		printf("Valor não encontrado\n");
	else
		printf("O valor foi encontrado na posição %d\n", resultado);
	sort(range, n);
	mostrar(range, n);
	return 0;
}

