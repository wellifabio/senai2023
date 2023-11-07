const url = 'http://localhost:3000';
const cards = document.querySelector("#cards");
const card = document.querySelector(".card");
const create = document.querySelector("#create");
const update = document.querySelector("#update");
const login = document.querySelector("#login");

var dados = [];
var fotoBase64 = null;
var user = localStorage.getItem("login");

const carregar = () => {
    const options = { method: 'GET' };
    fetch(url + "/read", options)
        .then(resp => resp.json())
        .then(resp => {
            dados = resp;
            readAll();
        })
        .catch(err => alert("Erro ao carregar dados do BD:" + err));
    if (user == null) {
        document.querySelector("#btnAdd").classList.add('oculto');
        document.querySelector("#btnSair").classList.add('oculto');
    } else
        document.querySelector("#btnLogin").classList.add('oculto');
}

login.addEventListener('submit', (e) => {
    e.preventDefault();
    let usuario = {
        email: login.email.value,
        password: login.senha.value
    }
    console.log(JSON.stringify(usuario));
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    }
    fetch(url + '/login', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 202) {
                localStorage.setItem("login", "logado");
                window.location.reload();
            } else
                alert("Email e/ou senha inválido");
        })
        .catch(err => console.error(err));

});

create.addEventListener('submit', (e) => {
    e.preventDefault();
    let receita = {
        nome: create.nome.value,
        tipo: create.tipo.value,
        ingredientes: create.ingredientes.value,
        modoPreparo: create.modoPreparo.value,
        foto: fotoBase64
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(receita)
    }
    fetch(url + '/create', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                window.location.reload();
            else
                alert("Erro ao enviar dados para o servidor, erro: " + resp)
        })
        .catch(err => console.error(err));
});

function readAll() {
    let i = 0;
    dados.forEach(e => {
        let receita = card.cloneNode(true);
        receita.classList.remove("oculto");
        receita.querySelector("#id").innerHTML += `<b>${e._id}</b>`;
        receita.querySelector("#btn").setAttribute("onclick", `del('${e._id}')`);
        receita.querySelector("#nome").innerHTML += e.nome;
        receita.querySelector("#tipo").innerHTML += e.tipo;
        receita.querySelector("#ingredientes").innerHTML += e.ingredientes;
        receita.querySelector("#modoPreparo").innerHTML += e.modoPreparo;
        receita.querySelector("#img").src = isImgBase64(e.foto);
        receita.querySelector("#alt").setAttribute("onclick", `alterar('${i}')`);
        if (e.tipo == "doce") receita.setAttribute("style", "background-color:#ffcc99;");
        if (user == null) {
            receita.querySelector("#alt").classList.add('oculto');
            receita.querySelector("#btn").classList.add('oculto');
        }
        cards.appendChild(receita);
        i++;
    });
}

function alterar(indice) {
    modalUpdate.classList.remove('oculto');
    update.id.value = dados[indice]._id;
    update.tipo.value = dados[indice].tipo;
    update.nome.value = dados[indice].nome;
    update.ingredientes.value = dados[indice].ingredientes;
    update.modoPreparo.value = dados[indice].modoPreparo;
    update.imagem.src = isImgBase64(dados[indice].foto);
    if (dados[indice].foto != null) fotoBase64 = dados[indice].foto;
}

update.addEventListener('submit', (e) => {
    e.preventDefault();
    let receita = {
        nome: update.nome.value,
        tipo: update.tipo.value,
        ingredientes: update.ingredientes.value,
        modoPreparo: update.modoPreparo.value,
        foto: fotoBase64
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(receita)
    }
    fetch(url + '/update/' + update.id.value, options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200)
                window.location.reload();
            else
                alert("Erro ao enviar dados para o servidor, erro: " + resp)
        })
        .catch(err => console.error(err));
});

function del(id) {
    if (confirm("Confirma a exclusão da receita id: " + id)) {
        const options = {
            method: 'DELETE'
        };
        fetch(url + '/del/' + id, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 200) {
                    window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados, Erro:" + err));
    }
}

function isImgBase64(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./assets/default.png`;
}

const prevImgCreate = () => {
    let file = document.querySelector("#fileC")['files'][0];
    if (file.size < 1048576) {
        let fr = new FileReader();
        fr.onload = function () {
            fotoBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
            create.imagem.src = isImgBase64(fotoBase64);
        }
        fr.readAsDataURL(file);
    } else {
        alert("O arquivo deve ser menor que que 1MB");
        document.querySelector("#file").value = null;
    }
}

const prevImgUpdate = () => {
    let file = document.querySelector("#fileU")['files'][0];
    if (file.size < 1048576) {
        let fr = new FileReader();
        fr.onload = function () {
            fotoBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
            update.imagem.src = isImgBase64(fotoBase64);
        }
        fr.readAsDataURL(file);
    } else {
        alert("O arquivo deve ser menor que que 1MB");
        document.querySelector("#file").value = null;
    }
}

const sair = () => {
    localStorage.removeItem("login");
    window.location.reload();
}