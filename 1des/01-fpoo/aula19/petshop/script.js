const abrir = document.getElementById("abrir");
const login = document.getElementById("login");
const salvar = document.getElementById("salvar");
const sair = document.getElementById("sair");

var dados = {
    usuarios: [],
    items: [],
    vendas: []
};

abrir.addEventListener("change", (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        dados = JSON.parse(reader.result);
        abrir.classList.add("oculto");
        login.classList.remove("oculto");
        // console.table(dados.itens);
    }
})

function download() {
    if (dados.usuarios.length > 0) {
        let a = document.createElement("a")
        a.href = "data:," + JSON.stringify(dados)
        a.download = "dados.json"
        a.click();
        alert("Dados salvos pasta padrão de downloads como [dados.json]")
    } else {
        alert("Não há dados serem salvos.")
    }
}