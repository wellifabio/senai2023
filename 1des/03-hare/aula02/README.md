# Aula02 - Arquitetura de sistemas Operacionais

# Fundamentos Técnicos e Científicos
3. Identificar as arquiteturas de hardware e suas funcionalidades

# Conhecimentos
	- 1. Hardware
	- 1.1. Histórico e terminologias
	- 1.3. Arquitetura

## CISC e RISC
### CISC (Complex Instruction Set Computer) (Conjunto de Instruções Complexas)
- Possui um grande número de instruções
- Istruções complexas no processador.

#### Exemplo de instrução complexa
```assembly
MOV AX, 0x1234
```
#### Exemplo de Hardware
- PCs comuns, como os da família x86
- Dispositivos móveis, como os da família ARM
#### benefícios
- Maior facilidade de programação
- Menor custo de desenvolvimento de software
- Mais versatilidade, atendendo a um número maior de propósitos
### RISC (Reduced Instruction Set Computer) (Conjunto de Instruções Reduzidas)
- Possui um pequeno número de instruções
- Instruções simples no processador e as complexas ficam por conta do sistema Operacional
#### Exemplo de Hardware
- Supercomputadores e servidores
#### Benefícios
- Menor custo de produção
- Menor consumo de energia
- Maior velocidade de processamento
#### Exemplo de instrução simples
```assembly
LOAD R1, 0x1234
```
## Little-endian e Big-endian

- Little-endian significa armazenar bytes na ordem do menor para o mais significativo (onde o byte menos significativo ocupa o primeiro, ou menor, endereço), comparável a maneira comum de escrever datas na Europa (por exemplo, 31 Dezembro de 2050)

- Big-endian significa armazenar bytes na ordem do mais significativo para o menos significativo (onde o byte mais significativo ocupa o primeiro, ou menor, endereço), comparável à maneira comum de escrever datas em banco de dados (por exemplo, 2050-12-31).

- endian.c
```c
/* 
   Write a C program to find out if the underlying 
   architecture is little endian or big endian. 
 */
 
#include <stdio.h>
int main ()
{
  unsigned int x = 0x76543210;
  char *c = (char*) &x;
 
  printf ("*c is: 0x%x\n", *c);
  if (*c == 0x10)
  {
    printf ("A arquitetura do Computador � little endian. \n");
  }
  else
  {
     printf ("A arquitetura do Computador � big endian. \n");
  }
 
  return 0;
}

```