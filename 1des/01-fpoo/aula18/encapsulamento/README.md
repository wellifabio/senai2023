# Encapsulamento
Outro pilar da POO é a capacidade de ocultar códigos desnecessários, como atributos que podem ser acessados somente via métodos de acesso (get/set) ou construtores.

## Exemplo:
Novamente a linguagem javascript usada nom exemplo pode apenas simular este comportamento.
- carro.js
```js
class Carro{
    constructor(marca, modelo, cor){
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    get cor(){
        return this._cor;
    }
    set cor(novaCor){
        this._cor = novaCor;
    }

    exibirDados(){
        console.log(`Marca: ${this._marca} Modelo: ${this._modelo} Cor: ${this._cor}`);
    }
}

const meuCarro = new Carro("VW","Kombi","Branca");
meuCarro.exibirDados();

console.log(meuCarro.marca);
meuCarro.cor = "Azul";
console.log(meuCarro.cor);
```

- patrimonio.js
```js
//Classe ítem com dois atributos não encapsulados
class Item {
    nome;
    valor;    
}

const item1 = new Item();
item1.nome = "Armário";
item1.valor = 100;

console.log("Item sem encapsulamento");
console.log(item1.nome);
console.log(item1.valor);

//Classe ItemEncapsulado com dois atributos encapsulados
class ItemEncapsulado {

    nome;
    valor;

    setNome(nome) {
        this.nome = nome;
    }

    setValor(valor) {
        this.valor = valor;
    }

    getNome() {
        return this.nome;
    }

    getValor() {
        return `R$ ${this.valor.toFixed(2)}`;
    }

}

const item2 = new ItemEncapsulado();
item2.setNome("Armário");
item2.setValor(100);

console.log("Item com encapsulamento");
console.log(item2.getNome());
console.log(item2.getValor());

```