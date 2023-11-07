# Aula01 - FPOO
## Fundamentos de Programação Orientada a Objeto
- Alô mundo em C (alo.c)
```c
#include <stdio.h>
int main(){
	printf("Alô mundo");
	return 0;
}

```
- Alô mundo em Python (alo.py)
```python
print("Alô mundo");

```
![Lousa](./lousa.jpg)

### Links
- Download DEV C++
    - https://sourceforge.net/projects/orwelldevcpp/
- Hello World Como Você Nunca Viu! | Entendendo C (Vídeo do Akita)
    - https://www.youtube.com/watch?v=Gp2m8ZuXoPg
- Ferramenta para desenhar fluxogramas
    - http://draw.io

### Conhecimentos
- Linguagem de programação
    - 1.1. Princípios
    - 1.2. Caraterísticas
    - 1.3. Tipos
        - 1.3.1. Compilada
        - 1.3.2. Interpretada
### Algoritmo x fluxograma:
- Desafio: **Trocar uma Lâmpada**

|Algoritmo (Portugol)|Fluxograma|
|-|-|
|01. Inicio;<br> 02. Lâmpada não acende;<br>03. Se existe lâmpada reserva;<br>04. Posicionar e subir na escada;<br>05. Retirar a lâmpada queimada;<br>06. Colocar a lâmpada reserva;<br>07. Descer da escada e testar;<br>08. Senão;<br>09. Comprar uma nova lâmpada;<br>10. Voltar para o passo 04;<br>11. Se acender;<br>12. Fim;<br>13. Senão;<br>14.Chamar um eletricista;|![Fluxograma](./fluxograma_lampada.png)|

#### 1.1. Princípios e 1.2. Caraterísticas
Linguagem humana de médio a alto nível (C, C++, C#, Java, Python ...)
Todas servem para criar aplicativos e sistemas, porém cada uma atende melhor a um determinado propósito ou stack:
- **Desktop** (Programas de computador, como Word, Excel, SAP)
- **Web Front End** (Páginas de internet)
- **Web Back End** (Intermediário seguro, API para páginas web ou apps de celulares)
- **Mobile** (Apps para celular, smartTV e outros)
- **Iot** (Dispositivos embarcados que podem ser ligados a internet)
- **AI** (Inteligência artificial, aprendizagem de máquina)
- **Comercial** (Programas, Apps utilizados por empresas, indústrias, para gestão)
- **Científica** (Programas, Apps utilizados por pesquisadores a fim de fazer descobertas)
- **Games** (Jogos de computador)
#### 1.3. Tipos
- 1.3.1. **Compilada** (O código fonte se transforma em linguagem de máquina e é exclusiva do sistema operacional onde foi compilada)
- Um programa compilado normalmente é:
    - mais rápido, pois possui parte do SO anexo.
    - é adequado a um tipo de hardware.
    - Exclusivo do sistema operacional onde foi compilado
    - Ex: C, C#
- 1.3.2. **Interpretada** (O código fonte é executado diretamente por um servidor de aplicação ou o próprio navegador)
    - Não tão rápida como a compilada, pois é decodificada em tempo real
    - Necessita de menos recursos do Sistema Operacional ou nenhum
    - Ex: HTML, CSS, JavaScript
- **Hibrida** ou VM (Geralmente utiliza recursos do sistema operacional ou máquinas virtuais)
    - Semi compilada
    - Necessita de uma máquina virtual
    - Ex: Java