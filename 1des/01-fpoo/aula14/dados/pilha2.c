#include <stdio.h>
#define SIZE 10
int pilha[SIZE];
int ponteiro = 0;
int i;
void mostraPilha(){
	for(i = ponteiro; i >= 0; i--)
		printf("%d\n", pilha[i]);
	printf("Pilha:\n");
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
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}else
		return 0;
}
int main(){
	push(10);
	push(8);
	push(7);
	push(3);
	mostraPilha();
	push(1);
	mostraPilha();
	pop();
	mostraPilha();
	pop();
	mostraPilha();
}
