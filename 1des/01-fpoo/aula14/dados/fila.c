#include <stdio.h>
#define SIZE 10
int fila[SIZE];
int ponteiro = 0;
int i;
void mostraFila(){
	printf("Fila:\n");
	for(i = 0; i < ponteiro; i++)
		printf("%d ", fila[i]);
	printf("\n");
}
int push(int dado){
	if(ponteiro < SIZE){
		fila[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}
int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		for(i = 0; i < ponteiro; i++){
			fila[i] = fila[i+1];
		}
		return 1;
	}else
		return 0;
}
int main(){
	push(25);
	mostraFila();
	push(18);
	mostraFila();
	push(10);
	mostraFila();
	pop();
	mostraFila();
	pop();
	mostraFila();
}
