class Funcao {
    constructor(nome) {
        this.nome = nome;
    }
}

class Cargo {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
        this.funcoes = [];
    }
    addFuncao(funcao) {
        this.funcoes.push(funcao);
    }
}

class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
}

let cargo1 = new Cargo("Gerente", 10000);
let cargo2 = new Cargo("Supervisor", 8000);
let cargo3 = new Cargo("Analista", 5000);

let funcao1 = new Funcao("Gerenciar");
let funcao2 = new Funcao("Supervisionar");
let funcao3 = new Funcao("Analisar");
let funcao4 = new Funcao("Organizar");
let funcao5 = new Funcao("Limpar");
let funcao6 = new Funcao("Contratar");
let funcao7 = new Funcao("Demitir");

cargo1.addFuncao(funcao1);
cargo1.addFuncao(funcao4);
cargo1.addFuncao(funcao6);
cargo1.addFuncao(funcao7);

cargo2.addFuncao(funcao2);
cargo2.addFuncao(funcao4);

cargo3.addFuncao(funcao3);
cargo3.addFuncao(funcao4);
cargo3.addFuncao(funcao5);

const funcionarios = [
    new Funcionario("Ivonete", cargo1),
    new Funcionario("Mariana", cargo2),
    new Funcionario("João", cargo3)
];

console.log(funcionarios);
