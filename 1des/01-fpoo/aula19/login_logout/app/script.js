const abrir = document.getElementById("abrir");
const login = document.getElementById("login");
const salvar = document.getElementById("salvar");
const sair = document.getElementById("sair");
const boasVindas = document.getElementById("boasVindas");
const container = document.getElementById("container");
const formLogin = document.getElementById("formLogin");

var dados = {
    usuarios: [],
    itens: []
};

var usuario = {};

//Carregar dados de arquivo JSON
abrir.addEventListener("change", (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        dados = JSON.parse(reader.result);
        abrir.classList.add("oculto");
        login.classList.remove("oculto");
        preencherCards();
    }
})

//Salvar os dados no arquivo JSON
function download() {
    if (dados.usuarios.length > 0) {
        let a = document.createElement("a")
        a.href = "data:," + JSON.stringify(dados)
        a.download = "dados.json"
        a.click();
        alert("Dados salvos pasta padrão de downloads como [dados.json]")
    } else {
        alert("Não há dados serem salvos.")
    }
}


//CRUD - Real All
function preencherCards() {
    container.innerHTML = `
			<div id="model0" class="card col-lg-3 m-2 justify-content-between">
				<h2 class="card-title text-center">Nome</h2>
				<p class="card-text">Tipo e Descrição</p>
				<img src="../assets/noimage.jpg"
					alt="Imagem Padrão" class="img">
					<button class="btn btn-secondary" data-toggle="modal" data-target="#vender">Vender</button>
					<h4 class="card-footer text-right">Preço</h4>
			</div>`;
    dados.itens.forEach((item, i) => {
        const model = document.getElementById('model0').cloneNode(true);
        model.setAttribute('id', 'model' + item.id);
        model.querySelector('.card-title').innerHTML = item.nome;
        model.querySelector('.card-text').innerHTML = "<B>" + item.tipo + ":</B>";
        model.querySelector('.card-text').innerHTML += "<br/>" + item.descricao;
        model.querySelector('.img').src = item.img == "" ? "../assets/noimage.jpg" : item.img;
        model.querySelector('.card-footer').innerHTML = `R$ ${parseFloat(item.preco).toFixed(2)}`;
        model.querySelector('.btn').setAttribute("onclick", `vender(${i})`);
        if (usuario.email == undefined) model.querySelector('.btn').classList.add("oculto");
        container.appendChild(model);
    });
    document.getElementById('model0').remove();
}

//Entrar no sistema
formLogin.addEventListener("submit", e => {
    e.preventDefault();
    let encontrado = false;
    dados.usuarios.forEach(user => {
        if (user.email == formLogin.email.value && user.senha == formLogin.senha.value) {
            usuario = user;
            login.classList.add("oculto");
            salvar.classList.remove("oculto");
            sair.classList.remove("oculto");
            $('#modaLogin').modal('hide');
            preencherCards();
            bemVindo();
            encontrado = true;
        }
    });
    if (!encontrado) alert('Login ou senha inválidos!');
})

function bemVindo() {
    if (usuario.email == undefined) boasVindas.classList.add("oculto");
    else {
        boasVindas.innerHTML = `<h3>Usuário(a): ${usuario.nome}</h3>`;
        boasVindas.classList.remove("oculto");
    }
}

//Saír do sistema
function logout() {
    usuario = {};
    login.classList.remove("oculto");
    salvar.classList.add("oculto");
    sair.classList.add("oculto");
    preencherCards();
    bemVindo();
}