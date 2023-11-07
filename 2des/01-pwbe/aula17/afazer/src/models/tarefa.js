class Task {

    constructor(i) {
        this.id = i.id
        this.descricao = i.descricao
        this.quando = i.quando
    }

    create() {
        return `INSERT INTO tarefas VALUE(default,'${this.descricao}','${this.quando}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM tarefas`
        else
            return `SELECT * FROM tarefas WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE tarefas SET descricao = '${this.descricao}', quando = '${this.quando.toLocaleString('pt-BR').replace("T"," ")}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM tarefas WHERE id = ${this.id}`
    }
}

module.exports = Task