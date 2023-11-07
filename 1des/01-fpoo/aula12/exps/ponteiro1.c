#include <stdio.h>
int main(){
	char nome[] = "Marcelo"; //Vetor com 7 bytes
	char *ponteiro = nome; //Ponteiro com 1 byte que aponta para o vetor nome
	printf("%s\n", nome);
	printf("%c\n", ponteiro[0]);
	return 0;
}
