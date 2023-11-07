const options = { method: 'GET' };
var areasAtivas = [];
var clientes = [];

fetch('http://localhost:3000/alocacao/area', options)
    .then(response => response.json())
    .then(response => {
        areasAtivas = response;
        pintarAreas();
    })
    .catch(err => console.error(err));

const pintarAreas = () => {
    console.table(areasAtivas);
    areasAtivas.forEach(a => {
        const div = document.getElementById(`d${a.area}`);
        div.classList.add('ativa');
        div.setAttribute('onclick', `abrirModalArea(${a.area})`);
    });
}

const abrirModalArea = (area) => {
    const modal = document.getElementById('area');
    const titulo = document.getElementById('areaTitulo');
    const conteudo = document.getElementById('areaConteudo');
    modal.classList.remove('oculto');
    titulo.innerHTML = "Área " + area;
    conteudo.innerHTML = "";

    const options = { method: 'GET' };

    fetch(`http://localhost:3000/automoveis/${area}`, options)
        .then(response => response.json())
        .then(response => {
            response.forEach(a => {
                const div = document.createElement('div');
                div.classList.add('automovel');
                div.innerHTML = `Modelo: ${a.modelo} | Preço: R$${a.preco.toFixed(2)} <button onclick="abrirModalVenda(${a.alocacoes[0].id},'${a.modelo}',${a.id})">Vender</button>`;
                conteudo.appendChild(div);
            });
        })
        .catch(err => console.error(err));
}

const abrirModalVenda = async (idAlocacao, modelo, idAutomovel) => {
    const modal = document.getElementById('venda');
    const titulo = document.getElementById('vendaTitulo');
    const conteudo = document.getElementById('campos');
    titulo.innerHTML = modelo;
    modal.classList.remove('oculto');
    conteudo.innerHTML = `<input type="hidden" id = "alocacaoId" value="${idAlocacao}">`;
    conteudo.innerHTML += `<div>Cliente: <select onchange="habilitarBotaoConcluir()" id = "clienteId">${await listarClientes()}</select></div>`;
    conteudo.innerHTML += `<div>Concessionaria: <select onchange="habilitarBotaoConcluir()" id = "concessionariaId">${await listarConcessionaria(idAutomovel)}</select></div>`;
    const form = document.getElementById('formVenda');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const dados =
        {
            clienteId: parseInt(document.getElementById('clienteId').value),
            alocacaoId: parseInt(document.getElementById('alocacaoId').value),
            concessionariaId: parseInt(document.getElementById('concessionariaId').value)
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        };

        fetch('http://localhost:3000/vendas', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    alert('Venda realizada com sucesso!');
                    document.location.reload();
                }
            })
            .catch(err => console.error(err));
    });
}

const listarClientes = async () => {
    let optionsClientes = "<option></option>";
    const options = { method: 'GET' };
    await fetch('http://localhost:3000/clientes', options)
        .then(response => response.json())
        .then(response => { response.forEach(c => optionsClientes += `<option value="${c.id}">${c.nome}</option>`) })
        .catch(err => console.error(err));
    return optionsClientes;
}

const listarConcessionaria = async (veiculo) => {
    let optionsConcessionarias = "<option></option>";
    const options = { method: 'GET' };
    await fetch('http://localhost:3000/concessionarias/' + veiculo, options)
        .then(response => response.json())
        .then(response => { console.log(response); response.forEach(c => optionsConcessionarias += `<option value="${c.id}">${c.nome}</option>`) })
        .catch(err => console.error(err));
    return optionsConcessionarias;
}

const habilitarBotaoConcluir = () => {
    let cli = document.getElementById('clienteId').value;
    let concessionaria = document.getElementById('concessionariaId').value;
    console.log(cli + concessionaria);
    if (cli != "" && concessionaria != "") {
        const botao = document.getElementById('concluir');
        botao.removeAttribute('disabled');
    }
}