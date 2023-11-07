const url = "http://localhost:3000"
const novo = document.querySelector("#novo")
const corpo = document.querySelector("#corpo")
const total = document.querySelector("#total")
var dados = []

function carregar() {
    fetch(url + '/listar', { method: 'GET' })
        .then(resp => resp.json())
        .then(resp => {
            dados = resp
            preencherTabela()
        })
        .catch(err => alert(err));
}

function preencherTabela() {
    dados.forEach((e) => {
        let linha = document.createElement("tr")
        linha.setAttribute('id', 'linha' + e.id)
        let td = []
        for (let i = 0; i < 10; i++) {
            td.push(document.createElement("td"))
            //Adicionar o atributo data-label para responsividade css
            if (i < 8) td[i].setAttribute("data-label", Object.keys(e)[i].charAt(0).toUpperCase() + Object.keys(e)[i].substr(1)+":")
            else if (i == 8) td[i].setAttribute("data-label", "Alterar:")
            else td[i].setAttribute("data-label", "Excluir:")
        }
        td[0].innerHTML = e.id
        td[1].innerHTML = e.nome
        td[1].setAttribute("contenteditable", "true")
        td[2].innerHTML = `<input type="date" value="${e.nascimento.split("T")[0]}">`
        td[3].innerHTML = e.peso
        td[3].setAttribute("contenteditable", "true")
        td[4].innerHTML = e.altura
        td[4].setAttribute("contenteditable", "true")
        td[5].innerHTML = e.idade
        td[6].innerHTML = e.imc.toFixed(2)
        td[7].innerHTML = e.diagnostico
        let btUpdate = document.createElement('button')
        btUpdate.innerHTML = '*'
        btUpdate.setAttribute('onclick', `alterar(${e.id})`)
        td[8].appendChild(btUpdate)
        let btDel = document.createElement('button')
        btDel.innerHTML = '-'
        btDel.setAttribute('onclick', `excluir(${e.id})`)
        td[9].appendChild(btDel)
        for (let i = 0; i < 10; i++)
            linha.appendChild(td[i])
        corpo.appendChild(linha)
    })
    total.innerHTML += ' ' + dados.length
}

novo.addEventListener('submit', e => {
    e.preventDefault()
    const body = {
        "id": novo.id.value,
        "nome": novo.nome.value,
        "nascimento": novo.nascimento.value,
        "peso": novo.peso.value,
        "altura": novo.altura.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(url + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})

function excluir(id) {
    fetch(url + '/excluir/' + id, { method: 'DELETE' })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 204)
                window.location.reload()
            else
                alert('Paciente não encontrado')
        })
}

function alterar(id) {
    let linha = document.querySelector(`#linha${id}`)
    if (!isNaN(linha.childNodes[3].innerHTML) && !isNaN(linha.childNodes[4].innerHTML)) {
        const body = {
            "id": id,
            "nome": linha.childNodes[1].innerHTML,
            "nascimento": linha.childNodes[2].childNodes[0].value,
            "peso": Number(linha.childNodes[3].innerHTML),
            "altura": Number(linha.childNodes[4].innerHTML),
        }
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };

        options.body = JSON.stringify(body)

        fetch(url + '/alterar', options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 202) window.location.reload()
                else alert('Erro ao alterar dados')
            })
    } else {
        alert("Peso e altura devem ser dados numéricos")
    }
}