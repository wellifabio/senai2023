#include<stdio.h>
#include<string.h>
#include<locale.h>

FILE *entrada;
char arqEntrada[] = "entrada.csv";

struct Pessoa {
	int id;
	char nome[50];
	char nascimento[11];
	int idade;
};

int contLinhas(){
	int cont = 0;
	char linha[100];
	entrada = fopen(arqEntrada,"r");
	if(entrada == NULL)
		printf("Erro ao ler arquivo.");
	else{
		fgets(linha, 100, entrada);
		while(fgets(linha, 100, entrada)!= NULL)
			cont++;
	}		
	fclose(entrada);
	return cont;
}

struct Pessoa getPessoa(char *linha){
	struct Pessoa p;
	p.id = atoi(strtok(linha,";"));
	strcpy(p.nome,strtok(NULL,";"));
	strcpy(p.nascimento,strtok(NULL,";"));
	return p;
}

int main(){
	printf("O arquivo possui %d linhas\n", contLinhas());
	//Criando um vetor da estrutura Pessoas
	struct Pessoa p[contLinhas()];
	
	//Lendo o arquivo de entrada e separando os dados na Estrutura
	char linha[100];
	int cont = 0, i;
	entrada = fopen(arqEntrada,"r");
	if(entrada == NULL)
		printf("Erro ao ler arquivo.");
	else{
		fgets(linha, 100, entrada);
		while(fgets(linha, 100, entrada)!= NULL){
			p[cont] = getPessoa(linha);
			cont++;
		}
	}
	
	//Mostrando a estrutura na tela
	for(i = 0; i < cont; i++)
		printf("%d %s %s", p[i].id, p[i].nome, p[i].nascimento);
	fclose(entrada);
	return 0;
}
