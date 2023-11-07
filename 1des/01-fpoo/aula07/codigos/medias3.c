#include <stdio.h>
#include <locale.h>

int main(){
	//Configurações e declaração de variáveis
	setlocale(LC_ALL, "");
	char nome[30];
	float sis, dia; //Leitura das medidas de pressão
	float mediaSis = 0, mediaDia = 0; //Acumuladores iniciados com Zero
	int i; //Contador
	//Entradas
	printf("Digite o nome do atleta/cliente: ");
	scanf("%s",&nome);
	printf("Digite 5 as medidas de pressão sistólica e diastólica:\n");
	printf("Sys. Dia.\n");
	for(i = 0; i < 5; i++){
		scanf("%f %f", &sis, &dia);
		mediaSis += sis; //Acumulação
		mediaDia += dia; //Acumulação
	}
	//Processamento
	mediaSis /= 5;
	mediaDia /= 5;
	//Saída
	printf("A média de pressão do(a) atleta %s\n", nome);
	printf("Sis: %.2f\tDia: %.2f\n", mediaSis, mediaDia);
    return 0;
}
