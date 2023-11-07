#include <stdio.h>

//Variáveis Globais
FILE *entrada, *saida;
char in[] = "portas.in";
char out[] = "portas.out";
int i, j;

void solucao(int total){
	int portas[total];
	//Iniciei as portas
	for(i = 0; i < total; i++)
		portas[i] = 1;	
	//Alterar os status das portas
	for(i = 2; i <= total; i++)
		for(j = i; j <= total; j+=i)
			if(portas[j-1]) portas[j-1] = 0;
			else portas[j-1] = 1;
	//Gravar a saída no arquivo
	for(i = 0; i < total; i++){
		if(portas[i])
			fprintf(saida,"%d ",i + 1);
	}
	fprintf(saida,"\n");
	printf("%d\n",total);
}

int main(){
	entrada = fopen(in, "r");
	if(entrada == NULL){
		printf("Erro ao ler arquivo");
	}else{
		int total;
		saida = fopen(out,"w");
		do{
			fscanf(entrada, "%d",&total);
			solucao(total);
		}while(total != 0);
		fclose(saida);
	}
	fclose(entrada);
	return 0;
}
