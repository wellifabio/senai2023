# PowerMill
## Tutorial de como instalar o PowerMill nas máquinas usuário:
- 1 Ligar o computador;
- 2 Entrar com o usuário suporte;
- 3 Caso não possua o software DeepFreeze pular para o passo 6, senão desabilitar o software DeepFreeze. Ele reiniciará o computador;
- 4 Ligar novamente o computador;
- 5 Entrar com o usuário suporte;
- 6 Acessar a pasta de instalação (PowerMill_Ultimate_2019_ML_Win_64bit_dlm)
- 7 Executar o arquivo Setup.exe
- 8 Aguardar a instalação. Demora bastante;
- 9 Após a instalação, abrir o software PowerMill;
- 10 Na primeira utilização, ele irá pedir o servidor de licença. O do SENAI Jaguariúna é SRV-LICENCA (tudo em maiúsculo e é LICENCA sem c-cedilha mesmo);
- 11 Fechar o PowerMill;
- 12 Habilitar o software DeepFreeze. Ele reiniciará o computador;
- 13 Ligar novamente o computador;
- 14 Fim.

## E-mail do suporte
suporte@camservsolutions.com

## Trouble Shooting
- O Autodesk Network License Manager (NLM) está instalado em um computador com Windows Server 2008 ou Windows Vista/7.
- O NLM e o produto Autodesk estão na mesma estação de trabalho com IPv6 ativado.
- A data e a hora do seu sistema cliente estão incorretas (o servidor rejeitará check-outs de licenças nos clientes cuja data e hora forem notadamente diferentes da data/hora do servidor).
- Porta bloqueada no sistema do gerenciador de licenças.
- Você está executando uma versão IPv6 quando deveria executar IPv4.
 
## Observação:
Se você tiver um firewall entre o(s) servidor(es) de licença e os computadores clientes, será necessário abrir algumas portas TCP/IP no servidor para comunicação relacionada às licenças. Abra a porta 2080 para adskflex e abra as portas de 27000 a 27009 para lmgrd.

## Máquina Cliente
É possível que uma porta esteja bloqueada na máquina que hospeda o servidor de licença. Nesse caso, podemos forçar a máquina CLIENTE a usar outra porta:
- 1 Clique com o botão direito em Meu Computador.
- 2 Clique na guia Avançado.
- 3 Clique em "Variáveis de Ambiente".
- 4 Clique no botão "Novo" abaixo da lista Variáveis de sistema.
- 5 No campo Nome de variável, insira ADSKFLEX_LICENSE_FILE
- 6 No campo Valor de variável, insira 27000@YOUR_SERVER_NAME_OR_IP
- 7 Clique em "OK" e teste