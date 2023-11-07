const card = document.querySelector(".card");

const inpNome = document.querySelector("#cliente");
const inpEndereco = document.querySelector("#endereco");
const selectLanches = document.querySelector("#lanches");
const inpQntd = document.querySelector("#qntd");

const listaCozinha = document.querySelector("#cozinha");
const listaEntrega = document.querySelector("#entrega");

function cadastrar() {
    let clone = card.cloneNode(true);

    clone.classList.remove("model");

    let body = clone.querySelector(".card-body");

    body.querySelector("#infoCli").innerHTML = `Nome : ${inpNome.value} - Endereço : ${inpEndereco.value}`;
    body.querySelector("#infoPedido").innerHTML = `Lanche : ${selectLanches.value} - Quantidade : ${inpQntd.value}`;
    body.querySelector("#hora").innerHTML = agora();

    clone.querySelector("button").addEventListener("click", (e) => {
        let bt = e.target;
        let tCard = e.target.parentNode;

        bt.innerHTML = "Entregar";

        listaEntrega.appendChild(tCard);

        bt.addEventListener("click", (e) => {
            e.target.parentNode.remove();
        })
    })

    listaCozinha.appendChild(clone);
}

function agora() {
    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium',
    }).format(new Date());
}