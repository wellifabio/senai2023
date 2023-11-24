class Carro{
    constructor(marca, modelo, cor){
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    get cor(){
        return this._cor;
    }
    set cor(novaCor){
        this._cor = novaCor;
    }

    exibirDados(){
        console.log(`Marca: ${this._marca} Modelo: ${this._modelo} Cor: ${this._cor}`);
    }
}

const meuCarro = new Carro("VW","Kombi","Branca");
meuCarro.exibirDados();

console.log(meuCarro.marca);
meuCarro.cor = "Azul";
console.log(meuCarro.cor);