var body = document.querySelector("body");

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

for(let i = 0; i < destinos.length; i++) {
    let destino = destinos[i];

    let banner = document.createElement("div");
    banner.className = "banner";
    banner.style.backgroundImage = `url(${destino.imagem})`;

    let dest = document.createElement("p");
    dest.innerHTML = destino.destino;

    let desc = document.createElement("p");
    desc.innerHTML = destino.descricao;

    banner.appendChild(dest);
    banner.appendChild(desc);
 
    body.appendChild(banner);
}
