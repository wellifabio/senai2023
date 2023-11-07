#include <stdio.h>
int main(){
	int i, sexo;
	printf("Informe sua idade: ");
	scanf("%d",&i);
	printf("Informe como você de identifica 1.mulher, 2.homem, 3.outro:");
	scanf("%d",&sexo);
	switch(sexo){
		case 1:
			if(i<10) printf("Criança");
			else if(i<15) printf("Adolescente");
			else if(i<20) printf("Jovem");
			else if(i<35) printf("Adulta");
			else if(i<55) printf("Meia idade");
			else printf("Idosa");
			break;
		case 2:
			if(i<20) printf("Criança");
			else if(i<35) printf("Adolescente");
			else if(i<40) printf("Jovem");
			else if(i<50) printf("Adulto");
			else if(i<55) printf("Meia idade");
			else printf("Idoso");
			break;
		case 3:
			if(i<=10) printf("Criança");
			else if(i<=15) printf("Adolescente");
			else if(i<=20) printf("Jovem");
			else if(i<=35) printf("Adulte");
			else if(i<=55) printf("Meia idade");
			else printf("Idose");
			break;
		default:
			printf("Opção inválida");
	}
	return 0;
}
