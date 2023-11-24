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

