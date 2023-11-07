const data = [
    {
        "titulo":"Titulo 3",
        "texto":"Texto344"
    },
    {
        "titulo":"Titulo 4",
        "texto":"Texto1223"
    },
    {
        "titulo":"Titulo 5",
        "texto":"Texto342"
    }
]

const body = document.querySelector("body");
const card = document.querySelector(".card");

for(let i = 0; i < data.length; i++){
    let clone = card.cloneNode(true);

    clone.classList.remove("model");

    clone.querySelector("h3").innerHTML = data[i].titulo;
    clone.querySelector("p").innerHTML = data[i].texto;

    clone.querySelector("button").addEventListener("click", (event) =>{
       console.log(event.target.parentNode.remove());
        //console.log(event.target.remove());
        //let info = document.createElement("p");
        //info.innerHTML = "Algum texto";
        //event.target.parentNode.appendChild(info);
    });

    body.appendChild(clone);
}

const teste = () => {

}

card.remove();