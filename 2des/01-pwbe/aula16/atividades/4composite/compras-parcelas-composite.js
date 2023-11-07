//Classe compra com construtor simples e cálculo do total
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
    }
    getTotal() {
        return this.preco * this.quantidade
    }
    addParcela(parcela) {
        this.parcelas.push(parcela)
    }
}

//Classe parcela com construtor simples e calculos do valor da parcela, dias de atraso e juros caso haja atraso
class Parcela {
    constructor(id, compra, dataVencimento, dataPagamento) {
        this.id = id
        this.compra = compra
        this.dataVencimento = new Date(dataVencimento)
        this.dataPagamento = dataPagamento != null && dataPagamento != undefined ? new Date(dataPagamento) : undefined
        this.valorParcela = this.getValorParcela()
        this.Juros = this.getJuros()
    }
    getValorParcela() {
        return this.compra.totalParcelas > 0 ? this.compra.total / this.compra.totalParcelas : this.compra.total
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

//**Componente** define a interface para todos os componentes da árvore
class Componente {
    constructor(obj) {
        this.obj = obj;
    }

    add(component) { }
    remove(component) { }
    getChild(index) { }
    getObj() { }
    print() { }
}

// **Folha** representa os objetos folha na árvore
class Folha extends Componente {
    constructor(obj) {
        super(obj);
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
    }
}

//**Composite** representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        const index = this.children.indexOf(component);
        this.children.splice(index, 1);
    }

    getChild(index) {
        return this.children[index];
    }

    getObj() {
        return this.obj;
    }

    print() {
        console.log(this.obj);
        this.children.forEach(child => {
            child.print();
        });
    }
}

//Executar testes
//Lista de objetos do tipo Compra
const compras = [
    new Compra(1, '2022-03-25', 'TV LCD 4K 50" LG', 'Jair Santana', 4, 2800.00, 2),
    new Compra(2, '2022-05-12', 'TV LCD 4K 50" Sansung', 'Jurema Santana', 2, 3100.00, 1),
    new Compra(3, '2022-06-08', 'TV LCD 4K 50" LG', 'Mariana Silva', 3, 2850.00, 2),
    new Compra(4, '2023-02-17', 'TV LCD 4K 50" Sansung', 'Marta Oliveira', 5, 2899.90, 1),
]

//Lista de objetos do tipo Parcelasa
const parcelas = [
    new Parcela(1, compras[0], '2022-04-25', '2022-04-23'),
    new Parcela(2, compras[0], '2022-05-25', '2022-05-24'),
    new Parcela(3, compras[0], '2022-06-25', '2022-06-27'),
    new Parcela(4, compras[0], '2022-07-25', '2022-07-30'),
    new Parcela(5, compras[1], '2022-06-12', '2022-06-12'),
    new Parcela(6, compras[1], '2022-07-12', '2022-07-15'),
    new Parcela(7, compras[2], '2022-07-08', '2022-07-18'),
    new Parcela(8, compras[2], '2022-08-08', '2022-08-08'),
    new Parcela(9, compras[2], '2022-09-08', '2022-09-06'),
    new Parcela(10, compras[3], '2023-03-17', '2023-03-20'),
    new Parcela(11, compras[3], '2023-04-17', '2023-04-22'),
    new Parcela(12, compras[3], '2023-05-17', null),
    new Parcela(13, compras[3], '2023-06-17', null),
    new Parcela(14, compras[3], '2023-07-17')
]

const compra1 = new Composite(compras[0])
compra1.add(new Folha(parcelas[0]))
compra1.add(new Folha(parcelas[1]))
compra1.add(new Folha(parcelas[2]))
compra1.add(new Folha(parcelas[3]))
//compra1.print();

const compra2 = new Composite(compras[1])
compra2.add(new Folha(parcelas[4]))
compra2.add(new Folha(parcelas[5]))
//compra2.print();

const compra3 = new Composite(compras[2])
compra3.add(new Folha(parcelas[6]))
compra3.add(new Folha(parcelas[7]))
compra3.add(new Folha(parcelas[8]))
//compra3.print();

const compra4 = new Composite(compras[3])
compra4.add(new Folha(parcelas[9]))
compra4.add(new Folha(parcelas[10]))
compra4.add(new Folha(parcelas[11]))
compra4.add(new Folha(parcelas[12]))
compra4.add(new Folha(parcelas[13]))
compra4.print();
console.log(compra1)