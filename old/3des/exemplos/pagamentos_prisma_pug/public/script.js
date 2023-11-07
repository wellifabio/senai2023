function filtroNome(texto) {
    let filtro = texto.toUpperCase()
    let linhas = corpo.getElementsByTagName("tr")
    for (let i = 0; i < linhas.length; i++) {
        let nome = linhas[i].getElementsByTagName("input")[2]
        if (nome) {
            let compara = nome.value
            if (compara.toUpperCase().indexOf(filtro) > -1) {
                linhas[i].style.display = ""
            } else {
                linhas[i].style.display = "none"
            }
        }
    }
}