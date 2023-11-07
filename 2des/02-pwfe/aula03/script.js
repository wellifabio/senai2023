//getElementById(id)
//getElementsByTagName(tag)
//getElementsByClassName(class)
//querySelector("")
//querySelectorAll("")
//#id
//.class
//tag

//var titulo = document.getElementById("titulo");
//var titulos = document.getElementsByTagName("h1");
//var textos = document.getElementsByClassName("texto");
//var titulos = document.querySelectorAll(".texto");

// var body = document.querySelector("body");

// body.className = "dark";

// var paragrafo = document.querySelector("p");

// paragrafo.innerHTML = "A Informacao que eu quiser";

// paragrafo.classList.remove("m1");
// paragrafo.classList.add("m2");

// console.log(paragrafo.classList)

// paragrafo.style.color = "purple";
// paragrafo.style.fontSize = "2rem";

// var body = document.querySelector("body");

// body.className = "dark jc df";

// body.classList.add("m1");
// body.classList.remove("jc");

// body.classList.toggle("m2");
// body.classList.toggle("m2");


// var dados = document.querySelectorAll("p");

// for(let i = 0; i < dados.length; i++)
//     console.log(dados[i].innerHTML);


var pNome = document.querySelector("#nome");
var pEndereco = document.querySelector("#endereco");
var pTelefone = document.querySelector("#telefone");
var pNascimento = document.querySelector("#nascimento");

let dados = {
    "nome" : pNome.innerHTML,
    "endereco" : pEndereco.innerHTML,
    "telefone" : pTelefone.innerHTML,
    "nascimento" : pNascimento.innerHTML
};

console.log(dados);

let info = {
    "nome" : "Fulano da Silva",
    "endereco" : "Avenidas das Ruas",
    "telefone" : "16912345678",
    "nascimento" : "09/10/2011"
};

pNome.innerHTML = info.nome;
pEndereco.innerHTML = info.endereco;
pTelefone.innerHTML = info.telefone;
pNascimento.innerHTML = info.nascimento;

let imagem = document.querySelector("img");

imagem.src = ""






