#include <stdio.h>
#include <stdlib.h>
int main(){
	char *p;
	p = (char*) malloc(sizeof(5));
	p[0] = 'W';
	p[1] = 'e';
	p[2] = 'l';
	p[3] = 'l';
	p[4] = 'i';
	printf("%s\n",p);
	char nome[] = "Maria";
	printf("%s\n",nome);
	p = nome;
	printf("%s\n",p);
	nome[0] = 'B';
	printf("%s\n",p);
	free(p);
	printf("%s\n",p);
	p[0] = 'W';
	p[1] = 'e';
	p[2] = 'l';
	p[3] = 'l';
	p[4] = 'i';
	printf("%s\n",p);
	return 0;
}
