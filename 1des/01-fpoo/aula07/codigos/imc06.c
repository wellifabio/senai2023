#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	//Cabeçalho
	setlocale(LC_ALL,"");
	printf("Calculadora de IMC(Índice de Massa Corpórea)\n\n");
	//Delcaração de variáveis
	char nome[40], sobrenome[20], continuar[3];
	float peso, altura, imc;

	do{
		//Entrada
		printf("Digite o primeiro nome e apenas um sobrenome do paciente: ");
		scanf("%s %s", &nome, &sobrenome);
		printf("Digite seu peso em kg e altura em metros utilzando vírgula como decimal e separado por espaços: ");
		scanf("%f %f", &peso, &altura);
		//Processamento
		imc = peso / (altura * altura);
		//Concatenando o nome com um espaço e o sobrenome
		strcat(nome," ");
		strcat(nome,sobrenome);
		//Saída e mais processamento condicional
		printf("%s imc = %.2f\n", nome, imc);
		if(imc < 18.5) printf("Abaixo do peso normal.\n");
		else if(imc < 25) printf("Peso normal\n");
		else if(imc < 30) printf("Acima do peso normal.\n");
		else if(imc < 35) printf("Obesidade classe I.\n");
		else if(imc < 40) printf("Obesidade classe II.\n");
		else printf("Obesidade classe III.\n");
		//Finalização
		printf("\nDigite sim para continuar ou não para sair: ");
		scanf("%s",&continuar);
	}while(!strcmp(continuar,"sim"));
	return 0;
}
