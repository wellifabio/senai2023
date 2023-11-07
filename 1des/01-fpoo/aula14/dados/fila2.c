#include <stdio.h>
#define SIZE 10
int fila[SIZE];
int inicio = 0;
int fim = 0;
int i;
void mostraFila(){
    printf("Fila:\n");
    for(i = inicio; i < fim; i++)
        printf("%d ", fila[i]);
    printf("\n");
}
int push(int dado){
    if(fim < SIZE){
        fila[fim] = dado;
        fim++;
        return 1;
    } 
    else return 0;
}
int pop(){
    if(inicio < fim){
        inicio++;
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
