var banner = document.querySelector(".banner");
var destino = document.querySelector("#destino");
var descricao = document.querySelector("#descricao");

var destinos = [
    {
        "imagem":"https://mediaim.expedia.com/destination/1/187186a1a3e268e107aaed14745d0853.jpg",
        "destino":"Osasco",
        "descricao":"Planos a partir de R$ 120,00"
    },
    {
        "imagem":"https://a.cdn-hotels.com/gdcs/production165/d100/5e0a7326-4dd3-40cc-9eb7-3af978f69b3d.jpg",
        "destino":"Ipanema",
        "descricao":"Curta as ferias em familia"
    },
    {
        "imagem":"https://inglaterrabrasil.com.br/wp-content/uploads/sites/8/2022/08/conheca-londres.jpg",
        "destino":"Londres",
        "descricao":"Conheca as piramides"
    }
]

let indice = gerarNumero(destinos.length);

destino.innerHTML = destinos[indice].destino;
descricao.innerHTML = destinos[indice].descricao;
banner.style.backgroundImage = `url(${destinos[indice].imagem})`;
//banner.style.backgroundImage = "url(" + destinos[gerarNumero(destinos.length)].imagem + ")";

function gerarNumero(size) {
    let num = Math.floor(Math.random() * size);
    return num;
}