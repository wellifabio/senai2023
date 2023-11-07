# Lógica de Programação (Sincrona)
O JavaScript é uma linguagem **sincrona** isto quer dizer que uma função pode ser executada antes de uma outra ter sido completada.<br>Quando sabemos que uma função pode levar algum tempo para ser concluída e desejamos aguardar a conclusão antes de executar a próxima, chamamos de **assincronicidade** ex:
- "Enviar uma requisição web e aguardar a resposta"
- "Salvar dados em um arquivo ou banco de dados local"

|Para isso utilizamos **Promise** ou Promessa|
|-|
|Aqui está um exemplo de como utilizar **Promise,  async e await** forçando um tempo com **setTimeout**:|

```JavaScript
function tempo(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function facaAlgo() {
  console.log('Inicio');
  await tempo(2000); // Aguarda 2000 milissegundos (2 segundos)
  console.log('Fim');
}

facaAlgo();
```
|Contexto|
|-|
|Neste exemplo, temos a função **tempo(ms)** que retorna uma **Promise** que é resolvida após um determinado tempo especificado em milissegundos usando **setTimeout()**.<br>A função **facaAlgo()** é definida com a palavra-chave **async**, o que significa que ela retorna uma Promise. Dentro dela, usamos o await para aguardar a resolução da Promise retornada por delay(2000). Durante esse tempo de espera, a execução do código é pausada.<br>No exemplo, o console exibirá **"Inicio"** imediatamente e, em seguida, aguardará **2 segundos** antes de exibir **"Fim"**. Isso ocorre porque o **await** pausa a execução da função facaAlgo() até que a Promise seja resolvida após o tempo especificado.<br>Por fim, a função facaAlgo() é chamada, iniciando o processo assíncrono.|

|**Promise,  async e await**|
|-|
|Segue outro exemplo com uma analogia do nosso cotidiano **Promise,  async e await** novamente forçando um tempo com **setTimeout**:|

```JavaScript
//Exemplo da execução sincronizada JavaScript padrão
//Função normal com uma simulação de tempo com setTimeout
function voltarDoBanheiro(aluno){
    setTimeout(() => console.log(`${aluno.nome} voltou do banheiro`), aluno.tempo);
}
//Lista de objetos(Alunos que precisam ir ao banheiro)
var alunos = [
        { nome:'Camacho', tempo:3000 },
        { nome:'Larissa', tempo:2000 },
        { nome:'Karen', tempo:1000 },
    ];
//Função que simula os pedidos sincronos (todos ao mesmo tempo)
function pedidos(){
    alunos.forEach(aluno =>{
        console.log(`${aluno.nome} pede para ir ao banheiro`);
        voltarDoBanheiro(aluno);
    });
}
pedidos();

//Exemplo com assincronicidade - Fila para o banheiro
//Função que retorna uma promessa de que o aluno vai voltar
function voltarDoBanheiro(aluno){
    return new Promise(res => {
        setTimeout(() => {
            console.log(`${aluno.nome} voltou do banheiro`)
            res();
            }, aluno.tempo);
    });
}
//Lista de objetos(Alunos que precisam ir ao banheiro)
var alunos = [
        { nome:'Camacho', tempo:3000 },
        { nome:'Larissa', tempo:2000 },
        { nome:'Karen', tempo:1000 },
    ];
//Função que simula os pedidos assincronos (um de cada vez em fila)
async function pedidos(){
    for(let i =0; i < alunos.length; i++){
        console.log(`${alunos[i].nome} pede para ir ao banheiro`);
        await voltarDoBanheiro(alunos[i]);
    };
}
pedidos();
```

|Exercício|
|-|
|Conforme exemplo anterior crie um programa que calcule o **montante** de vários aportes de um investimento conforme os dados a seguir:<br>O programa deverá calcular e mostrar na tela o acúmulo investido e aguardar o tempo de meio segundo entre os meses|
```javascript
aportes = [
    { mes: 'Janeiro', aporte:500, juros: 0.001 },
    { mes: 'Fevereiro', aporte:300, juros: 0.003 },
    { mes: 'Março', aporte:250, juros: 0.005 },
    { mes: 'Abril', aporte:300, juros: 0.01 },
    { mes: 'Maio', aporte:100, juros: 0.007 },
    { mes: 'Junho', aporte:0, juros: 0.005 },
    { mes: 'Julho', aporte:0, juros: 0.003 },
    { mes: 'Agosto', aporte:300, juros: 0.008 },
    { mes: 'Setembro', aporte:400, juros: 0.011 },
    { mes: 'Outubro', aporte:200, juros: 0.01 },
]
```