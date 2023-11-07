#include <stdio.h>
#include <locale.h>
//Solução onde o usuário escolhe quantos dias
int main(){
	//Configurações e declaração de variáveis
	setlocale(LC_ALL, "");
	char nome[30];
	float sis, dia; //Leitura das medidas de pressão
	float mediaSis = 0, mediaDia = 0; //Acumuladores iniciados com Zero
	int i, dias, continuar; //Contador e total de dias
	do{
		//Entradas
		printf("Digite o nome do atleta/cliente: ");
		scanf("%s",&nome);
		printf("Digite quantos dias foram feitas medidas de pressão: ");
		scanf("%d",&dias);
		printf("Digite as %d medidas de pressão sistólica e diastólica:\n", dias);
		printf("Sys. Dia.\n");
		for(i = 0; i < dias; i++){
			scanf("%f %f", &sis, &dia);
			mediaSis += sis; //Acumulação
			mediaDia += dia; //Acumulação
		}
		//Processamento
		mediaSis /= dias;
		mediaDia /= dias;
		//Saída
		printf("A média de pressão do(a) atleta %s\n", nome);
		printf("Sis: %.2f\tDia: %.2f\n", mediaSis, mediaDia);
		//Pergunta se deseja continuar ou encerrar
		printf("Digite 1 para continuar ou 0 para sair");
		scanf("%d",&continuar);
	}while(continuar);
    return 0;
}
