//Variáveis, constantes globais e validação inicial
const colaborador = JSON.parse(localStorage.getItem('colaborador'));
if (colaborador != null) window.location.href = '../home/index.html';
const uri = 'http://localhost:3000/colaboradores';
const login = document.querySelector('#login');
const form = document.querySelector('#formCadastro');

//Funções
login.addEventListener("submit", e => {
    e.preventDefault();
    const body = {
        matricula: parseInt(login.matricula.value),
        pin: parseInt(login.pin.value)
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    fetch(uri + '/login', options)
        .then(resp => {
            if (resp.status == 404) {
                return { error: 'Matricula ou PIN incorretos' }
            } else
                return resp.json()
        })
        .then(resp => {
            if (resp.error == undefined) {
                localStorage.setItem('colaborador', JSON.stringify(resp));
                window.location.href = '../home/index.html';
            } else {
                document.querySelector("#msg").innerHTML = resp.error;
            }
        })
});

form.addEventListener("submit", e => {
    e.preventDefault();
    if (form.pin.value != form.confirmPin.value) {
        document.querySelector("#msg").innerHTML = 'PINs não coincidem';
        return;
    } else {
        const body = {
            matricula: parseInt(form.matricula.value),
            nome: form.nome.value,
            cargo: form.cargo.value,
            setor: form.setor.value,
            pin: parseInt(form.pin.value)
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        fetch(uri, options)
            .then(resp => {
                if (resp.status == 400) {
                    return { error: 'A matrícula deste colaborador já está cadastrada.' }
                } else
                    return resp.json()
            })
            .then(resp => {
                if (resp.error == undefined) {
                    window.location.reload();
                } else {
                    document.querySelector("#msg").innerHTML = resp.error;
                }
            })
    }
});