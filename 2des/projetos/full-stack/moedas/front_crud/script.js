//Exemplo simples de manipulação de DOM
//Funções CRUD em uma tabela
const corpo = document.querySelector('tbody');
const forme = document.querySelector('form');

forme.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const nome = formData.get('nome');
    const sigla = formData.get('sigla');
    const valor = formData.get('valor');

    if (!nome || !sigla || !valor) {
        alert('Preencha todos os campos!');
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${nome}</td><td>${valor}</td><td>${sigla}</td>`;
        const edit = document.createElement('td');
        edit.innerHTML = `<button onclick='update(this)'>*</button>`;
        const del = document.createElement('td');
        del.innerHTML = `<button onclick='del(this)'>x</button>`;
        tr.appendChild(edit);
        tr.appendChild(del);
        corpo.appendChild(tr);
        this.reset();
    }
});

function update(e) {
    const tr = e.parentNode.parentNode;
    const nome = tr.children[0].textContent;
    const valor = tr.children[1].textContent;
    const sigla = tr.children[2].textContent;
    const form = document.querySelector('form');
    form.nome.value = nome;
    form.valor.value = valor;
    form.sigla.value = sigla;
    tr.remove();
}

function del(e) {
    const tr = e.parentNode.parentNode;
    tr.remove();
}