#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <string.h>

#define LINHA 120

FILE *pedidosIn, *pedidosOut;
char arquivo1[] = "pedidos.csv";
char arquivo2[] = "relatorio.csv";
char linha[LINHA];
int i;

typedef struct Pedido{
	char cidade[50];
	char data[11];
	char produto[50];
	float preco;
	int quantidade;
};

int contRegistros(char *nomeArquivo){
	int cont = -1;
	pedidosIn = fopen(nomeArquivo,"r");
	while(fgets(linha,LINHA,pedidosIn)!=NULL) cont++;
	fclose(pedidosIn);
	return cont;
}

void preencheEstrutura(struct Pedido *p, int total){
	pedidosIn = fopen(arquivo1,"r");
	fgets(linha,LINHA,pedidosIn); //Lê o cabeçalho
	for(i = 0; i < total; i++){
		fgets(linha,LINHA,pedidosIn);
		strcpy(p[i].cidade,strtok(linha,";"));
		strcpy(p[i].data,strtok(NULL,";"));
		strcpy(p[i].produto,strtok(NULL,";"));
		p[i].preco = atof(strtok(NULL,";"));
		p[i].quantidade = atoi(strtok(NULL,";"));
	}
	fclose(pedidosIn);
}

void calcularEMostrar(struct Pedido *p, int total){
	printf("Cidade\tData\tProduto\tPreço\tQuantidade\n");
	for(i = 0; i < total; i++){
		float subtotal =  p[i].preco * p[i].quantidade;
		printf("%s\t%s\t%s\t%.2f\t%d\t%.2f\n",p[i].cidade, p[i].data, p[i].produto, p[i].preco, p[i].quantidade, subtotal);
	}
}

int main(){
	setlocale(LC_ALL,"");
	int cont = contRegistros(arquivo1);
	struct Pedido pedidos[cont];
	preencheEstrutura(pedidos, cont);
	calcularEMostrar(pedidos, cont);
	return 0;
}
