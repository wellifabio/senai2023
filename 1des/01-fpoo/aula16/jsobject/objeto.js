//Objeto
const pessoa = {};

//Atributos
pessoa.nome = 'Lucas';
pessoa.nascimento = new Date('1980-09-08');
pessoa.sexo = 'M';

//Método
pessoa.idade = () => {
    let hoje = new Date();
    let difAno = hoje.getFullYear() - pessoa.nascimento.getFullYear();
    let difMes = hoje.getMonth() - pessoa.nascimento.getMonth();
    let difDia = hoje.getDate() - pessoa.nascimento.getDate();
    if (difMes < 0 || (difMes == 0 && difDia < 0)) {
        difAno--;
    }
    return difAno;
}

console.log(pessoa.nome);
console.log(pessoa.idade());