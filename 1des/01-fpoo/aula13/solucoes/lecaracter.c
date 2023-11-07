#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	FILE *arquivo;
	char c;
	
	arquivo = fopen("arquivo.txt", "r");
	if(arquivo == NULL)
		printf("Erro, não foi possivel abrir o arquivo\n");
	else{
		while((c=fgetc(arquivo)) != EOF)
  			putchar(c);
	}
	fclose(arquivo);
	return 0;
}
