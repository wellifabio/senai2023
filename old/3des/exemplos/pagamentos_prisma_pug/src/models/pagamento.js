class Pagamento {
    constructor(i, motivo) {
        if (motivo == "ler") {
            this.matricula = Number(i.matricula)
            this.nomeCompleto = i.nomeCompleto
            this.salarioMensal = Number(i.salarioMensal)
            this.data = new Date(i.data)
            this.inssPorcento = Number(this.inssPorcento())
            this.inssValor = Number(this.inssValor())
            this.irrfPorcento = Number(this.irrfPorcento())
            this.irrfValor = Number(this.irrfValor())
            this.salarioLiquido = Number(this.salarioLiquido())
        }
        if (motivo == "criar") {
            this.nomeCompleto = i.nomeCompleto
            this.salarioMensal = Number(i.salarioMensal)
        }
        if (motivo == "alterar") {
            this.matricula = Number(i.matricula)
            this.nomeCompleto = i.nomeCompleto
            this.salarioMensal = Number(i.salarioMensal)
            this.data = new Date(i.data)
        }
    }

    inssPorcento() {
        if (this.salarioMensal < 1302.01) return 0.07
        else if (this.salarioMensal < 2571.3) return 0.09
        else if (this.salarioMensal < 3856.95) return 0.12
        else if (this.salarioMensal < 7507.5) return 0.14
        else return 0
    }

    inssDeduzir() {
        if (this.salarioMensal < 1302.01) return 0
        else if (this.salarioMensal < 2571.3) return 19.53
        else if (this.salarioMensal < 3856.95) return 96.67
        else return 173.8
    }

    inssValor() {
        if (this.inssPorcento > 0)
            return (this.salarioMensal * this.inssPorcento - this.inssDeduzir())
        else return 877.7
    }

    irrfPorcento() {
        if ((this.salarioMensal - this.inssValor) < 1903.99) return 0
        else if ((this.salarioMensal - this.inssValor) < 2826.66) return 0.075
        else if ((this.salarioMensal - this.inssValor) < 3751.06) return 0.15
        else if ((this.salarioMensal - this.inssValor) < 4664.68) return 0.225
        else return 0.275
    }

    irrfDeduzir() {
        if ((this.salarioMensal - this.inssValor) < 1903.99) return 0
        else if ((this.salarioMensal - this.inssValor) < 2826.66) return 142.8
        else if ((this.salarioMensal - this.inssValor) < 3751.06) return 354.8
        else if ((this.salarioMensal - this.inssValor) < 4664.68) return 636.13
        else return 869.36
    }

    irrfValor() {
        return ((this.salarioMensal - this.inssValor) * this.irrfPorcento - this.irrfDeduzir())

    }

    salarioLiquido() {
        return (this.salarioMensal - this.inssValor - this.irrfValor)
    }
}

module.exports = Pagamento