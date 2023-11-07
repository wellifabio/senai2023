const uri = 'http://localhost:3000'
const cards = document.querySelector('#cards')
const create = document.querySelector('#create')

const load = () => {
    fetch(uri + '/read', { method: 'GET' })
        .then(response => response.json())
        .then(response => compromissos(response.Compromissos))
        .catch(err => console.error(err));
}

const compromissos = (vetor) => {
    let now = new Date()
    create.quando.value = new Date().toISOString().substring(0, 16)
    vetor.forEach(e => {
        const card = document.createElement('form')
        const quando = document.createElement('input')
        const onde = document.createElement('input')
        const descricao = document.createElement('textarea')
        const up = document.createElement('button')
        const del = document.createElement('button')
        quando.type = 'datetime-local'
        quando.value = e.quando.substring(0, 16)
        onde.value = e.onde
        descricao.innerHTML = e.descricao
        up.type = 'submit'
        up.innerHTML = "*"
        del.type = 'button'
        del.addEventListener('click', (ev) => {
            fetch(uri + '/delete/' + e._id, { method: 'DELETE' })
                .then(resp => resp.status)
                .then(resp => {
                    if (resp == 204)
                        window.location.reload();
                })
                .catch(err => console.error(err));
        })
        del.innerHTML = "-"
        card.appendChild(quando)
        card.appendChild(onde)
        card.appendChild(descricao)
        card.appendChild(del)
        card.appendChild(up)
        card.addEventListener('submit', (ev) => {
            ev.preventDefault()
            let qd = new Date(quando.value)
            qd.setHours(qd.getHours() - 3);
            const compromisso = {
                quando: qd,
                onde: onde.value || 'Branco',
                descricao: descricao.value || 'Branco'
            }
            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(compromisso)
            };
            fetch(uri + '/update/' + e._id, options)
                .then(resp => resp.status)
                .then(resp => {
                    if (resp == 202)
                        window.location.reload();
                    else
                        alert("Erro ao enviar dados para o servidor, erro: " + resp)
                })
                .catch(err => console.error(err));
        })
        cards.appendChild(card)
    })
}

create.addEventListener('submit', (e) => {
    e.preventDefault()
    let qd = new Date(create.quando.value)
    qd.setHours(qd.getHours() - 3);
    const compromisso = {
        quando: qd,
        onde: create.onde.value || 'Branco',
        descricao: create.descricao.value || 'Branco'
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(compromisso)
    };
    fetch(uri + '/create', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                window.location.reload();
            else
                alert("Erro ao enviar dados para o servidor, erro: " + resp)
        })
        .catch(err => console.error(err));
});