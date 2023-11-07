#include <stdio.h>
int main(){
	int raio, altura;
	int area, volume;
	int pi = 3;
	//Entradas
	printf("Digite o raio de um cilindro em cm:");
	scanf("%d",&raio);
	printf("Digite a altura do cilindro em cm:");
	scanf("%d",&altura);
	//Processamento
	int areaLat = 2 * pi * raio * altura;
	int areaBase = 2 * pi * raio * raio;
	area = areaLat + areaBase;
	volume = pi * raio * raio * altura;
	//Saídas
	printf("Raio = %d\n",raio);
	printf("Altura = %d\n",altura);
	printf("Area do cilindro = %d\n",area);
	printf("Volume do cilindro = %d\n",volume);
	return 0;
}
