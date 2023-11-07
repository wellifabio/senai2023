const prevImg = (img, e) => {
    let file = e['files'][0]
    if (file.size < 1048576) {
        let fr = new FileReader()
        fr.onload = function () {
            let fotoBase64 = fr.result.replace("data:", "").replace(/^.+,/, "")
            document.querySelector("#" + img).src = isImgBase64(fotoBase64)
            document.querySelector("#file" + img).value = fotoBase64;
        }
        fr.readAsDataURL(file)
    } else {
        alert("O arquivo deve ser menor que que 1MB")
        document.querySelector("#file").value = null
    }
}

function isImgBase64(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`
    } else
        return `./assets/default.png`
}

function confirma() {
    return confirm('Tem certeza desta ação?')
}

function getURL() {
    //Verificar se há mensagem de erro via Query HTTP
    if (location.search.length > 0) {
        //Formatar e mostrar a mensagem
        alert(location.search.split("=")[1].replace(/%20/g, " "))
        // Obter a URL atual
        const urlAtual = new URL(window.location.href);
        // Remover a query
        urlAtual.search = ''
        // Atualizar a URL no navegador
        window.history.replaceState(null, null, urlAtual.href)
    }
}


