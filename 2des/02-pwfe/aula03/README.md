# Aula03 - FrontEnd (DOM)
- 1. JavaScript
    - 1.3. DOM (Document object model)
        - 1.3.1. Seleção de elementos
        - 1.3.2. Manipulação de elementos

## Manipular objetos HTML
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body class="light">
    <!-- <h1>Um Titulo</h1>
    <p class="texto teste m1">Mais um texto</p>
    <h1 id="titulo" class="texto">Texto Teste</h1> -->
    <p id="nome">Fulano</p>
    <p id="endereco">Rua da Saudade</p>
    <p id="telefone">1912344321</p>
    <p id="nascimento">10/10/1910</p>
    <img>
</body>
<script src="./script.js"></script>
</html>
```
- JavaScript
```javascript
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
```

### JSON
```javascript
var usuario1 = {
    "nome":"Fulano",
    "idade":20,
    "cadastrado":true,
    "notas":[8,5,6]
};

var usuario2 = {
    "nome":"Ciclano",
    "idade":25,
    "cadastrado":false,
    "notas":[7,9,8]
}

var usuarios = [];

usuarios.push(usuario1);
usuarios.push(usuario2);

for(let i = 0; i < usuarios.length; i++)
    console.log(usuarios[i].nome);
```
## Gadjets
- [Calculadora HTML](./gadgets/calculator/)
- [Acessibilidade modo Dark](./gadgets/darkmode/)
- [Relógio HTML + JavaScript](./gadgets/jsclock/)
