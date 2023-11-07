-- Utilizar o BD Pizzaria da aula anterior
use pizzaria;

-- Criar uma tabela a partir de outra
create table dados_cli
select nome, logradouro, bairro
from clientes;

show tables;
select * from dados_cli;
describe dados_cli;

-- Alterar a tabela de dados_cli adicionando uma coluna CPF
alter table dados_cli add cpf varchar(15);
alter table dados_cli drop cpf;
alter table dados_cli add cpf varchar(15) first;

select * from dados_cli;

-- Criar um índice para uma tabela
create index i_nome on dados_cli(nome);

-- Se precisar exportar dados de uma consulta
select nome from dados_cli into outfile 'd:/nomes.txt' CHARACTER SET utf8;

-- Alterar os CPFs de NULL para cpfs válidos
update dados_cli set cpf="59620146263" where nome = "Adelcio Biazi";
update dados_cli set cpf="35221690420" where nome = "Adriano da Silva Ferreira";
update dados_cli set cpf="40341659100" where nome = "Alisson Linhares de Carvalho";
update dados_cli set cpf="57715972363" where nome = "Amanda Cristina davi Resende";
update dados_cli set cpf="23503742034" where nome = "Ana Cl?udia de Moura Laurentin";
update dados_cli set cpf="32249152500" where nome = "Ana Claudia Maciel";
update dados_cli set cpf="05684559085" where nome = "Andr? Luyde da Silva Souza";
update dados_cli set cpf="63857448091" where nome = "Anisio Alfredo da Silva Junior";
update dados_cli set cpf="58187868899" where nome = "Argemiro Pentian Junior";
update dados_cli set cpf="41505293456" where nome = "Bento Rafael Siqueira";
update dados_cli set cpf="11323379096" where nome = "Bernardo Moreira Zabadal";
update dados_cli set cpf="81596370203" where nome = "Carlos C?sar Farias de Souza";
update dados_cli set cpf="59356610207" where nome = "Carlos Roberto de Oliveira Caz";
update dados_cli set cpf="19510668044" where nome = "Carlos Roberto Do Nascimento C";
update dados_cli set cpf="63310635287" where nome = "Cesar Augusto Pascali Rago";
update dados_cli set cpf="41905808054" where nome = "Claudemir de Souza Freitas Jun";
update dados_cli set cpf="65962509897" where nome = "Claudiane Mendes Trigueiro Sil";
update dados_cli set cpf="65631096595" where nome = "Claudiney Ramos Tinoco";
update dados_cli set cpf="16307236655" where nome = "Danilo C?sar Pereira";
update dados_cli set cpf="33322594580" where nome = "Darvin Ames";
update dados_cli set cpf="16011802257" where nome = "Debora Barbosa Aires";
update dados_cli set cpf="33400620807" where nome = "Deivison Shindi Takatu";
update dados_cli set cpf="55835186770" where nome = "Denis Henrique Caixeta";
update dados_cli set cpf="00892685042" where nome = "Deysiane Matos Sande";
update dados_cli set cpf="80908849974" where nome = "Diego Rafael Moraes";
update dados_cli set cpf="08451114261" where nome = "Diogo Matos da Silva";
update dados_cli set cpf="68700843431" where nome = "Diogo Paulino da Cruz dos Sant";
update dados_cli set cpf="57964315102" where nome = "Douglas Brito damalio";
update dados_cli set cpf="51880964554" where nome = "Draylson Micael de Souza";
update dados_cli set cpf="73761292350" where nome = "Dyogo Porfirio Almeida Santos";
update dados_cli set cpf="48907378550" where nome = "Eder Almeida Batista de Olivei";
update dados_cli set cpf="81314516825" where nome = "Ederlon Barbosa Cruz";
update dados_cli set cpf="78473489187" where nome = "Edinei Peres Legaspe";
update dados_cli set cpf="12573066002" where nome = "Edinilson da Silva Vida";
update dados_cli set cpf="33664640624" where nome = "Ednei Jose de Almeida Junior";
update dados_cli set cpf="70534333664" where nome = "Eduardo de Paula Lima Nascimen";
update dados_cli set cpf="41956562222" where nome = "Eduardo Henrique Spies";
update dados_cli set cpf="51662341970" where nome = "Elaine Cec?lia Gatto";
update dados_cli set cpf="50751226203" where nome = "Elias Adriano Nogueira da Silv";
update dados_cli set cpf="37522845106" where nome = "Elis Cristina Montoro Hernande";
update dados_cli set cpf="66877463838" where nome = "Erica Aparecida Martins Siquei";
update dados_cli set cpf="03222856079" where nome = "Erika Arias Barrado";
update dados_cli set cpf="56043483840" where nome = "Esteic Janaina Santos Batista";
update dados_cli set cpf="33817885156" where nome = "Everaldo Costa Silva Neto";
update dados_cli set cpf="53829363664" where nome = "Everaldo Silva de Freitas";
update dados_cli set cpf="69898336293" where nome = "Everton Jose de Souza";
update dados_cli set cpf="13149703727" where nome = "Ewerton Jos? da Silva";
update dados_cli set cpf="07452589211" where nome = "Fabio Luiz de Paula";
update dados_cli set cpf="24827600112" where nome = "Fabio Serafim";
update dados_cli set cpf="80544303458" where nome = "Felipe Gobo Bruno";
update dados_cli set cpf="34560807434" where nome = "Fernanda Zampieri Canaver";
update dados_cli set cpf="96742384174" where nome = "Fernando Claudio dos Santos Ju";
update dados_cli set cpf="86810820515" where nome = "Fernando Henrique Campos";
update dados_cli set cpf="43146708949" where nome = "Fl?via Zenaro Nogueira E Silva";
update dados_cli set cpf="56721927268" where nome = "Floriano Ferreira dos Reis Fil";
update dados_cli set cpf="78711690925" where nome = "Frances Albert Santos";
update dados_cli set cpf="95911475030" where nome = "Francisco Assis da Silva";
update dados_cli set cpf="81194698107" where nome = "Francisco Edigleison da Silva ";
update dados_cli set cpf="99097046505" where nome = "Francisco Jos? Nardi Filho";
update dados_cli set cpf="39319960348" where nome = "Gabriel Ferreira Teles Gomes";
update dados_cli set cpf="97722654002" where nome = "Gabriel Morais Silveira";
update dados_cli set cpf="61641812400" where nome = "Gabriel Sgorlon Tininis";
update dados_cli set cpf="06016914908" where nome = "Gabriel Spadon de Souza";
update dados_cli set cpf="94611911462" where nome = "Gerson Luiz Camillo";
update dados_cli set cpf="05835097034" where nome = "Giovani Bertolla Sampaio";
update dados_cli set cpf="97071759740" where nome = "Giovanna Nascimento Antonieti";
update dados_cli set cpf="33280916615" where nome = "Gustavo Moreira Calixto";
update dados_cli set cpf="13725001200" where nome = "Helder Pestana";
update dados_cli set cpf="65410945514" where nome = "Hiago Araujo Silva";
update dados_cli set cpf="16494115373" where nome = "Higor Antonio delsoto";
update dados_cli set cpf="28496679942" where nome = "Icaro Cavalcante Dourado";
update dados_cli set cpf="90125912528" where nome = "Ingrid Mar?al";
update dados_cli set cpf="61661102786" where nome = "Jeane Aparecida Menegueli";
update dados_cli set cpf="06752948941" where nome = "Jefferson Barbosa Belo da Silv";
update dados_cli set cpf="05776292123" where nome = "Jefferson Carlos Pedroso";
update dados_cli set cpf="27525655693" where nome = "Jess? Italo Silva";
update dados_cli set cpf="26261520801" where nome = "Jos? Eug?nio de Mira";
update dados_cli set cpf="93759345433" where nome = "Jos? Rafael Pilan";
update dados_cli set cpf="57278288991" where nome = "Jos? Renato Paviotti";
update dados_cli set cpf="27962543213" where nome = "Jos? Santiago Moreira de Mello";
update dados_cli set cpf="01495299880" where nome = "Josiane Rosa de Oliveira Gaia ";
update dados_cli set cpf="68488513372" where nome = "Juliana de Sousa Ribeiro";
update dados_cli set cpf="31805598619" where nome = "Liliam Sayuri Sakamoto";
update dados_cli set cpf="96614313452" where nome = "Lucas Hermann Negri";
update dados_cli set cpf="13239318482" where nome = "Luciano Rossi";
update dados_cli set cpf="40461429284" where nome = "Luciano Rovanni Do Nascimento";
update dados_cli set cpf="77485328859" where nome = "Marcelo Do Carmo Vieira Scompa";
update dados_cli set cpf="18056542418" where nome = "Marcelo Jos? Vigorito Campara";
update dados_cli set cpf="30089493397" where nome = "Murilo Gleyson Gazzola";
update dados_cli set cpf="97412545639" where nome = "Ov?dio Jos? Francisco";
update dados_cli set cpf="67276669629" where nome = "Patr?cia Fernanda da Silva Fre";
update dados_cli set cpf="50031183174" where nome = "Paula Leticia Santos Lima";
update dados_cli set cpf="56709691624" where nome = "Rafael Tom? de Souza";
update dados_cli set cpf="39464383771" where nome = "Rafaela de Jesus Alencar";
update dados_cli set cpf="86243225968" where nome = "Ramon Sim?es Ab?lio";
update dados_cli set cpf="78485398734" where nome = "Raphael Hungaro Moretti";
update dados_cli set cpf="50315959142" where nome = "Sara Luzia de Melo";
update dados_cli set cpf="48071660930" where nome = "Sergio Willians Poneli";
update dados_cli set cpf="54058020504" where nome = "Silvia Roberta de Jesus Garcia";
update dados_cli set cpf="70079079202" where nome = "Su?llen Rodolfo Martinelli";
update dados_cli set cpf="38135794924" where nome = "Taynara Cerigueli Dutra";
update dados_cli set cpf="07341310383" where nome = "Thamires de Campos Luz";
update dados_cli set cpf="33710576822" where nome = "Viviane Mello Bonadia dos Sant";
update dados_cli set cpf="05045619950" where nome = "Walter Paulo Costenaro";
update dados_cli set cpf="00201026821" where nome = "Wellington Fabio de Oliveira M";

-- Criar um índice para o CPF
create index i_nome on dados_cli(cpf);