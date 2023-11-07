# *.pug - App BackEnd
## Situação Problema
|Contextualização:|
|-|
|Você faz parde de uma equipe DEV precisa desenvolver um aplicativo para gerir OSs (Ordens de Serviço) do setor de manutenção predial, que conta com pedreiros encanadores eletricistas, carpinteiros e ajudantes. Siga as regras de negócio e utilize os dados fornecidos a seguir:|

### Regras de negócio
- [RN001] As OSs podem ser abertas/criadas por colaboradores de qualquer setor
- [RN002] Quando são criadas são direcionadas apenas para colaboradores do setor de manutenção escolhidos em uma lista, devem ter a descrição com preenchimento obrigatório e a data/hora de abertura vinda do sistema.
- [RN003] O controle de status (Aberta/Concluídas) deve ser feito através do campo data/hora do encerramento, se estiver nulo = "Aberta" senão "Concluída"
- [RN004] Ao acessar o sistema o colaborador deve acessar uma tela de login onde informa a matrícula e seu PIN numérico de 4 dígitos, com os dados corretos são direcionados a tela principal onde podem gerir suas OSs.
- [RN005] Na tela principal, se não for colaborador da manutenção deve ver apenas as OSs abertas por ele diferenciadas por cores "Concluídas" e "Abertas"
    - [RN005.1] As OSs concluídas podem somente ser vistas, não devem ser alteradas ou excluídas, já as abertas podem ser modificadas.
    - [RN005.2] Cada OS deve ter um botão/link que mostre seus detalhes/comentários em uma nova página ou modal.
    - [RN005.3] Nas OSs abertas podem ser adicionados novos comentários, uma vez adicionado um comentário não pode mais ser removido, já as OSs concluídas devem apenas listar os comentários nos detalhes.
- [RN006] Na tela principal, se for colaborador da manutenção deve ver as OSs abertas por ele e as designadas a ele diferenciadas por cores "Concluídas" e "Abertas"
    - [RN006.1] Todos as subregras da [RN005] devem ser implementadas acrescidas de um botão para concluir as OSs designadas preenchendo a data/hora do encerramento.
- [RN007] O sistema não precisa gerir os colaboradores somente as OSs e comentários
- [RN008] Até o momento a gestão foi feita por planilhas que foram exportadas no formato CSV e devem ser importadas para o banco de dados.

### Wireframe
<br>Tela de login **[RN004]**
<br>![Wireframe](wireframe1.png)
<br>Tela principal colaborador que **não** é do setor de **Manutenção** **[RN003]**,**[RN005],[RN005.1],[RN005.2]**
<br>![Wireframe](wireframe2.png)
<br> Tela no formato Modal para abrir uma OS **[RN001]** e **[RN002]**
<br>![Wireframe](wireframe7.png)
<br> Detalhe de uma OS concluida **[RN005.3]**
<br>![Wireframe](wireframe3.png)
<br> Detalhe de uma OS aberta **[RN005.3]**
<br>![Wireframe](wireframe4.png)
<br>Tela principal colaborador do setor de **Manutenção** **[RN006]**
<br>![Wireframe](wireframe5.png)
<br>Tela principal colaborador do setor de **Manutenção** com OSs também abertas por ele próprio. **[RN001]**
<br>![Wireframe](wireframe8.png)
<br>Detalhe de uma OS em execução com opção de adicionar comentário **[RN005.3]** botão concluir **[RN006.1]**.
<br>![Wireframe](wireframe6.png)
### Dados para importação **[RN008]**
- colaboradores.csv
```csv
matricula;nome;cargo;setor;pin
201;Ursula Filho;Aux. Administrativo;Administração;1234
202;Naiara Bispo Bispo;Gerente Geral;Administração;4321
203;Douglas Alves Mattos;Pedreiro;Manutenção;1234
204;Marcos Martim Martins;Ajudante Geral;Manutenção;4321
205;Jaqueline Filho Teixeira;Carpinteiro;Manutenção;1234
206;Yago de Oliveira Matos;Eletricista;Manutenção;4321
207;Daniela Martins Sobrinho;Encanador;Manutenção;1234
208;Ursula da Silva Filho;Recepcionista;Recepção;4321
209;Ana Alves;Aux. Limpeza;Manutenção;1234
210;Zélia Mattos;Téc. Contabilidade;Contabilidade;4321
```
- oss.csv
```csv
id;descricao;colaborador;executor;abertura;encerramento
1;Troca da torneira da pia da cozinha;201;207;2023-04-07 08:23:00;2023-04-08 08:23:00
2;Instalação do batente da porta do banheiro masculino;201;205;2023-04-07 09:20:00;2023-04-08 09:20:00
3;Instalação do batente da porta do banheiro feminino;201;205;2023-04-07 10:19:00;2023-04-08 10:19:00
4;Troca da torneira da pia do banheiro masculino;202;207;2023-04-07 11:22:00;2023-04-08 11:20:00
5;Instalação de lâmpada de emergência na recepção;202;204;2023-04-07 12:23:00;2023-04-08 12:21:00
6;Instalação de lâmpada de emergência no corredor;202;204;2023-04-07 13:24:00;2023-04-08 13:22:00
7;Instalação de tomada 220v na administração;203;206;2023-04-08 08:23:00;2023-04-09 08:23:00
8;Pintura das faixas da garagem;201;203;2023-04-08 09:20:00;2023-04-09 09:20:00
9;Pintura do poste da garagem;204;203;2023-04-08 10:19:00;2023-04-09 10:19:00
10;Instalação de refletores no estacionamento;205;206;2023-04-08 11:20:00;2023-04-09 11:23:00
11;Construção de uma porta adicional na sala da diretoria;202;203;2023-04-08 12:21:00;2023-04-09 12:21:00
12;Instalação de tomadas na sala de descanso;210;206;2023-04-08 13:22:00;2023-04-09 13:22:00
13;Troca da torneira da pia do refeitório;203;207;2023-04-09 08:23:00;2023-04-10 08:23:00
14;Instalação do batente da porta da cozinha;204;205;2023-04-09 09:20:00;2023-04-10 09:20:00
15;Instalação do batente da porta do banheiro feminino;203;205;2023-04-09 10:19:00;2023-04-10 10:19:00
16;Troca da torneira da pia do banheiro feminino;203;207;2023-04-09 11:23:00;2023-04-10 11:23:00
17;Instalação de lâmpada de emergência na recepção;201;206;2023-04-09 12:21:00;2023-04-10 12:25:00
18;Instalação de lâmpada de emergência no corredor;201;204;2023-04-09 13:22:00;2023-04-10 13:26:00
19;Instalação de tomada 220v na administração;201;206;2023-04-10 08:23:00;
20;Limpeza pós obra na sala de reuniões;202;209;2023-04-10 09:20:00;
21;Pintura do poste da garagem externa;202;203;2023-04-10 10:19:00;
22;Instalação de refletores no estacionamento;202;206;2023-04-10 11:23:00;
23;Construção de uma porta adicional na sala da contabilidade;210;203;2023-04-10 12:25:00;
24;Instalação de tomadas na sala de reunição;210;206;2023-04-10 13:26:00;
```
- comentarios.csv
```csv
id;os;colaborador;data;comentario
1;1;201;2023-04-08 08:23:00;Falta vedarosca
2;1;207;2023-04-08 08:23:01;Concluído com sucesso
3;2;205;2023-04-08 09:20:00;Falta parafusos
4;2;205;2023-04-08 09:20:01;Concluído com resalvas
5;3;205;2023-04-08 10:19:00;Parcialmente concluído
6;4;207;2023-04-08 11:20:00;Concluído com sucesso
7;5;204;2023-04-08 12:21:00;Concluído com sucesso
8;6;204;2023-04-08 13:22:00;Concluído com sucesso
9;7;206;2023-04-09 08:23:00;Concluído com sucesso
10;8;203;2023-04-09 09:20:00;Concluído com sucesso
11;9;203;2023-04-09 10:19:00;Parcialmente concluído
12;10;206;2023-04-09 11:23:00;Concluído com sucesso
13;11;203;2023-04-09 12:21:00;Concluído com resalvas
14;12;206;2023-04-09 13:22:00;Parcialmente concluído
15;13;207;2023-04-10 08:23:00;Concluído com sucesso
16;14;205;2023-04-10 09:20:00;Concluído com sucesso
17;15;205;2023-04-10 10:19:00;Concluído com sucesso
18;16;207;2023-04-10 11:23:00;Concluído com sucesso
19;17;206;2023-04-10 12:25:00;Concluído com sucesso
20;18;204;2023-04-10 13:26:00;Parcialmente concluído
21;19;206;2023-04-11 08:23:00;Aguardando material
22;20;209;2023-04-11 09:20:00;Aguardando material
23;21;203;2023-04-11 10:19:00;Aguardando material
24;22;206;2023-04-11 11:23:00;Aguardando material
25;23;203;2023-04-11 12:25:00;Aguardando material
26;24;206;2023-04-11 13:26:00;Aguardando material
```
|Desafio:|
|-|
|- Documentar o BD através de DER Conceitual<br>- Importar os dados csv para o banco de dados<br>- Desenvolver a aplicação backend/integrado conforme regras de negócio<br>- Estilizar com CSS<br>- Criar um UML diagrama de atividades de como um colaborador pode adicionar comentários e encerrar uma OS|

|Entregas:|
|-|
|- Repositorio publico github contendo:<br>&emsp;- Pasta **docs** contendo os diagramas, script de importação sql<br>&emsp;- Pasta **os** contendo a estrutura da aplicação backend|