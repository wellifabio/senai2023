const body = document.querySelector("body");
const modal = document.querySelector(".modal");

fetch("https://jsonplaceholder.typicode.com/users")
.then((resp) => {
    return resp.json();
})
.then((usuarios) => {
    usuarios.forEach((usuario) => {
        let nome = document.createElement("p");
        let cidade = document.createElement("p");

        nome.innerHTML = `Nome : ${usuario.name}`;
        cidade.innerHTML = `Cidade : ${usuario.address.city}`;
        
        cidade.className = "pcidade";

        cidade.addEventListener("click", () => {
            buscarUsuario(usuario.id);
        })

        body.appendChild(nome);
        body.appendChild(cidade);
    })
});

function buscarUsuario(id) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((resp) => {
        return resp.json()
    })
    .then(usuario => {
        let { zipcode, street, suite } = usuario.address;

        document.querySelector("#cep").innerHTML = `CEP : ${zipcode}`;
        document.querySelector("#rua").innerHTML = `Rua : ${street}`;
        document.querySelector("#apartamento").innerHTML = `Apartamento : ${suite}`;
        
        toggleModal();
    })
}

function toggleModal() {
    modal.classList.toggle("show");
}