# Aula15 - Arquivos e Estruturas
## Estruturas
Para facilitar a manipulação de arquivos podemos utilizar estruturas para armazenar os dados, assim com funções as estruturas podem ser retilizadas por exemplo:
```c
typedef struct{
	char nome[50];
	int idade;
} Pessoa;
```
A estrutura acima pode ser usada para armazenar dados do arquivo a seguir:
dados.txt
```txt
Ana 16
Maria 25
Joana 36
```

Segue o mesmo exemplo com **fscaf** da aula anterior com a utilização de estrutura de registros.
```c
#include <stdio.h>

struct Registro {
	char nome[50];
	int idade;
};
	
int main(){
	FILE *arq;
	struct Registro r1;
	arq = fopen("dados.txt","r");
	if(arq == NULL){
		printf("Erro ao ler arquivo.");
	}else{
		while(fscanf(arq,"%s %d", r1.nome, &r1.idade) != EOF){
			printf("%s %d\n", r1.nome, r1.idade);
		}
	}
	fclose(arq);
}
```
Para melhorar a interação do nosso código com os de outros programadores devemos utilizar padrões universais.

## Tipos de arquivos universais
- CSV (Estruturado)
- XML (Semiestruturado)
- JSON (Semiestruturado)

### CSV - Tabela com (Colunas)campos e (Linhas)registros
#### Separados por vírgula ou pono e vírgula
- pessoas.csv
```csv
id;nome;nascimento
1;Ana Maria;2000-01-01
2;Maria silva;2002-03-18
3;Marcos Paulo;2003-04-25
4;Mariana Lima;2001-01-13
```
### XML - Extensible Markup Language
#### Separados por tags, cada registro é um elemento
- pessoas.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<pessoas>
    <pessoa>
        <id>1</id>
        <nome>Ana Maria</nome>
        <nascimento>2000-01-01</nascimento>
    </pessoa>
    <pessoa>
        <id>2</id>
        <nome>Maria silva</nome>
        <nascimento>2002-03-18</nascimento>
    </pessoa>
    <pessoa>
        <id>3</id>
        <nome>Marcos Paulo</nome>
        <nascimento>2003-04-25</nascimento>
    </pessoa>
    <pessoa>
        <id>4</id>
        <nome>Mariana Lima</nome>
        <nascimento>2001-01-13</nascimento>
    </pessoa>
</pessoas>
```

### JSON - JavaScript Object Notation
#### Separados por chaves, cada registro é um objeto
pessoas.json
```json
[
    {   
        "id": 1,
        "nome": "Ana Maria",
        "nascimento": "2000-01-01"
    },
    {   
        "id": 2,
        "nome": "Maria silva",
        "nascimento": "2002-03-18"
    },
    {   
        "id": 3,
        "nome": "Marcos Paulo",
        "nascimento": "2003-04-25"
    },
    {   
        "id": 4,
        "nome": "Mariana Lima",
        "nascimento": "2001-01-13"
    }
]
```

## Atividades
- 1 Crie um programa que leia o seguinte aquivo CSV e imprima os dados na tela.
- entrada.csv
```csv
id;nome;nascimento
1;Ana Maria;2000-01-01
2;Maria silva;2002-03-18
3;Marcos Paulo;2003-04-25
4;Mariana Lima;2001-01-13
```
- 2 Crie um programa que leia o arquivo CSV anterior e acrescente uma coluna chamada **Idade** com a idade calculada a partir da data de nascimento, e salve os dados em um novo arquivo CSV chamado **saida.csv**.