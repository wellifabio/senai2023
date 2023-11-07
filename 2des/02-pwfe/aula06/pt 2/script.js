const tarefa = document.querySelector("#tarefa"); //INPUT
const listapendentes = document.querySelector("#pendentes"); //INPUT
const listafinalizada = document.querySelector("#finalizadas"); //INPUT
const card = document.querySelector(".card"); //INPUT

function cadastrar() {
    let clone = card.cloneNode(true);

    clone.classList.remove("model");

    clone.querySelector("#item").innerHTML = tarefa.value;

    clone.querySelector("#data").innerHTML = agora();

    clone.querySelector("button").addEventListener("click", (e) => {
        let elemento = e.target.parentNode;

        e.target.remove();

        elemento.querySelector("#data").innerHTML = agora();

        listafinalizada.appendChild(elemento);
    })

    listapendentes.appendChild(clone);
}

function agora() {
    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: "short",
        timeStyle: "medium"

    }).format(new Date());
}