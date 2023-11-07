#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "");
	int dias, i, fim = 1;
	float sis, dia, mediaSis, mediaDia;
	char atleta[30];
	
	while(fim){
		mediaSis = 0, mediaDia = 0;
		printf("Digite o nome do cliente/atleta: ");
		scanf("%s", &atleta);
		printf("Digite quantos dias o atleta mediu a pressão: ");
		scanf("%d", &dias);
		for(i = 0; i < dias; i++){
			printf("Digite as medidas Sis.: e Dia.: separadas por espaço:\n");
			scanf("%f %f", &sis, &dia);
			mediaSis += sis;
			mediaDia += dia;
		}
		mediaSis /= dias;
		mediaDia /= dias;
		printf("A média sistólica = %.2f e diastólica = %.2f\n", mediaSis, mediaDia);
		printf("Digite 1 para continuar ou 0 para terminar.");
		scanf("%d",&fim);
	}
	
    printf("Obrigado por utilizar nosso programa.");
    return 0;
}
