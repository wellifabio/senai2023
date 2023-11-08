### Bootstrap
- Framework para desenvolvimento de sites responsivos
- [Bootstrap](https://getbootstrap.com/)
- [Documentação](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

### Tutorial Bootstrap
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
```

#### 4. Adicionar o código abaixo no arquivo **index.html** dentro da tag **body** depois da tag **header**
```html
    <main id="container">
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
    </main>
```