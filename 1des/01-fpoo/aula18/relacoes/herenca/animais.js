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

class Gato extends Animal {
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        console.log(`${this.nome} faz miau`);
    }
}

const cachorro1 = new Cachorro('Rex',90);
const cachorro2 = new Cachorro('Ney',30);
const gato1 = new Gato('Mimi');

cachorro1.emitirSom();
cachorro2.abanarRabo();
gato1.emitirSom();