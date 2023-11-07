# Aula11 - JavaScript

Criação de novos item utilizando cloneNode

## Objetivos
- Criar um elemento utilizando a função cloneNode
- Aplicar os conceitos vistos na aula 17 de FPOO

## Prática

- index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <form id="formPessoa">
        <input type="text" id="nome" name="nome" placeholder="Digite um nome:">
        <input type="number" id="salario" name="salario" placeholder="Digite um salario:">
        <input type="submit" value="Enviar">
    </form>

    <div class="cards">
        <div class="card model">
            <button class="btnDel" onclick="deleteCard(this)">X</button>
            <h1 class="nomeValor">Nome</h1>
            <h4 class="salarioValor">1000</h4>
            <h4 class="salarioBase">1000</h4>
            <h4 class="salarioLiquido">1000</h4>
        </div>
    </div>
    
</body>
<script src="pessoa.js"></script>
<script src="viewController.js"></script>
</html>
```
- script.js
```javascript
class Pagamento {
    //Método construtor
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
        this.salarioBase = (this.salario - this.inss()).toFixed(2);
        this.salarioLiquido = (this.salarioBase - this.irrf()).toFixed(2);
    }

    //Métodos de cálculo
    inss() {
        if (this.salario < 1320.01)
            return this.salario * 7.5 / 100;
        else if (this.salario < 2571.30)
            return this.salario * 9 / 100;
        else if (this.salario < 3856.95)
            return this.salario * 12 / 100;
        else if (this.salario < 7507.49)
            return this.salario * 14 / 100;
        else
            return 1051.05;
    }

    irrf() {
        if (this.salario < 1903.99)
            return 0;
        else if (this.salario < 2826.66)
            return this.salario * 7.5 / 100 - 142.8;
        else if (this.salario < 3751.06)
            return this.salario * 15 / 100 - 354.8;
        else if (this.salario < 4664.69)
            return this.salario * 22.5 / 100 - 636.13;
        else
            return this.salario * 27.5 / 100 - 869.36;
    }
}

const pgto1 = new Pagamento("João", 2689);
```
---

```javascript
const formPessoa = document.querySelector('#formPessoa');
const pessoas = [];

formPessoa.addEventListener('submit', (e) => {
    e.preventDefault();
    pessoas.push(new Pagamento(formPessoa.nome.value, formPessoa.salario.value));
    criarCard();
})

function criarCard(){
    const cards = document.querySelector('.cards');
    let card = document.querySelector('.card');
    cards.innerHTML = ''
    cards.appendChild(card)
    
    pessoas.forEach(pessoa => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.querySelector(".nomeValor").innerHTML = pessoa.nome;
        cardNew.querySelector(".salarioValor").innerHTML = pessoa.salario;
        cardNew.querySelector(".salarioBase").innerHTML = pessoa.salarioBase;
        cardNew.querySelector(".salarioLiquido").innerHTML = pessoa.salarioLiquido;
        cards.appendChild(cardNew);
    })
}

function deleteCard(e){
    e.parentNode.remove();
    pessoas.splice(e, 1);
}
```
## Atividade prática

- Crie um botão para excluir o card desejado
- Crie um botão para editar o card desejado
