function retornaInteiro() {
    return 0
}

function retornaString() {
    return 'oi'
}

function retornaParametro(param) {
    return param
}

function procedimento(param) {
    //console.log(param)
    setTimeout(() => console.log(param), 1000);
}

//Chamadas de função
console.log(retornaInteiro())
console.log(retornaString())
console.log(retornaParametro(10 + 10))
console.log(procedimento('teste'))

//As mesmas funções escritas em forma de flecha
const arrowRetornaInteiro = () => {
    return 0
}

const arrowRetornaString = () => {
    return 'oi'
}

const arrowRetornaParametro = (param) => {
    return param
}

const arrowProcedimento = (param) => {
    setTimeout(() => console.log(param), 1000);
}

console.log(arrowRetornaInteiro())
console.log(arrowRetornaString())
console.log(arrowRetornaParametro(10 + 10))
console.log(arrowProcedimento('teste'))