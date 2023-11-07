const btAbrir = document.querySelector("#btAbrir");
const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes")

btAbrir.addEventListener('click',()=>{
    detalhes.classList.toggle("oculto");
})

btFechar.addEventListener('click',()=>{
    detalhes.classList.toggle("oculto");
})