# Livro de Receitas exemplo BackEnd (Node + Mongo + Pug)

## Ambiente


|<img src="./public/assets/ico.png" width="50px">|Tecnologia|Descrição|
|:-:|-|-|
|[<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6zQpp19EUKn4nSRkp2kfrkJxATH0Ah5m7g&s" style="width:50px">](https://pugjs.org/api/getting-started.html)[<img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" style="width:50px">](https://developer.mozilla.org/pt-BR/docs/Web/CSS)[<img src="https://cdn5.vectorstock.com/i/1000x1000/27/74/vanilla-javascript-language-vector-31602774.jpg" style="width:50px">](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)|PUG JS, CSS, Vanilla JS|UX - UI|
|[<img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" style="width:50px;">](https://nodejs.org/en)|NodeJS|API Back-End|
|[<img src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon-thumbnail.png" style="width:50px;">](https://www.mongodb.com/pt-br)|Mongo DB Atlas|Banco de dados não relacional|
|[<img src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg" style="width:50px;">](https://code.visualstudio.com/)|VsCode|IDE|


## Para testar
- 1 Clonar este reposiório:
```bash
git clone https://github.com/wellifabio/receitas_mongo_pug.git
```
- 2 Abrir com **VsCode**, e no terminal **CMD** ou **bash**, Instalar as dependência
```bash
npm install
```
- 3 Criar o arquivo de configuração **.env** na raiz do projeto com a seguinte variável de ambiente
```js
MONGO_URL=mongodb+srv://appuser:appuser@cluster0.miqh8q2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
- 4 Iniciar a aplicação
```bash
npx nodemon
```
4. Executar no caminho: http://localhost:3000

## Sobre PUG
Pug é uma linguagem de template para gerar HTML. Anteriormente conhecida como Jade, a linguagem foi criada pelo desenvolvedor de software T.J. Holowaychuk em 2010, com o objetivo de simplificar a escrita de código HTML.
<br>
A sintaxe do Pug é baseada em indentação e permite que você crie templates HTML de maneira mais concisa e legível. Em vez de usar tags HTML, o Pug usa indentação para indicar a hierarquia dos elementos e usa uma sintaxe curta para definir atributos, classes e IDs.
<br>
Por exemplo, um trecho de código HTML que cria um formulário de login:
```html
<form action="/login" method="post">
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Senha:</label>
  <input type="password" id="password" name="password" required>

  <button type="submit">Entrar</button>
</form>
```
Pode ser escrito em Pug da seguinte forma:
```pug
form(action="/login", method="post")
  label(for="email") E-mail:
  input(type="email", id="email", name="email", required)

  label(for="password") Senha:
  input(type="password", id="password", name="password", required)

  button(type="submit") Entrar
```
O código Pug é mais conciso e fácil de ler do que o HTML correspondente. O Pug também permite o uso de variáveis, loops, condicionais e outras estruturas de controle em templates, o que pode ser útil para gerar HTML dinamicamente.
<br>
O Pug é frequentemente usado com o Node.js para gerar páginas HTML dinamicamente em aplicativos da web. O Pug é instalado através do npm (Node Package Manager) e é facilmente integrado com outros pacotes do Node.js, como o Express.js, um framework popular para criação de aplicativos da web em Node.js.

### Fonte: ChatGPT 27/02/2023

## Protótipo
![](./public/assets/print1.png)
![](./public/assets/print2.png)
![](./public/assets/print3.png)
![](./public/assets/print4.png)