#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL,"");
	char nome[20];//Vetor de caracteres 'Ab5&#;' 256 ASCII
	float montante[5], comissao[5], valorTotal = 0, comissaoTotal = 0;
	int i;//Contador para laços for()
	
	//Entradas
	printf("Nome do vendedor: ");
	gets(nome);
	printf("Digite os montantes das últimas 5 vendas:");
	scanf("%f %f %f %f %f", &montante[0], &montante[1], &montante[2], &montante[3], &montante[4]);
	
	//Processamento
	for(i = 0; i < 5; i++){
		if(montante[i] > 4000){
			comissao[i] = montante[i] * 0.06;
		} else {
			comissao[i] = montante[i] * 0.05;
		}
		valorTotal +=  montante[i]; //Algoritmo de acumulação
		comissaoTotal += comissao[i]; //Algoritmo de acumulação
	}

	//Saída
	printf("Funcionário %s\n",nome);
	printf("Vendas\tComissões\n");
	for(i = 0; i < 5; i++){
		printf("%.2f\t%.2f\n",montante[i], comissao[i]);
	}
	printf("%.2f\t%.2f\n",valorTotal, comissaoTotal);
	return 0;
}
