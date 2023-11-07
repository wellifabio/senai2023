class Vendedor {
    constructor(data) {
        this.id = data.id,
        this.nome = data.nome,
        this.matricula = data.matricula
    }

    toUpdate(data) {
        let baseQuery = `UPDATE vendedores SET  WHERE id = ${this.id}`;

        let keys = Object.keys(data);

        
    }
}