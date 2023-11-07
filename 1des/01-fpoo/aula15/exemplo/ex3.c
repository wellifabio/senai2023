#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

struct Lista{
    int dado;
    struct Lista *prox;
};

struct Lista *inicio = NULL;
struct Lista *fim = NULL;
struct Lista *aux = NULL;

void mostraLista(){
    aux = inicio;
    printf("Lista:\n");
    while(aux != NULL){
        printf("%d\n", aux->dado);
        aux = aux->prox;
    }
}

int push(int dado){
    aux = (struct Lista*) malloc(sizeof(struct Lista));
    if(aux == NULL) return 0;
    aux->dado = dado;
    aux->prox = NULL;
    if(inicio == NULL){
        inicio = aux;
        fim = aux;
    }else{
        fim->prox = aux;
        fim = aux;
    }
    return 1;
}

int slice(int index){
    int i;
    aux = inicio;
    if(index == 0){
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else{
        for(i = 0; i < index-1; i++){
            aux = aux->prox;
        }
        struct Lista *aux2 = aux->prox;
        aux->prox = aux2->prox;
        free(aux2);
        return 1;
    }
    return 0;
}

int main(){
	setlocale(LC_ALL,"");
	int op = 0;
	int x;
	do{
		printf("1. Adicionar\n2. Remover\n0. Sair\nEscolha uma opção: ");
		scanf("%d", &op);
		if(op == 1){
			printf("Digite um número inteiro: ");
			scanf("%d", &x);
			push(x);
			mostraLista();
		}else if(op == 2){
			printf("Digite o índice do valor a ser excluído: ");
			scanf("%d", &x);
			slice(x);
			mostraLista();
		}	
	}while(op != 0);
	printf("Obrigado por utilizar nosso programa.");
}
