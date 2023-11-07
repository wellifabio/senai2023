//Objeto vazio, declarado diretamente
const obj = {};
//Acrescentando atributos dinamicamente
obj.nome = 'Bola';
obj.preço = 39.90;
obj.qtd = 10;
//Acrescentando métodos com function, dinânicamente
obj.total = function (){
    return obj.preço * obj.qtd;
}
//Acrescentando outro método com arrow function, dinamicamente
obj.showHTML = () => {
    let str = `<label>Nome:</label><label>${obj.nome}</label>`;
    str += `<label>Preço:</label><label>${obj.preço}</label>`;
    str += `<label>Quantidade:</label><label>${obj.qtd}</label>`;
    str += `<label>Total:</label><label>${obj.total().toFixed(2)}</label>`;
    return str;
}

//Objeto cheio, com atributos e métodos
const obj2 = {
    //Atributos locais do objeto
    nome:"Mesa de escritório",
    preco: 349.90,
    qtd: 2,
    //Métodos locais do objeto
    total(){
        return this.preco * this.qtd;
    },
    showHTML(){
        let str = `<label>Nome:</label><label>${this.nome}</label>`;
        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.qtd}</label>`;
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`;
        return str;
    }
}

//Terceiro objeto, com atributos e métodos
const obj3 = {
    //Atributos locais do objeto
    nome:"Caneta azul",
    preco: 2.99,
    qtd: 10,
    //Métodos locais do objeto
    total(){
        return this.preco * this.qtd;
    },
    showHTML(){
        let str = `<label>Nome:</label><label>${this.nome}</label>`;
        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.qtd}</label>`;
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`;
        return str;
    }
}

//Saídas no console
console.log(obj);
console.log('Valor total = R$ '+obj.total().toFixed(2));
console.log(obj2);
console.log('Valor total = R$ '+obj2.total().toFixed(2));
console.log(obj3);
console.log('Valor total = R$ '+obj3.total().toFixed(2));

//Saída no HTML
const main = document.getElementById('objetos');

const div = document.createElement('div');
div.innerHTML = obj.showHTML();
main.appendChild(div);

const div2 = document.createElement('div');
div2.innerHTML = obj2.showHTML();
main.appendChild(div2);

const div3 = document.createElement('div');
div3.innerHTML = obj3.showHTML();
main.appendChild(div3);