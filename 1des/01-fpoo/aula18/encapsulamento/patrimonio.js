//Classe ítem com dois atributos não encapsulados
class Item {
    nome;
    valor;    
}

const item1 = new Item();
item1.nome = "Armário";
item1.valor = 100;

console.log("Item sem encapsulamento");
console.log(item1.nome);
console.log(item1.valor);

//Classe ItemEncapsulado com dois atributos encapsulados
class ItemEncapsulado {

    nome;
    valor;

    setNome(nome) {
        this.nome = nome;
    }

    setValor(valor) {
        this.valor = valor;
    }

    getNome() {
        return this.nome;
    }

    getValor() {
        return `R$ ${this.valor.toFixed(2)}`;
    }

}

const item2 = new ItemEncapsulado();
item2.setNome("Armário");
item2.setValor(100);

console.log("Item com encapsulamento");
console.log(item2.getNome());
console.log(item2.getValor());
