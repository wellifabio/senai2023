// console.log(paragrafo.innerHTML);

// paragrafo.innerHTML = "Novo texto";

var paragrafo = document.querySelector("p");
var inpNome = document.querySelector("#nome");

var foto = document.querySelector("#foto");
var descricao = document.querySelector("#descricao");

function mostrarNome() {
    let valor = inpNome.value;
    
    let data = {
        "nome" : valor
    };

    paragrafo.innerHTML = JSON.stringify(data);
    paragrafo.innerHTML = data.nome;
}

function atualizarDados() {
    let info = {
        "descricao" : "Uma Panda Feliz",
        "imagem" : [
            "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg",
            "https://imagens.brasil.elpais.com/resizer/D6sjpO5OFHtnTHi0JMSuwETis5E=/1960x1103/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GI3PMQY6R6G2FUUFOUP4WP4KDE.jpg",
            "https://media.gettyimages.com/id/184987985/pt/foto/panda-com-l%C3%ADngua-de-fora.jpg?s=170667a&w=gi&k=20&c=p01FIinvZBO9-9c9UY4cKuQnG310gYGMdOgbgxkp7Bk="
        ]
    };

    descricao.innerHTML = info.descricao;
    foto.src = info.imagem[gerarNumero()];
}

function gerarNumero() {
    let num = Math.floor(Math.random() * 3);
    return num;
}