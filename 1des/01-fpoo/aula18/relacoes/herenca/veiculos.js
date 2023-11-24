//Super classe ou Mãe, pai
class Marca {
    constructor(nome){
        this.nome = nome;
    }

    FalarMarca(){
        return `Eu sou o carro da marca ${this.nome}`;
    }
}

//Sun classe ou filha
class Modelo extends Marca {
    constructor(marca,modelo){
        super(marca);
        this.modelo = modelo;
    }

    FalarModelo(){
        return `${this.FalarMarca()} e sou o modelo ${this.modelo}`;
    }
}

carro1 = new Modelo("Peugeot", "206 Quiksilver");

console.table(carro1);