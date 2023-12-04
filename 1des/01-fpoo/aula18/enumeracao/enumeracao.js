//Enumeração com Classes e Objetos
//Enumeração é um tipo de dado que consiste em um conjunto de valores nomeados

//Exempo de uma lista simples que vamos enumerar a seguir
const diasSem = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];
//Acessando os valores da lista
console.log(diasSem[3]);

//Enumeração com objeto
const diasSeman = {
    DOM: 'Domingo',
    SEG: 'Segunda-feira',
    TER: 'Terça-feira',
    QUA: 'Quarta-feira',
    QUI: 'Quinta-feira',
    SEX: 'Sexta-feira',
    SAB: 'Sábado'
};

//Acessando os valores do objeto
console.log(diasSeman.DOM);
console.log(diasSeman['SEG']);

//Enumeração com classe
//Classe com atributos simpes, para exemplo de enumeração
class DiasSemana {
    DOMINGO = 'Domingo';
    SEGUNDA = 'Segunda-feira';
    TERCA = 'Terça-feira';
    QUARTA = 'Quarta-feira';
    QUINTA = 'Quinta-feira';
    SEXTA = 'Sexta-feira';
    SABADO = 'Sábado';
}

//Teste com atributos simples
//Instãncia da classe
const diasSemana = new DiasSemana();
//Acessando os atributos da classe
console.log(diasSemana.DOMINGO);

//Classe com atributos estáticos  não precisa ser instanciada para ser utilizada
class DiasStatic {
    static DOMINGO = 'Domingo';
    static SEGUNDA = 'Segunda-feira';
    static TERCA = 'Terça-feira';
    static QUARTA = 'Quarta-feira';
    static QUINTA = 'Quinta-feira';
    static SEXTA = 'Sexta-feira';
    static SABADO = 'Sábado';
}
//Teste com atributos estáticos
console.log(DiasStatic.DOMINGO);