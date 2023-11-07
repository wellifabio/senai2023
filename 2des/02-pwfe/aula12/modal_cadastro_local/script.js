const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");

const dados = [
    { "id": 10, "nome": "Celular" },
    { "id": 20, "nome": "TV 50\"" },
    { "id": 30, "nome": "Computador" },
    { "id": 40, "nome": "Notebook" },
    { "id": 50, "nome": "Caixa de som JBL" },
]

btFechar.addEventListener('click', () => {
    detalhes.classList.toggle("oculto");
})

function preecherTabela() {
    dados.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const detalhes = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        detalhes.innerHTML = `<button onclick="abrirModal('${i}')">Detalhes</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(detalhes);
        tcorpo.appendChild(linha)
    })
}

function abrirModal(i) {
    detalhes.classList.toggle("oculto");
    document.querySelector("#id").value = dados[i].id;
    document.querySelector("#nome").value = dados[i].nome;
}

function cadastarLocal() {
    const item = {
        id: document.querySelector("#id").value,
        nome: document.querySelector("#nome").value
    }

    //Abrir ou iniciar a lista de produtos
    const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []
    //Acrescentar o novo item na lista
    produtos.push(item)
    //Salvar a lista no armazenamento local
    window.localStorage.setItem("produtos", JSON.stringify(produtos))

    //Recarregar a página
    window.location.reload()
}