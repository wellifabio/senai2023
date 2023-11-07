#include <stdio.h>
int main(){
	FILE *arquivo;
	char linha[80];
	arquivo = fopen("dados.txt","r");
	if(arquivo == NULL){
		printf("Erro ao ler arquivo");
	}else{
		//Contrar quantos elementos tem no arquivo
		fgets(linha,80,arquivo);
		int cont = 1;
		strtok(linha," ");
		while(strtok(NULL," ")!=NULL) cont++;
		fclose(arquivo);
		printf("Total de elementos: %d\n", cont);
		
		//Agora acumular os valores do arquivo
		arquivo = fopen("dados.txt","r");
		fgets(linha,80,arquivo);
		int i, soma = 0;
		soma += atoi(strtok(linha," "));
		for(i = 1; i < cont; i++)
			soma += atoi(strtok(NULL," "));
		printf("Soma de elementos: %d", soma);
	}
	fclose(arquivo);
}
