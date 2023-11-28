# Polimorfismo
Um dos pilares da POO é a capacidade de trabalhar com métodos/funções de forma dinâmica. Em programação estruturada duas funções distintas não podem ter o mesmo nome e estar no mesma camada de código.
Já esta capacidade em POO é conhecida como polimorfismo. onde funções de mesmo nome podem ser sobrepostas através de relação de Herança ou Implementação de interface e isso é conhecido como **Sobrescrita de métodos** ou podem estar na mesma classe com parâmetros diferentes **Sobrecarga de métodos**

- O JavaScript não suporta sobrecarga de métodos, então o que acontece é que o método que é declarado por último é o que fica valendo.

- animais.js
```js
//Utilizaremos a classe Animal para exemplificar o polimorfismo
// Polimorfismo é a capacidade de um objeto poder ser referenciado de várias formas
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log(`${this.nome} faz um som`);
    }
}

//Além de herança, o polimorfismo também pode ser utilizado com classes abstratas
class Cachorro extends Animal {
    constructor(nome, faro) {
        super(nome);
        this.faro;
    }
    //Sobrescrita de métodos (Primeira característica do Polimorfismo)
    emitirSom() {
        console.log(`${this.nome} faz au au`);
    }
    abanarRabo(){
        console.log(`${this.nome} abana o rabo`);
    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome);
    }
    //Sobrescrita de métodos (Primeira característica do Polimorfismo)
    emitirSom() {
        console.log(`${this.nome} faz miau`);
    }
}

const cachorro1 = new Cachorro('Rex',90);
const cachorro2 = new Cachorro('Ney',30);
const gato1 = new Gato('Mimi');

cachorro1.emitirSom();
cachorro2.abanarRabo();
gato1.emitirSom();

// Segunda característica do Polimorfismo
// Sobrecarga de métodos (Métodos com o mesmo nome, mas com parâmetros diferentes)
class Matematica{
    somar(a,b){
        console.log(a+b);
    }
    somar(a,b,c){
        console.log(a+b+c);
    }
}

console.log("Sobrecarga de métodos 1");
const matematica = new Matematica();
matematica.somar(10,20);
matematica.somar(10,20,30);
// O JavaScript não suporta sobrecarga de métodos, então o que acontece é que o método que é declarado por último é o que fica valendo.
// Para simular a sobrecarga de métodos, podemos fazer o seguinte:
class Matematica2{
    somar(a,b,c){
        if(c === undefined){
            console.log(a+b);
        }else{
            console.log(a+b+c);
        }
    }
}

console.log("Sobrecarga de métodos 2");
const matematica2 = new Matematica2();
matematica2.somar(10,20);
matematica2.somar(10,20,30);

```