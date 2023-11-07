#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#define SIZE 10

int i;

//Estrutura de PILHA
int pilha[SIZE];
int pontPilha = 0;


void mostraPilha(){
	printf("Pilha:\n");
	for(i = 0; i < pontPilha; i++)
		printf("%d\n", pilha[i]);
}

int pushPilha(int dado){
	if(pontPilha < SIZE){
		pilha[pontPilha] = dado;
		pontPilha++;
		return 1;
	} 
	else return 0;
}

int popPilha(){
	if(pontPilha > 0){
		pontPilha--;
		return 1;
	}else
		return 0;
}

//Estrutura de FILA
int fila[SIZE];
int pontFila = 0;

void mostraFila(){
	printf("Fila:\n");
	for(i = 0; i < pontFila; i++)
		printf("%d ", fila[i]);
	printf("\n");
}
int pushFila(int dado){
	if(pontFila < SIZE){
		fila[pontFila] = dado;
		pontFila++;
		return 1;
	} 
	else return 0;
}

int popFila(){
	if(pontFila > 0){
		pontFila--;
		for(i = 0; i < pontFila; i++){
			fila[i] = fila[i+1];
		}
		return 1;
	}else
		return 0;
}

//Estrutura de Lista
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

int pushLista(int dado){
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
		printf("1. Add Pilha\n2. Del Pilha\n3. Add Fila\n4. Del Fila\n5. Add Lista\n6. Del Lista\n0. Sair\n");
		printf("Escolha uma das opções do menu: ");
		scanf("%d", &op);
		switch(op){
			case 0:
				printf("Obrigado por utilizar nosso programa.");
				break;
			case 1:
				printf("Digite um número inteiro: ");
				scanf("%d", &x);
				pushPilha(x);
				mostraPilha();
				break;
			case 2:
				popPilha();
				mostraPilha();
				break;
			case 3:
				printf("Digite um número inteiro: ");
				scanf("%d", &x);
				pushFila(x);
				mostraFila();
				break;
			case 4: 
				popFila();
				mostraFila();
				break;
			case 5:
				printf("Digite um número inteiro: ");
				scanf("%d", &x);
				pushLista(x);
				mostraLista();
				break;
			case 6: 
				printf("Digite o índice do valor a ser excluído: ");
				scanf("%d", &x);
				slice(x);
				mostraLista();
				break;
			default:
				printf("Opção inválida\n");
		}
	}while(op != 0);
}
