class Paciente {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.nascimento = i.nascimento
        this.peso = i.peso
        this.altura = i.altura
        this.idade = this.calcIdade()
        this.imc = this.calcIMC()
        this.diagnostico = this.calcDiagnostico()
    }
    //Métodos CRUD
    create() {
        return `INSERT INTO pacientes VALUE(default,'${this.nome}','${this.nascimento}',${this.peso},${this.altura})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM pacientes`
        else
            return `SELECT * FROM pacientes WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE pacientes SET nome = '${this.nome}', nascimento = '${this.nascimento}', peso = ${this.peso}, altura = ${this.altura} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM pacientes WHERE id = ${this.id}`
    }

    //Métodos de cálculo
    calcIdade() {
        let hoje = new Date()
        let diffTime = Math.abs(this.nascimento - hoje)
        return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    }

    calcIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calcDiagnostico() {
        if (this.imc < 18.5)
            return 'Abaixo do peso'
        else if (this.imc < 25)
            return 'Peso ideal'
        else if (this.imc < 30)
            return 'Sobrepeso'
        else if (this.imc < 35)
            return 'Obesidade Gral I'
        else if (this.imc < 40)
            return 'Obesidade Gral II'
        else
            return 'Obesidade Gral III'
    }

}

module.exports = Paciente 