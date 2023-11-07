# Aula03 - Correção de exercícios
## Operadores aritméticos
![Lousa](./lousa.jpg)

## Conhecimentos
- 1. Linguagem de programação
- 1.1. Princípios
- 1.2. Caraterísticas
- 1.3. Tipos
- 1.3.1. Compilada
- 1.3.2. Interpretada
 

## Correção de dois exercícios da lista da aula02

-ex1.c
```c
#include <stdio.h>
int main(){
	//Declara��o de vari�veis
	int a, b, c, x;
	//Etrada
	printf("Digite tr�s n�meros inteiro separados por espa�os:");
	scanf("%d %d %d",&a, &b, &c);
	//Processamento
	x = ( a + b ) / c;
	//Sa�da
	printf("a = %d\nb = %d\nc = %d\n", a, b, c);
	printf("O resultado da express�o (a + b) / c = %d",x);
	return 0;
}

```

ex8.c
```c
#include <stdio.h>
int main(){
	float raio, altura;
	float area, volume;
	float pi = 3.14;
	//Entradas
	printf("Digite o raio de um cilindro em cm:");
	scanf("%f",&raio);
	printf("Digite a altura do cilindro em cm:");
	scanf("%f",&altura);
	//Processamento
	float areaLat = 2 * pi * raio * altura;
	float areaBase = 2 * pi * raio * raio;
	area = areaLat + areaBase;
	volume = pi * raio * raio * altura;
	//Sa�das
	printf("Raio = %.2f\n",raio);
	printf("Altura = %.2f\n",altura);
	printf("Area do cilindro = %.3f\n",area);
	printf("Volume do cilindro = %.3f\n",volume);
	return 0;
}
```