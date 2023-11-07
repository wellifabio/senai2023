const urlEquipamentos = 'http://localhost:3000/equipamentos';
const urlComentarios = 'http://localhost:3000/comentarios';
const containner = document.getElementById("containner");
const telaComentarios = document.getElementById("listComent");
const menu = document.getElementById("menu");
var equipamentos = [];
var comentarios = [];
var perfil = window.location.href.split("=")[1];

function perfis(perfil) {
    if (perfil == "Comum") return 1;
    if (perfil == "Administrador") return 2;
    if (perfil == "Tecnico") return 3;
    if (perfil == "Gerente") return 4;
}

function listAll() {
    //listar equipamentos
    fetch(urlEquipamentos, {
        "method": "GET",
        "headers": {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(response => {
            equipamentos = response;
            renderEquipamentos();
        })
        .catch(err => console.error(err));

    //listar comentarios
    fetch(urlComentarios, {
        "method": "GET",
        "headers": {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(response => {
            comentarios = response;
        })
        .catch(err => console.error(err));

    //Validação de perfil
    if (perfil != "Administrador") {
        menu.innerHTML = `<nav><a href="../home/index.html">Home</a></nav>`;
    }
}

function renderEquipamentos() {
    equipamentos.forEach((e) => {
        if (e.ativo == 1) {
            let card = document.createElement("div");
            let img = document.createElement("img");
            let equips = document.createElement("div");
            let title = document.createElement("h3");
            let description = document.createElement("p");
            let buttons = document.createElement("div");
            let button1 = document.createElement("button");
            let button2 = document.createElement("button");
            equips.setAttribute("class", "equips");
            img.setAttribute("src", "../assets/" + e.imagem);
            button1.setAttribute("class", "btComentario");
            button1.setAttribute("onclick", "modalComentario(" + e.id + ");this.setAttribute('disabled', 'disabled');");
            button2.setAttribute("class", "btExcluir");
            button2.setAttribute("onclick", "modalExcluir(" + e.id + ")");
            card.setAttribute("id", "card" + e.id);
            card.setAttribute("class", "card");
            title.innerHTML = e.equipamento;
            description.innerHTML = e.descricao;
            equips.appendChild(title);
            equips.appendChild(description);
            buttons.appendChild(button1);
            if (perfil == "Administrador") {
                buttons.appendChild(button2);
            }
            equips.appendChild(buttons);
            card.appendChild(img);
            card.appendChild(equips);
            containner.appendChild(card);
        }
    })
}

function renderComentarios(id) {
    comentarios.forEach((e) => {
        if (e.equipamento_id === id) {
            let card = document.createElement("div");
            let title = document.createElement("h3");
            let description = document.createElement("p");
            card.setAttribute("class", "cardComentario");
            title.innerHTML = e.perfil + " - " + formatDate(e.data);
            description.innerHTML = e.comentario;
            card.appendChild(title);
            card.appendChild(description);
            telaComentarios.appendChild(card);
        }
    });
}

function modalExcluir(id) {
    document.getElementById("modalExcluir").setAttribute("style", "display: flex;");
    document.getElementById("confirmaExclusao").setAttribute("onclick", "excluir(" + id + ")");
}

function modalComentario(id) {
    document.getElementById("modalComentarios").setAttribute("style", "display: flex;");
    renderComentarios(id);
    document.getElementById("adicionarComentarios").setAttribute("onclick", "modalNewComentario(" + id + ");this.parentNode.setAttribute('style', 'display: none;');");
}
function modalNewComentario(id) {
    document.getElementById("modalNewComentario").setAttribute("style", "display: flex;");
    document.getElementById("confirmaComentario").setAttribute("onclick", "addComentario(" + id + ")");
}
function modalNewEquipamento() {
    document.getElementById("modalNewEquipamento").setAttribute("style", "display: flex;");
    document.getElementById("confirmaEquipamento").setAttribute("onclick", "addEquipamento()");
}

//Excluir equipamento
function excluir(id) {
    fetch(urlEquipamentos + "/" + id, { "method": "DELETE" })
        .then(response => response.status)
        .then(response => {
            if (response == 200) {
                window.location.reload();
            } else {
                alert("Erro ao excluir: + " + response)
            }
        })
        .catch(err => console.error(err));
}

//Adicionar Comentário
function addComentario(id) {
    if (document.getElementById("inputComent").value.length > 0) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"comentario":"' + document.getElementById("inputComent").value + '","equipamento":' + id + ',"perfil":' + perfis(perfil) + '}'
        };
        fetch(urlComentarios, options)
            .then(resp => {
                if (resp.status == 201) {
                    alert("Sucesso! Comentário cadastrado para o equipamento.");
                    window.location.reload();
                } else {
                    alert("Erro ao adicionar comentário: " + resp.status);
                }
            })
            .catch(err => console.error(err));
    } else {
        alert("Preencha o campo comentário");
    }
}

//Adicionar Equipamento
function addEquipamento() {
    let ativo = document.getElementById("inputAtivo").checked ? 1 : 0;
    let nome = document.getElementById("inputNome").value;
    let imagem = document.getElementById("inputImagem").value;
    let descricao = document.getElementById("inputDescricao").value;

    if (nome.length > 0 && imagem.length > 0 && descricao.length > 0) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"equipamento":"' + nome + '","imagem":"' + imagem + '","descricao":"' + descricao + '","ativo":' + ativo + '}'
        };
        fetch(urlEquipamentos, options)
            .then(resp => {
                if (resp.status == 201) {
                    alert("Sucesso! Equipamento cadastrado.");
                    window.location.reload();
                } else {
                    alert("Erro ao adicionar equipamento: " + resp.status);
                }
            })
            .catch(err => console.error(err));
    } else {
        alert("Preencha todos os campos");
    }
}
//coverter data para formato brasileiro
function formatDate(date) {
    var date = new Date(date);
    var dia = date.getDate();
    var mes = date.getMonth() + 1;
    var ano = date.getFullYear();
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    return dia + "/" + mes + "/" + ano;
}