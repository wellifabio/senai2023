const lista = document.querySelector(".lista-vendedores");

api.get('/vendedores')
    .then(resp => {
        resp.data.forEach(element => {
            lista.appendChild(createCard(element));
        });
    })

function createCard(data) {
    const card = document.querySelector(".card-vendedor").cloneNode(true);
    card.classList.remove("model");

    card.querySelector("#id").innerHTML = data.id;
    card.querySelector("#nome").innerHTML = data.nome;
    card.querySelector("#matricula").innerHTML = data.matricula;

    card.querySelector(".icon").addEventListener("click", () => {
        showModal(data);
    });

    return card;
}

function showModal(data) {
    let modal = document.querySelector(".modal");

    modal.classList.toggle("model");

    modal.querySelector("#inpId").value = data.id
    modal.querySelector("#inpNome").value = data.nome
    modal.querySelector("#inpMatrila").value = data.matricula
}

function closeModal() {
    document.querySelector(".modal").classList.toggle("model");
}