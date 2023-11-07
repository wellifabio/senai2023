#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL,"");
	char cidade[50];
	int total;
	
	printf("Digite o nome da cidade: ");
	gets(cidade);
	printf("Digite o total de candidatos: ");
	scanf("%d",&total);
	
	char candidatos[total][20];
	int votos[total];
	float porcentagens[total];
	int i, brancos, nulos, auxiliar;
	float totalValidos = 0;
	float totalBrancos = 0;
	int primeiro, totalPrimeiro = 0;
	int segundo, totalSegundo = 0;
	
	printf("Candidato Votos:\n");
	for(i = 0; i < total; i++){
		scanf("%s %d", &candidatos[i], &votos[i]);
		totalValidos += votos[i];
		if(totalPrimeiro < votos[i]){
			primeiro = i;
			totalPrimeiro = votos[i];
		}
	}
	
	printf("Total de votos Brancos: ");
	scanf("%d", &brancos);
	totalValidos += brancos;
	printf("Total de votos Nulos: ");
	scanf("%d", &nulos);
	
	if(totalValidos > nulos){
		printf("\nEleição Válida\n");
		printf("Votos válidos: %.0f\n",totalValidos);
		printf("Votos inválidos: %d\n",nulos);
		
		printf("Candidato\tPorcentagem:\n");
		for(i = 0; i < total; i++){
			porcentagens[i] = votos[i] / totalValidos * 100.0;
			printf("%s\t%.1f%%\n", candidatos[i], porcentagens[i]);
		}
		totalBrancos = brancos / totalValidos * 100.0;
		printf("Brancos\t%.1f%%\n", totalBrancos);
		printf("Candidato mais votado %s com %d votos\n", candidatos[primeiro],votos[primeiro]);
		auxiliar = votos[primeiro];
		votos[primeiro] = 0;
		for(i = 0; i < total; i++){
			if(totalSegundo < votos[i]){
				segundo = i;
				totalSegundo = votos[i];
			}
		}
		votos[primeiro] = auxiliar;
		printf("Segundo mais votado %s com %d votos\n", candidatos[segundo],votos[segundo]);
		if(totalValidos + nulos < 200000){
			printf("%s eleito em primeiro turno com %d votos\n", candidatos[primeiro],votos[primeiro]);	
		}else{
			if(votos[primeiro] >= (totalValidos/2+1))
				printf("%s eleito em primeiro turno com %d votos\n", candidatos[primeiro],votos[primeiro]);
			else
				printf("Haverá segundo turno entre %s e %s\n", candidatos[primeiro],candidatos[segundo]);
		}
	}else{
		printf("Eleição Inválida");
	}
	return 0;
}
