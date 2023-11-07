#include <stdio.h>
#include <locale.h>

//Exemplo de função
char *frase1(){
	return "Bom dia!";
}

//Exemplo de procedimento
void frase2(){
	printf("Bom dia!");
}

//Esta é a função principal do programa
int main(){
	printf("%s\n", frase1());
	frase2();
	return 0;
}
