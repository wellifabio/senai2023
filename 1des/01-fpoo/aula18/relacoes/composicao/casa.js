//Composição
//Na composição, diferente da agregação, quando o objeto-todo é destruido, suas partes também são
class Casa{
    constructor(endereco){
        this.endereco = endereco;
    }
}
//Objetos diretos
let quarto = tamanho => `${tamanho} m2`;
let cozinha = tipo => `${tipo}`;
let banheiro = tamanho => `${tamanho} m2`;

let minhaCasa = new Casa('Jardim das Laranjeiras'); //Objeto-Todo
minhaCasa.cozinha =  cozinha('Americana');// Objeto-Parte
minhaCasa.quarto = quarto(16);// Objeto-Parte
minhaCasa.banheiro = banheiro(6);// Objeto-Parte
console.table(minhaCasa);
//Até aqui, temos uma casa com 1 quarto, 1 cozinha, 1 banheiro e 1 endereço

//Agora, ao apagar-mos o conteudo de "minhaCasa", apagaremos todo o resto
minhaCasa = null
console.log(minhaCasa.cozinha)
//Podemos ver que a cozinha, o quarto e o banheiro se foram, por isso deu erro dizendo
//"Cannot read properties of null"      sendo "null" vazio ou seja, não existe