#include <stdio.h> //Entrada e Saída padrão
#include <locale.h> //Configurações de Localização
#include <string.h> //Strings são vetores de caracteres

int main(){
	setlocale(LC_ALL,"");//Configurações
	float nota[5];//Declaração de um vetor
	float media;
	char nome[20];
	int i; //Índice
	//Entrada
	printf("Digite o nome do aluno: ");
	scanf("%s",&nome);
	for(i = 0; i < 5; i++){
		do{
			printf("Digite a %dª nota entre 0 e 10: ", i + 1);
			scanf("%f", &nota[i]);
		}while(nota[i] < 0 || nota[i] > 10);
	}
	
	//Processamento + Saída
	for(i = 0; i < 5; i++){
		media += nota[i]; //Algoritmo de acumulação
		//Saída
		printf("Nota %d: %.1f\n", i + 1, nota[i]);
	}
	media /= 5;
	printf("%s sua média é %.1f", nome, media);

	return 0;
}
