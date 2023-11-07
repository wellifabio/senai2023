#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	int dias, i;
	float sis, dia, mediaSis, mediaDia;
	char continuar[3] = "sim", atleta[30];
	
	while(strcmp(continuar,"sim") == 0){
		printf("Digite o nome do atleta/cliente:");
		scanf("%s",&atleta);
		printf("Digite quantos dias foi realizada a medida:");
		scanf("%d",&dias);
		for(i = 0; i < dias; i++){
			printf("Digite os resultados SIS. e DIA. separados por espaço:");
			scanf("%f %f", &sis, &dia);
			mediaSis += sis;
			mediaDia += dia;
		}
		mediaSis /= dias;
		mediaDia /= dias;
		printf("As médias de pressão arteria Sis. %.2f e Dia. %.2f\n",mediaSis,mediaDia);
		printf("Continuar sim/não:");
		scanf("%s",&continuar);	
	}
	return 0;
}
