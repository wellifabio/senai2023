//Representa o objeto raíz da árvore
class Veiculo {
    constructor(placa, modelo, marca, ano, diaria) {
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.idade = new Date().getFullYear() - ano
        this.diaria = diaria
    }
}

// representa os objetos folha na árvore
class Aluguel {
    constructor(id, veiculo, dataRetirada, dataDevolucao) {
        this.id = id
        this.dataRetirada = new Date(dataRetirada)
        this.dataDevolucao = new Date(dataDevolucao)
        this.valorAluguel = Number(((new Date(dataDevolucao) - new Date(dataRetirada)) / (1000 * 60 * 60 * 24) * veiculo.diaria).toFixed(2))
    }
}

//Interface - Patthern
class Componente {
    constructor(obj) {
        this.veiculo = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
}

// representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.alugueis = [];
    }
    add(componente) {
        this.alugueis.push(componente);
    }
    remove(componente) {
        const index = this.alugueis.indexOf(componente);
        this.alugueis.splice(index, 1);
    }
    getfilho(index) {
        return this.alugueis[index];
    }
    getObj() {
        return this.obj;
    }
}


//Testes
const veiculos = [
    new Veiculo('JHK-2518', 'Uno', 'Fiat', 2015, 75.9),
    new Veiculo('PBC-5A58', 'Gol', 'VW', 2018, 99.9),
    new Veiculo('CCB-2F19', 'Celta', 'Chevrolet', 2007, 49.9)
]

const alugueis = [
    new Aluguel(1, veiculos[0], '2023-04-01', '2023-04-06'),
    new Aluguel(2, veiculos[1], '2023-04-01', '2023-04-08'),
    new Aluguel(3, veiculos[1], '2023-04-02', '2023-04-07'),
    new Aluguel(4, veiculos[2], '2023-04-07', '2023-04-16'),
    new Aluguel(5, veiculos[0], '2023-04-08', '2023-04-16')
]

const composicao1 = new Composite(veiculos[0]);
composicao1.add(alugueis[0]);
composicao1.add(alugueis[4]);

const composicao2 = new Composite(veiculos[1]);
composicao2.add(alugueis[1]);
composicao2.add(alugueis[2]);

const composicao3 = new Composite(veiculos[2]);
composicao3.add(alugueis[3]);

console.log(composicao1);
console.log(composicao2);
console.log(composicao3);