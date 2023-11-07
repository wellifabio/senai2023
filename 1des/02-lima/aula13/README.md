# Aula 13
## Landing Page com Bootstrap
### Objetivo: Criar uma landing page com Bootstrap
### Bootstrap
- Framework para desenvolvimento de sites responsivos
- [Bootstrap](https://getbootstrap.com/)
- [Documentação](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

### Situação Problema
![Lousa](./lousa.jpg)
|Contextualização|
|-|
|Você foi contratado para desenvolver uma landing page para uma pequena empresa chamada **COLECT** cuja principal atividade é a venda de roupas, miniaturas e colecionáveis pela internet, atualmente utiliza apenas o site do **mercado livre** para suas vendas, e precisa de uma página própria|

|Desafio|
|-|
|Criar uma landing page com Bootstrap para a empresa **COLECT**, os dados dos produtos estão no reposítório (../04-sop/aula08/analisepedidos)|

### Tutorial
#### 1. Criar uma pasta chamada **landingpage** e dentro dela criar um arquivo chamado **index.html**
- Baixar a pasta **assets** e seu conteúdo para a pasta **landingpage**
#### 2. Adicionar o código abaixo no arquivo **index.html**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CONECT</title>
</head>

<body>
    <header>
        <h1>CONECT</h1>
    </header>
    <main id="cards">
        <div class="card" id="card01">
            <h2 id="t1">Produto</h2>
            <h3 id="t2">Tipo</h3>
            <img id="t3" alt="imagem do produto">
            <p id="t4">Preço</p>
        </div>
    </main>
    <footer>
        <p>© 2023 CONECT</p>
        <label id="rodape"></label>
        <script>
            const rodape = document.getElementById("rodape");
            rodape.innerHTML = new Date().toLocaleDateString();
            rodape.innerHTML += ' ';
            rodape.innerHTML += new Date().toLocaleTimeString();
        </script>
    </footer>
</body>

</html>
```

#### 3. Adicionar o código abaixo no arquivo **index.html** dentro da tag **head**
```html
<link rel="stylesheet" href="./assets/css/bootstrap.min.css">
<link rel="stylesheet" href="./assets/css/style.css">
```

#### 4. Adicionar o código abaixo no arquivo **index.html** dentro da tag **body** antes da tag **header**
```html
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card" id="card01">
                <h2 id="t1">Produto</h2>
                <h3 id="t2">Tipo</h3>
                <img id="t3" alt="imagem do produto">
                <p id="t4">Preço</p>
            </div>
        </div>
    </div>
</div>
```