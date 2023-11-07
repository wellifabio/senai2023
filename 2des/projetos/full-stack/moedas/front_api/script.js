//Exemplo simples de manipulação de DOM
//Funções CRUD em uma tabela
const corpo = document.querySelector('tbody');
const forme = document.querySelector('form');
var dados = [];
var controle = false;

function carregar() {
    const options = { method: 'GET' };

    fetch('http://127.0.0.1:3000/listar', options)
        .then(response => response.json())
        .then(response => {
            dados = response;
            montartabela();
        })
        .catch(err => console.error(err));
}

function montartabela() {
    corpo.innerHTML = '';
    dados.forEach(moeda => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${moeda.nome}</td><td>${moeda.valor}</td><td>${moeda.sigla}</td>`;
        const edit = document.createElement('td');
        edit.innerHTML = `<button onclick='update(${moeda.id},this)'>*</button>`;
        const del = document.createElement('td');
        del.innerHTML = `<button onclick='del(${moeda.id})'>-</button>`;
        tr.appendChild(edit);
        tr.appendChild(del);
        corpo.appendChild(tr);
    });
}

forme.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const dados = {
        nome: formData.get('nome'),
        sigla: formData.get('sigla'),
        valor: formData.get('valor')
    }
    if (!nome || !sigla || !valor) {
        alert('Preencha todos os campos!');
    } else {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        };

        fetch('http://127.0.0.1:3000/criar', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    window.location.reload();
                } else {
                    alert('Erro ao criar!');
                }
            })
            .catch(err => console.error(err));
    }
});

function update(id, e) {
    const tr = e.parentNode.parentNode;
    if (controle) {
        const corpo = {
            id: parseInt(id),
            nome: tr.children[0].innerHTML,
            sigla: tr.children[1].innerHTML,
            valor: parseFloat(tr.children[2].innerHTML)
        }
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        };

        fetch('http://127.0.0.1:3000/alterar', options)
            .then(response => response.status)
            .then(response => {
                if (response == 202) {
                    window.location.reload();
                } else {
                    alert('Erro ao alterar!');
                }
            })
            .catch(err => console.error(err));
    }
    else {
        e.innerHTML = 'v';
        controle = true;
        tr.children[0].setAttribute('contenteditable', true);
        tr.children[1].setAttribute('contenteditable', true);
        tr.children[2].setAttribute('contenteditable', true);
    }
}

function del(id) {
    const options = { method: 'DELETE' };

    fetch('http://127.0.0.1:3000/excluir/' + id, options)
        .then(response => response.status)
        .then(response => {
            if (response == 204) {
                window.location.reload();
            } else {
                alert('Erro ao excluir!');
            }
        })
        .catch(err => console.error(err));
}