//Classe
class Pessoa {
    //Atributos
    nome;
    nascimento;
    sexo;
    idade;

    //Método Construtor
    constructor(nome, nascimento, sexo) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.sexo = sexo;
        this.idade = this.calcIdade(); //Atributo calculado
    }

    //Métodos
    calcIdade() {
        if (this.nascimento == undefined) return 0;
        let hoje = new Date();
        let difAno = hoje.getFullYear() - this.nascimento.getFullYear();
        let difMes = hoje.getMonth() - this.nascimento.getMonth();
        let difDia = hoje.getDate() - this.nascimento.getDate();
        if (difMes < 0 || (difMes == 0 && difDia < 0)) {
            difAno--;
        }
        return difAno;
    }
}

//Lista de objetos
const pessoas = [];

//Instância da classe pessoa
const p1 = new Pessoa();
p1.nome = "Jair";
p1.nascimento = new Date(1985, 8, 30);
p1.sexo = "M";
pessoas.push(p1);
console.log(p1.nome);
console.log(p1.calcIdade());

//Instância utilizando o Consrtrutor
const p2 = new Pessoa("Mariana", new Date(1980, 8, 30), "F");
pessoas.push(p2);

//Atribuindo objeto diretamente na lista
pessoas.push(new Pessoa("Maria", new Date(1990, 5, 21), "F"));
pessoas.push(new Pessoa("João", new Date('1985-04-12'), "M"));

console.table(pessoas);
