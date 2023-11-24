class Pneu {
    constructor(aro, largura) {
        this.aro = aro;
        this.largura = largura;
    }
}

class Motor{
    constructor(nome){
        this.nome = nome;
    }
}

class Carro{
    constructor(marca, modelo, motor, pneus){
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.pneus = pneus;
    }
}

const pneu = new Pneu(13,165);
const pneus = [pneu, pneu, pneu, pneu];
const motor = new Motor('Ztec');
const carro =  new Carro('Ford','Fiesta', motor, pneu);

console.log(carro);