# Classe Interna e Oculta
Como o nome diz é uma classe dentro de outra, algumas linguagens como Java por exemplo permitem a criação de classes dentro de outras classes para simplificar pequenas tarefas.

## Exemplo com JavaScript
- compras.js
```js
//JavaScript não trabalha com classe interna diretamente (mas é possível simular)
//Segue uma classe Compras com uma lista de itens de compra
class Compras {
    constructor(data) {
        this.data = data;
        this.itens = [];
    }
}

class Item {
    constructor(produto, quantidade, valor) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}

console.log("Classe interna simulada");
const compra1 = new Compras(new Date());
compra1.itens.push(new Item('Arroz', 5, 10));
compra1.itens.push(new Item('Feijão', 5, 20));
compra1.itens.push(new Item('Macarrão', 5, 30));
console.log(compra1);

//Classe oculta (Uma classe sem um nome que pode ser atribuída a uma variável)
//Para simular uma classe oculta, podemos fazer o seguinte:
const Pessoa = class{
    constructor(nome){
        this.nome = nome;
    }
}

console.log("Classe oculta simulada");
const p1 = new Pessoa('João');
console.log(p1);
```
