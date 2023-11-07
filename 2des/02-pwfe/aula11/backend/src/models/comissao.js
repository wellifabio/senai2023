class comissao {
    constructor(vendedor) {
        this.vendedor = vendedor.nome,
        this.matricula = vendedor.matricula,
        this.total = vendedor.total,
        this.comissao = this.calcComissao();
    }

    calcComissao() {
        return Number((this.total * 0.05).toFixed(2));
    }
}

module.exports = comissao