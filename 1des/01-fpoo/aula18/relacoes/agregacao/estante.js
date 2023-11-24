class decoracao {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class livro {
    constructor(titulo) {
        this.titulo = titulo;
    }
}

//A classe estante vai receber os livros e as decorações como agregação
class estante {
    constructor() {
        this.decoracoes = []; //Criando um lugar para colocar as decorações
        this.livros = []; //Criando um lugar para colocar os livros
    }

    //Método para adicionar os livros à estante
    addLivro(livro) {
        this.livros.push(livro)
    }

    //Método para adicionar decorações à estante
    addDecoracao(decoracao) {
        this.decoracoes.push(decoracao);
    }
}

//Criando os livros e decorações
let livro1 = new livro('Star Wars 1');//Objetos-parte
let livro2 = new livro('Star Wars 2');//Objetos-parte
let decoracao1 = new decoracao('Planta');//Objetos-parte
let decoracao2 = new decoracao('Quadro');//Objetos-parte

//Criando a estante
let minhaEstante = new estante();//Objeto-todo
console.table(minhaEstante);

//Colocando os livros e decorações na estante
minhaEstante.addLivro(livro1);
minhaEstante.addLivro(livro2);
minhaEstante.addDecoracao(decoracao1);
minhaEstante.addDecoracao(decoracao2);

//Mostrando a Estante com os livros e decorações
console.table(minhaEstante);
