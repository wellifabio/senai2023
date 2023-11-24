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