class Aluno {

    constructor(ra, nome, nascto, idTurma) {
        this.ra = ra
        this.nome = nome
        this.nascto = nascto
        this.idTurma = idTurma
        this.idade = this.calcIdade()
    }

    calcIdade() {
        const today = new Date();
        const nascto = new Date(this.nascto);
        let idade = today.getFullYear() - nascto.getFullYear();
        const monthDiff = today.getMonth() - nascto.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < nascto.getDate())) {
            idade--;
        }
        return idade;
    }
}

module.exports = Aluno