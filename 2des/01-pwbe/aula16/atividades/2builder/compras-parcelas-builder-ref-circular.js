//Classe parcela com construtor simples e calculos do valor da parcela, dias de atraso e juros caso haja atraso
class Parcela {
    constructor(id, compra, dataVencimento, dataPagamento) {
        this.id = id
        this.compra = compra
        this.dataVencimento = new Date(dataVencimento)
        this.dataPagamento = dataPagamento != undefined ? new Date(dataPagamento) : undefined
        this.valorParcela = this.getValorParcela()
        this.Juros = this.getJuros()
    }
    getValorParcela() {
        return this.compra.total / this.compra.totalParcelas
    }
    getDiasAtraso() {
        if (this.dataPagamento == undefined || this.dataPagamento == null)
            return 0
        else
            if (this.dataPagamento > this.dataVencimento) {
                const diferencaEmMilissegundos = this.dataPagamento - this.dataVencimento
                const umDiaEmMilissegundos = 1000 * 60 * 60 * 24
                return Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos)
            }
            else return 0
    }
    getJuros() {
        return this.valorParcela * 0.01 * this.getDiasAtraso()
    }
}

//Classe complexa Compra composta por todas as parcelas
class Compra {
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        this.id = id
        this.data = new Date(data)
        this.produto = produto
        this.cliente = cliente
        this.totalParcelas = totalParcelas
        this.preco = preco
        this.quantidade = quantidade
        this.total = this.getTotal()
        this.parcelas = []
    }
    getTotal() {
        return this.preco * this.quantidade
    }
    addParcela(parcela) {
        this.parcelas.push(parcela);
    }
}

//Interface Builder possui 5 métodos que serão sobrescritos
class InterfaceBuilder {
    parcela1() { }
    parcela2() { }
    parcela3() { }
    parcela4() { }
    parcela5() { }
}

//Classe que constroi uma compra com 2 parcelas herdando os métodos da superclasse InterfaceBuilder e sobrescrevendo apenas 2
class Compra2P extends InterfaceBuilder {
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        super();
        this.compra = new Compra(id, data, produto, cliente, totalParcelas, preco, quantidade);
    }
    parcela1() {
        this.compra.addParcela(new Parcela(5, this.compra, '2022-06-12', '2022-06-12'))
    }
    parcela2() {
        this.compra.addParcela(new Parcela(6, this.compra, '2022-07-12', '2022-07-15'))
    }
    getParcelas() {
        return this.compra;
    }
}

//Classe que constroi uma compra com 3 parcelas herdando os métodos da superclasse InterfaceBuilder e sobrescrevendo apenas 3
class Compra3P extends InterfaceBuilder {
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        super();
        this.compra = new Compra(id, data, produto, cliente, totalParcelas, preco, quantidade);
    }
    parcela1() {
        this.compra.addParcela(new Parcela(7, this.compra, '2022-07-08', '2022-07-18'))
    }
    parcela2() {
        this.compra.addParcela(new Parcela(8, this.compra, '2022-08-08', '2022-08-08'))
    }
    parcela3() {
        this.compra.addParcela(new Parcela(9, this.compra, '2022-09-08', '2022-09-06'))
    }
    getParcelas() {
        return this.compra;
    }
}

class Compra4P extends InterfaceBuilder {
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        super();
        this.compra = new Compra(id, data, produto, cliente, totalParcelas, preco, quantidade);
    }
    parcela1() {
        this.compra.addParcela(new Parcela(1, this.compra, '2022-04-25', '2022-04-23'))
    }
    parcela2() {
        this.compra.addParcela(new Parcela(2, this.compra, '2022-05-25', '2022-05-24'))
    }
    parcela3() {
        this.compra.addParcela(new Parcela(3, this.compra, '2022-06-25', '2022-06-27'))
    }
    parcela4() {
        this.compra.addParcela(new Parcela(4, this.compra, '2022-07-25', '2022-07-30'))
    }
    getParcelas() {
        return this.compra;
    }
}
class Compra5P extends InterfaceBuilder {
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        super();
        this.compra = new Compra(id, data, produto, cliente, totalParcelas, preco, quantidade);
    }
    parcela1() {
        this.compra.addParcela(new Parcela(10, this.compra, '2023-03-17', '2023-03-200'))
    }
    parcela2() {
        this.compra.addParcela(new Parcela(11, this.compra, '2023-04-17', '2023-04-220'))
    }
    parcela3() {
        this.compra.addParcela(new Parcela(12, this.compra, '2023-05-17', null))
    }
    parcela4() {
        this.compra.addParcela(new Parcela(13, this.compra, '2023-06-17', null))
    }
    parcela5() {
        this.compra.addParcela(new Parcela(14, this.compra, '2023-07-17', null))
    }
    getParcelas() {
        return this.compra;
    }
}

class Gestor {
    constructor() {
        this.builder = null;
    }

    setBuilder(builder) {
        this.builder = builder;
    }

    constroiParcelas() {
        this.builder.parcela1()
        this.builder.parcela2()
        this.builder.parcela3()
        this.builder.parcela4()
        this.builder.parcela5()
    }
}


const gestor = new Gestor()
const builder1 = new Compra4P(1, '2022-03-25', 'TV LCD 4K 50" LG', 'Jair Santana', 4, 2800.00, 2)
const builder2 = new Compra2P(2, '2022-05-12', 'TV LCD 4K 50" Sansung', 'Jurema Santana', 2, 3100.00, 1)
const builder3 = new Compra3P(3, '2022-06-08', 'TV LCD 4K 50" LG', 'Mariana Silva', 3, 2850.00, 2)
const builder4 = new Compra5P(4, '2023-02-17', 'TV LCD 4K 50" Sansung', 'Marta Oliveira', 5, 2899.90, 1)

const compras = []

gestor.setBuilder(builder1)
gestor.constroiParcelas()
compras.push(builder1.getParcelas())

gestor.setBuilder(builder2)
gestor.constroiParcelas()
compras.push(builder2.getParcelas())

gestor.setBuilder(builder3)
gestor.constroiParcelas()
compras.push(builder3.getParcelas())

gestor.setBuilder(builder4)
gestor.constroiParcelas()
compras.push(builder4.getParcelas())

console.log(compras[0])
console.log(compras[1])
console.log(compras[2])
console.log(compras[3])
