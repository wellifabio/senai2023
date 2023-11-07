#include <stdio.h>
#include <locale.h>
#define SIZE 10
int pilha[SIZE];
int ponteiro = 0;
int i;
void mostraPilha(){
	printf("Pilha:\n");
	for(i = 0; i < ponteiro; i++)
		printf("%d\n", pilha[i]);
}
int push(int dado){
	if(ponteiro < SIZE){
		pilha[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}
int pop(){
	if(ponteiro > 0){
		ponteiro--;
		return 1;
	}else
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
			mostraPilha();
		}else if(op == 2){
			pop();
			mostraPilha();
		}	
	}while(op != 0);
	printf("Obrigado por utilizar nosso programa.");
}
