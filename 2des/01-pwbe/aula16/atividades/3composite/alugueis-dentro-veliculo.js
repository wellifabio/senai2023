// Interface - Pattern Composite
class Componente {
    constructor(obj) {
        this.veiculo = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
}

// Representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
    }
    add(componente) {
        this.veiculo.alugueis.push(componente);
    }
    getfilho(index) {
        return this.veiculo.alugueis[index];
    }
    getObj() {
        return this.veiculo;
    }
}

// Classe folha da árvore (Classe que calcula o valor do aluguel)
class Aluguel {
    constructor(id, veiculo, dataRetirada, dataDevolucao) {
        this.id = id
        this.dataRetirada = new Date(dataRetirada)
        this.dataDevolucao = new Date(dataDevolucao)
        this.valorAluguel = Number(((new Date(dataDevolucao) - new Date(dataRetirada)) / (1000 * 60 * 60 * 24) * veiculo.diaria).toFixed(2))
    }
}

//Objetos raízes da árvore
const veiculos = [
    { placa: 'JHK-2518', modelo: 'Uno', marca: 'Fiat', ano: 2015, diaria: 75.9, alugueis:[] },
    { placa: 'PBC-5A58', modelo: 'Gol', marca: 'VW', ano: 2018, diaria: 99.9, alugueis:[] },
    { placa: 'CCB-2F19', modelo: 'Celta', marca: 'Chevrolet', ano: 2007, diaria: 49.9, alugueis:[] }
]

//Objetos folhas na árvore
const alugueis = [
    new Aluguel(1, veiculos[0], '2023-04-01', '2023-04-06'),
    new Aluguel(2, veiculos[1], '2023-04-01', '2023-04-08'),
    new Aluguel(3, veiculos[1], '2023-04-02', '2023-04-07'),
    new Aluguel(4, veiculos[2], '2023-04-07', '2023-04-16'),
    new Aluguel(5, veiculos[0], '2023-04-08', '2023-04-16')
]

//Testes
const composicao1 = new Composite(veiculos[0]);
composicao1.add(alugueis[0]);
composicao1.add(alugueis[4]);

const composicao2 = new Composite(veiculos[1]);
composicao2.add(alugueis[1]);
composicao2.add(alugueis[2]);

const composicao3 = new Composite(veiculos[2]);
composicao3.add(alugueis[3]);

console.log(composicao1);
console.log(composicao1.getfilho(0));
console.log(composicao1.getfilho(1));
console.log(composicao2);
console.log(composicao2.getfilho(0));
console.log(composicao2.getfilho(1));
console.log(composicao3);
console.log(composicao3.getfilho(0));