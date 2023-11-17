# Vacinação CoronaVac 
Fonte: IC Unicamp URL: https://susy.ic.unicamp.br:9999/mc102/05/enunciado.html acesso em 28/09/2021

|Contextualização|
|-|
|A prefeitura de Campinas vai receber uma grande quantidade de vacinas CoronaVac, mas está com dificuldade para organizar como distribuí-las a população. Com o seu conhecimento em python, você decide escrever um programa para ajudar na distribuição das vacinas.<br><br>A CoronaVac é aplicada em duas doses, com um mês de intervalo entre a aplicação da primeira e da segunda dose. Um pessoa está com a segunda dose atrasada se ela foi vacinada há mais de um mês com a primeira dose. A cada mês uma dada quantidade de vacinas estará disponível para ser aplicada e o seu programa deve determinar quantas pessoas receberão a primeira dose e quantas pessoas receberão a segunda dose da vacina. O seguinte protocolo foi escolhido para a distribuição da vacina:<br>- Primeiro, se existem pessoas com a segunda dose em atraso, elas devem ser vacinadas.<br>- Em seguida, são vacinadas as pessoas com a segunda dose em dia (que foram vacinadas com a primeira dose no mês anterior).<br>- Por fim, todas as vacinas restantes são aplicadas como primeira dose.|
|O programa deve receber como entrada um inteiro N, representando quantos meses devem ser analisados pelo programa, seguido por N linhas com a quantidade de vacinas disponíveis em cada mês. Como saída, o programa deve responder quantas pessoas foram completamente imunizadas (D2), quantas pessoas estão imunizadas apenas com uma dose, estando ou não com a segunda dose atrasada (D1), quantas pessoas tomaram a segunda dose com atraso (D2A) e quantas pessoas ainda não tomaram a segunda dose e estão com atraso (D1A).|

|A saída deve estar no seguinte formato:|
|-|
|Pessoas completamente imunizadas: D2<br>Pessoas imunizadas apenas com uma dose: D1<br>Pessoas que tomaram a segunda dose com atraso: D2A<br>Pessoas esperando a segunda dose com atraso: D1A|

|Exemplos de entradas e saídas esperadas pelo seu programa:|
|-|
|Teste 01<br>Entrada<br>1<br>4034|
|Saída|
|Pessoas completamente imunizadas: 0<br>Pessoas imunizadas apenas com uma dose: 4034<br>Pessoas que tomaram a segunda dose com atraso: 0<br>Pessoas esperando a segunda dose com atraso: 0|
|Teste 03<br>Entrada<br>4<br>26000<br>26000<br>46000<br>46000|
|Saída|
|Pessoas completamente imunizadas: 72000<br>Pessoas imunizadas apenas com uma dose: 0<br>Pessoas que tomaram a segunda dose com atraso: 0<br>Pessoas esperando a segunda dose com atraso: 0|
|Teste 09<br>Entrada<br>5<br>13000<br>7000<br>41000<br>11000<br>8000|
|Saída|
|Pessoas completamente imunizadas: 32000<br>Pessoas imunizadas apenas com uma dose: 16000<br>Pessoas que tomaram a segunda dose com atraso: 14000<br>Pessoas esperando a segunda dose com atraso: 16000|
