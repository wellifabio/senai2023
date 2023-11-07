#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL,"");//Configurações
	char times[5][20];
	int pontos[5];
	int i, rebaixado, pontosDoRebaixado, campeao, pontosDoCampeao;
	
	printf("Digite o nome a pontuação dos 5 times de futebol\n");
	pontosDoCampeao = 0;
	pontosDoRebaixado = 1000;
	for(i = 0; i < 5; i++){
		scanf("%s %i", &times[i], &pontos[i]);
		if(pontosDoCampeao < pontos[i]){
			pontosDoCampeao = pontos[i];
			campeao = i;
		}
		if(pontosDoRebaixado > pontos[i]){
			rebaixado = i;
			pontosDoRebaixado = pontos[i];
		} 
	}
	for(i = 0; i < 5; i++){
		printf("%s\t%d\n", times[i], pontos[i]);
	}
	printf("\nO time campeão é %s\n", times[campeao]);
	printf("O time rebaixado é %s\n", times[rebaixado]);
	return 0;
}

