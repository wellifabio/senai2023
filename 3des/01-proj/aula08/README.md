# Projeto OS Full Stack

|Contextualização:|
|-|
|Os colaboradores do setor de manutenção predial desempenham os papeis de pedreiros, encanadores, eletricistas, carpinteiros e ajudantes, suas tarefa diárias são organizadas através de **OS**s (Odens de Serviço) que possuem uma descrição inicial, podem ser acrescidas de comentários tanto do solicitante quanto do executor e servem de documentação destas tarefas.|

|Desafios:|
|-|
|Você foi contratado como programador full-stack jr. e como parte de uma equipe SRUM está alocado neste projeto OS, objetivando desenvolver um aplicativo web para gerir as tarefas do setor de manutenção predial. As tarefas iniciais são listadas na tabela de entregas a seguir|

|Entregas:|
|-|
|1. Documentar o BD através de um MER x DER Conceitual|
|2. Desenvolver o Banco de dados e importar os dados de teste **csv**|
|3. Desenvolver a aplicação **WEB** conforme regras de negócio/histórias|
|4. Estilizar de forma semelhante aos **wireframes** listados a seguir com configurações de paleta de cor e fonte.|
|5. Documentar o projeto através da **UML**:<br>&nbsp;- 5.1. DCU - Diagrama de Casos de USO dos requisitos: Criar OS e Atender OS.<br>&nbsp;- 5.2. Diagrama de atividades, documentando o cenário onde um colaborador pode adicionar comentários e encerrar uma OS.|


|Regras de negócio/histórias:|
|-|
|[RN001] As OSs podem ser abertas/criadas por colaboradores de qualquer setor<br>[RN002]Quando são criadas são direcionadas apenas para colaboradores do setor de manutenção escolhidos em uma lista, devem ter a descrição com preenchimento obrigatório e a data/hora de abertura vinda do sistema.<br>[RN003] O controle de status (Aberta/Concluídas) deve ser feito através do campo data/hora do encerramento, se estiver nulo = "Aberta" senão "Concluída"<br>[RN004] Ao acessar o sistema o colaborador deve acessar uma tela de login onde informa a matrícula e seu PIN numérico de 4 dígitos, com os dados corretos são direcionados a tela principal onde podem gerir suas OSs.<br>[RN005] Na tela principal, se não for colaborador da manutenção deve ver apenas as OSs abertas por ele diferenciadas por cores "Concluídas" e "Abertas"<br>[RN005.1] As OSs concluídas podem somente ser vistas, por colaboradores da manutenção, e não devem ser alteradas ou excluídas, já as abertas podem ser modificadas.<br>[RN005.2] Cada OS deve ter um botão/link que mostre seus detalhes/comentários em uma nova página ou modal.<br>[RN005.3] Nas OSs abertas podem ser adicionados novos comentários, uma vez adicionado um comentário não pode mais ser removido, já as OSs concluídas devem apenas listar os comentários nos detalhes.<br>[RN006] Na tela principal, se for colaborador da manutenção deve ver as OSs abertas por ele e ter um botão para ver as abertas e diferenciadas por cores "Desiginadas a ele" e "Abertas designadas a outros ou sem designação"<br>[RN006.1] Todos as subregras da [RN005] devem ser implementadas acrescidas de um botão para concluir as OSs designadas preenchendo a data/hora do encerramento e um comentário final.<br>[RN007] O sistema não precisa gerir os colaboradores somente as OSs e comentários porem será um adicional permitir cadastrar novo colaborador e gerir seu perfil<br>[RN008] Até o momento a gestão foi feita por planilhas que foram exportadas no formato CSV e devem ser importadas para o banco de dados como dados de teste.|

### Dados de teste para o banco de dados
#### colaboradores.csv
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
#### oss.csv
```csv
id;descricao;colaborador;executor;abertura;encerramento
1;Troca da torneira da pia da cozinha;201;207;2023-03-07 08:23:00;2023-03-08 08:23:00
2;Instalação do batente da porta do banheiro masculino;201;205;2023-03-07 09:20:00;2023-03-08 09:20:00
3;Instalação do batente da porta do banheiro feminino;201;205;2023-03-07 10:19:00;2023-03-08 10:19:00
4;Troca da torneira da pia do banheiro masculino;202;207;2023-03-07 11:22:00;2023-03-08 11:20:00
5;Instalação de lâmpada de emergência na recepção;202;204;2023-03-07 12:23:00;2023-03-08 12:21:00
6;Instalação de lâmpada de emergência no corredor;202;204;2023-03-07 13:24:00;2023-03-08 13:22:00
7;Instalação de tomada 220v na administração;203;206;2023-03-08 08:23:00;2023-03-09 08:23:00
8;Pintura das faixas da garagem;201;203;2023-03-08 09:20:00;2023-03-09 09:20:00
9;Pintura do poste da garagem;204;203;2023-03-08 10:19:00;2023-03-09 10:19:00
10;Instalação de refletores no estacionamento;205;206;2023-03-08 11:20:00;2023-03-09 11:23:00
11;Construção de uma porta adicional na sala da diretoria;202;203;2023-03-08 12:21:00;2023-03-09 12:21:00
12;Instalação de tomadas na sala de descanso;210;206;2023-03-08 13:22:00;2023-03-09 13:22:00
13;Troca da torneira da pia do refeitório;203;207;2023-03-09 08:23:00;2023-03-10 08:23:00
14;Instalação do batente da porta da cozinha;204;205;2023-03-09 09:20:00;2023-03-10 09:20:00
15;Instalação do batente da porta do banheiro feminino;203;205;2023-03-09 10:19:00;2023-03-10 10:19:00
16;Troca da torneira da pia do banheiro feminino;203;207;2023-03-09 11:23:00;2023-03-10 11:23:00
17;Instalação de lâmpada de emergência na recepção;201;206;2023-03-09 12:21:00;2023-03-10 12:25:00
18;Instalação de lâmpada de emergência no corredor;201;204;2023-03-09 13:22:00;2023-03-10 13:26:00
19;Instalação de tomada 220v na administração;201;206;2023-03-10 08:23:00;2023-03-10 08:23:00
20;Limpeza pós obra na sala de reuniões;202;209;2023-03-10 09:20:00;2023-03-10 09:20:00
21;Pintura do poste da garagem externa;202;203;2023-03-10 10:19:00;2023-03-10 10:19:00
22;Instalação de refletores no estacionamento;202;206;2023-03-10 11:23:00;2023-03-10 11:23:00
23;Construção de uma porta adicional na sala da contabilidade;210;203;2023-03-10 12:25:00;2023-03-10 12:25:00
24;Instalação de tomadas na sala de reunição;210;206;2023-03-10 13:26:00;2023-03-10 13:26:00
25;Troca da torneira da pia da cozinha;201;207;2023-04-07 08:23:00;2023-04-08 08:23:00
26;Instalação do batente da porta do banheiro masculino;201;205;2023-04-07 09:20:00;2023-04-08 09:20:00
27;Instalação do batente da porta do banheiro feminino;201;205;2023-04-07 10:19:00;2023-04-08 10:19:00
28;Troca da torneira da pia do banheiro masculino;202;207;2023-04-07 11:22:00;2023-04-08 11:20:00
29;Instalação de lâmpada de emergência na recepção;202;204;2023-04-07 12:23:00;2023-04-08 12:21:00
30;Instalação de lâmpada de emergência no corredor;202;204;2023-04-07 13:24:00;2023-04-08 13:22:00
31;Instalação de tomada 220v na administração;203;206;2023-04-08 08:23:00;2023-04-09 08:23:00
32;Pintura das faixas da garagem;201;203;2023-04-08 09:20:00;2023-04-09 09:20:00
33;Pintura do poste da garagem;204;203;2023-04-08 10:19:00;2023-04-09 10:19:00
34;Instalação de refletores no estacionamento;205;206;2023-04-08 11:20:00;2023-04-09 11:23:00
35;Construção de uma porta adicional na sala da diretoria;202;203;2023-04-08 12:21:00;2023-04-09 12:21:00
36;Instalação de tomadas na sala de descanso;210;206;2023-04-08 13:22:00;2023-04-09 13:22:00
37;Troca da torneira da pia do refeitório;203;207;2023-04-09 08:23:00;2023-04-10 08:23:00
38;Instalação do batente da porta da cozinha;204;205;2023-04-09 09:20:00;2023-04-10 09:20:00
39;Instalação do batente da porta do banheiro feminino;203;205;2023-04-09 10:19:00;2023-04-10 10:19:00
40;Troca da torneira da pia do banheiro feminino;203;207;2023-04-09 11:23:00;2023-04-10 11:23:00
41;Instalação de lâmpada de emergência na recepção;201;206;2023-04-09 12:21:00;2023-04-10 12:25:00
42;Instalação de lâmpada de emergência no corredor;201;204;2023-04-09 13:22:00;2023-04-10 13:26:00
43;Instalação de tomada 220v na administração;201;206;2023-04-10 08:23:00;
44;Limpeza pós obra na sala de reuniões;202;209;2023-04-10 09:20:00;
45;Pintura do poste da garagem externa;202;203;2023-04-10 10:19:00;
46;Instalação de refletores no estacionamento;202;206;2023-04-10 11:23:00;
47;Construção de uma porta adicional na sala da contabilidade;210;203;2023-04-10 12:25:00;
48;Instalação de tomadas na sala de reunição;210;206;2023-04-10 13:26:00;
```
#### comentarios.csv
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
21;19;206;2023-04-11 08:23:00;Concluído
22;20;209;2023-04-11 09:20:00;Concluído
23;21;203;2023-04-11 10:19:00;Concluído
24;22;206;2023-04-11 11:23:00;Concluído
25;23;203;2023-04-11 12:25:00;Concluído
26;24;206;2023-04-11 13:26:00;Concluído
27;25;201;2023-04-08 08:23:00;Falta vedarosca
28;25;207;2023-04-08 08:23:01;Concluído com sucesso
29;26;205;2023-04-08 09:20:00;Falta parafusos
30;26;205;2023-04-08 09:20:01;Concluído com resalvas
31;27;205;2023-04-08 10:19:00;Parcialmente concluído
32;28;207;2023-04-08 11:20:00;Concluído com sucesso
33;29;204;2023-04-08 12:21:00;Concluído com sucesso
34;30;204;2023-04-08 13:22:00;Concluído com sucesso
35;31;206;2023-04-09 08:23:00;Concluído com sucesso
36;32;203;2023-04-09 09:20:00;Concluído com sucesso
37;33;203;2023-04-09 10:19:00;Parcialmente concluído
38;34;206;2023-04-09 11:23:00;Concluído com sucesso
39;35;203;2023-04-09 12:21:00;Concluído com resalvas
40;36;206;2023-04-09 13:22:00;Parcialmente concluído
41;37;207;2023-04-10 08:23:00;Concluído com sucesso
42;38;205;2023-04-10 09:20:00;Concluído com sucesso
43;39;205;2023-04-10 10:19:00;Concluído com sucesso
44;40;207;2023-04-10 11:23:00;Concluído com sucesso
45;41;206;2023-04-10 12:25:00;Concluído com sucesso
46;42;204;2023-04-10 13:26:00;Parcialmente concluído
47;43;206;2023-04-11 08:23:00;Aguardando material
48;44;209;2023-04-11 09:20:00;Aguardando material
49;45;203;2023-04-11 10:19:00;Aguardando material
50;46;206;2023-04-11 11:23:00;Aguardando material
51;47;203;2023-04-11 12:25:00;Aguardando material
52;48;206;2023-04-11 13:26:00;Aguardando material
```

## Missão Resumida
Este repositório possui o sistema parcialmente desenvolvido **Etapa03 Concluída** com a principais funcionalidades na pasta ./os baixe em seu computador e execute conforme instruções no arquivo ./os/README.md, você perceberá que a estilização está incompleta, conclua a estilização **Etapa04** do front conforme regras de negócio e sua criatividade. Também desenvolva o MER DER, e fiagramas UML conforme etapas **1,2 e 5**.