class Tarefa {

    constructor(i) {
        this.id = i.id
        this.descricao = i.descricao
        this.quando = i.quando
    }

    //Métodos CRUD - SQL(DML)
    create(){
        return `INSERT INTO tarefas(descricao,quando) VALUES('${this.descricao}','${this.quando}')`
    }

    read(){
        return `SELECT * FROM tarefas ORDER BY quando`
    }

    update(){
        return `UPDATE tarefas SET descricao = '${this.descricao}', quando = '${this.quando}' WHERE id = ${this.id}`
    }

    del(){
        return `DELETE FROM tarefas WHERE id=${this.id}`
    }
}

module.exports = Tarefa