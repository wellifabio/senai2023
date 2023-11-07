const body = document.querySelector("body");
const imoveis = JSON.parse(localStorage.getItem("imoveis"));
const pComissao = document.querySelector("#comissao");

var comissao = 0;

imoveis.forEach(imovel => {
    createCard(imovel);
});

function createCard(imovel) {
    const { endereco, valor } = imovel;

    let card = document.createElement("div");
    let pEnd = document.createElement("p");
    let pValor = document.createElement("p");
    let button = document.createElement("button");

    button.innerHTML = "Vender";
    button.addEventListener("click", () => {
        button.disabled = true;
        button.innerHTML = "Vendido";
        comissao += Number(valor) * 0.15;
        pComissao.innerHTML = `Comissão : ${formatarMoeda(comissao)}`;
    })

    pEnd.innerHTML = endereco;
    pValor.innerHTML = formatarMoeda(valor);

    card.appendChild(pEnd);
    card.appendChild(pValor);
    card.appendChild(button);

    body.appendChild(card);
}

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(valor))
}