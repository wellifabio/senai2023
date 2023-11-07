#include <stdio.h>

struct Pessoa{
	char nome[40];
	int idade;
	char telefone[15];
};

int main(){
	struct Pessoa p1 = {"Juliana Silva", 23, "19-98789-8778"};
	struct Pessoa p2 = {"Marcos Almenda", 32, "19-98000-8014"};
	struct Pessoa p3 = {"Mariana Lima", 18, "19-99999-7878"};
	int i;
	printf("%s %d %s\n",p1.nome, p1.idade,p1.telefone);
	printf("%s %d %s\n",p2.nome, p2.idade,p2.telefone);
	printf("%s %d %s\n",p3.nome, p3.idade,p3.telefone);
	return 0;
}
