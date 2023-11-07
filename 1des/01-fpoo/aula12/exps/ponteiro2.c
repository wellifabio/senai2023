#include <stdio.h>
int main(){
	//Vetor com 3 elementos
	int x[3]; //Declaração
	x[0] = 7; //Atribuição
	x[1] = 3; //Atribuição
	x[2] = 2; //Atribuição
	printf("%d %d %d\n", x[0], x[1], x[2]);
	
	//Vetor com 5 elementos, declarando e atribuindo
	int y[] = { 7, 3, 2, 0, 8};
	printf("%d %d %d %d %d\n", y[0], y[1], y[2], y[3], y[4]);
	
	//Queremos um 3º vetor "p" igual ao vetor "y"
	int *p = y; //Utilizamos um ponteiro
	printf("%d %d %d %d %d\n", p[0], p[1], p[2], p[3], p[4]);
	
	//O ponteiro "p" não possui 5 elemetos, ele apenas aponta para o vetor "y"
	y[2] = 100; //Alteramos o terceiro elemento do vetor "y" para 100
	printf("%d %d %d %d %d\n", p[0], p[1], p[2], p[3], p[4]);
	//Não modificamos o ponteiro "p", porém como ele aponta para "y"
	//Então ele também aparece modificado
	return 0;
}
