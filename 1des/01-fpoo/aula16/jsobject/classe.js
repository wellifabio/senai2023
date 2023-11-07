//Classe
class Pessoa {
    //Atributos
    nome;
    nascimento;
    sexo;
    //Métodos
    idade() {
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

//Instância
var p = new Pessoa();
p.nome = "Maria";
p.nascimento = new Date(1990, 5, 21);
p.sexo = "F";
pessoas.push(p);

//Instância
p = new Pessoa();
p.nome = "João";
p.nascimento = new Date(1985, 3, 12);
p.sexo = "M";
pessoas.push(p);

//Instância
p = new Pessoa();
p.nome = "José";
p.nascimento = new Date(1980, 8, 30);
p.sexo = "M";
pessoas.push(p);

console.table(pessoas);
console.log(pessoas[0].nome);
console.log(pessoas[0].idade());
console.log(pessoas[1].nome);
console.log(pessoas[1].idade());
console.log(pessoas[2].nome);
console.log(pessoas[2].idade());

