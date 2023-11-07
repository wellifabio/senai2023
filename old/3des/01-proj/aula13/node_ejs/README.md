## Renderizar paginas html/ejs no nodejs
- Para renderizar páginas HTML em uma aplicação Node.js, você pode seguir os seguintes passos:
	- Instale o pacote "express" do Node.js usando o gerenciador de pacotes "npm". Você pode fazer isso digitando o seguinte comando no terminal:
	```cmd
		npm install express
	```
	- Crie um arquivo JavaScript e importe o pacote "express". Por exemplo:
	```javascript
		const express = require('express');
		const app = express();
	```
	- Configure a pasta onde os arquivos HTML serão armazenados e definir o mecanismo de visualização que será usado para renderizar os arquivos HTML. Por exemplo:
	```javascript
		app.use(express.static('public'));
		app.set('view engine', 'ejs');
	```
	- Neste exemplo, a pasta "public" é configurada como a pasta onde os arquivos HTML serão armazenados e o mecanismo de visualização "ejs" é definido para renderizar os arquivos HTML.
	- Crie uma rota que renderize o arquivo HTML usando o mecanismo de visualização definido anteriormente. Por exemplo:
	```javascript
		app.get('/', (req, res) => {
			res.render('index', { title: 'Minha página HTML' });
		});
	```
	- Neste exemplo, a rota "/" renderiza o arquivo "index.ejs", que está localizado na pasta "public" e passa o título "Minha página HTML" como um objeto.
	- Crie o arquivo HTML usando o mecanismo de visualização definido anteriormente. Por exemplo, para criar um arquivo "index.ejs":
	```html
		<!DOCTYPE html>
		<html>
		<head>
		  <title><%= title %></title>
		</head>
		<body>
		  <h1>Minha página HTML</h1>
		</body>
		</html>
	```
	- Neste exemplo, a tag "<%= title %>" é usada para exibir o título que é passado como um objeto na rota anterior.
	- Inicie o servidor express. Por exemplo:
	```javascript
		app.listen(3000, () => {
			console.log('Servidor está ouvindo na porta 3000');
		});
	```
	- Execute o arquivo JavaScript digitando o seguinte comando no terminal:
	```cmd
		node app.js
	```
	- Neste exemplo, o arquivo JavaScript se chama "app.js". Depois de executar este comando, o servidor express estará em execução e você poderá acessar a página HTML digitando "http://localhost:3000" no seu navegador.
	- Com esses passos, você deve ser capaz de renderizar páginas HTML em uma aplicação Node.js usando o pacote "express".
