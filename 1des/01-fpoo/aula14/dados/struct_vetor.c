#include <stdio.h>
#include <string.h>

struct Pessoa{
	char nome[40];
	int idade;
	char telefone[15];
};

int main(){
	struct Pessoa p[3];
	int i;
	
	strcpy(p[0].nome,"Juliana Silva");
	p[0].idade = 23;
	strcpy(p[0].telefone,"19-98789-8778");
	
	strcpy(p[1].nome,"Marcos Almenda");
	p[1].idade = 32;
	strcpy(p[1].telefone,"19-98000-8014");
	
	strcpy(p[2].nome, "Mariana Lima");
	p[2].idade = 18;
	strcpy(p[2].telefone,"19-99999-7878");
	
	for(i = 0; i < 3; i++)
		printf("%s %d %s\n",p[i].nome, p[i].idade,p[i].telefone);
	return 0;
}
