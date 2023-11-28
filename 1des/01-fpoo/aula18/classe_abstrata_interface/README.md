# Classe Abstrata e Interface
## Classe Abstrata
Uma classe que não é instanciada diretamente, existe somente para que seus atributos e métodos sejam herdados por outras classes.

## Interface
É uma estrutura de organização de métodos, onde são listados métodos de um determinado assunto que devem ser implementados em classes finais.

## Exemplos
- animais.js
```js
//Classe abstrata
//Classe abstrata é uma classe que não pode ser instanciada, mas pode ser herdada
//JavaScript não trabalha com classe abstrata diretamente (mas é possível simular)
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log(`${this.nome} faz um som`);
    }
}

class Cachorro extends Animal {
    constructor(nome, faro) {
        super(nome);
        this.faro;
    }
    emitirSom() {
        console.log(`${this.nome} faz au au`);
    }
    abanarRabo(){
        console.log(`${this.nome} abana o rabo`);
    }
}
```

- interface.js
```js
//Exemplo de POO interface em javascript
//A interface é um contrato que a classe que a implementa deve seguir
//JavaScript não trabalha com interface diretamente (mas é possível simular)
//Segue uma interface com método emitirSom

class Animal {
    emitirSom() {
        throw new Error("O método emitirSom deve ser implementado");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("Au au");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miau");
    }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.emitirSom();
gato.emitirSom();


```