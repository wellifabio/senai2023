class Moeda {

    constructor(obj) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.sigla = obj.sigla;
        this.valor = obj.valor;
    }

    listar() {
        if (this.id != undefined) {
            return `SELECT * FROM moedas WHERE id = ${this.id}`;
        } else {
            return `SELECT * FROM moedas`;
        }
    }

    criar() {
        return `INSERT INTO moedas (nome, sigla, valor) VALUES ('${this.nome}', '${this.sigla}', ${this.valor})`;
    }

    update() {
        return `UPDATE moedas SET nome = '${this.nome}', sigla = '${this.sigla}', valor = ${this.valor} WHERE id = ${this.id}`;
    }

    delete() {
        return `DELETE FROM moedas WHERE id = ${this.id}`;
    }
}

module.exports = Moeda;