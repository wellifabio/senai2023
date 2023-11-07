class venda {
    constructor(venda) {
        this.data = this.formataData(venda.data),
        this.vendedor = venda.vendedor,
        this.produto = venda.produto,
        this.quantidade = venda.quantidade
    }

    formataData(data) {
        return Intl.DateTimeFormat('pt-BR', {dateStyle: 'short', timeStyle: 'short'}).format(data);
    }
}

module.exports = venda