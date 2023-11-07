let inpMatricula = document.querySelector("#matricula");
let inpSenha = document.querySelector("#senha");

const base = [
    {
        "nome":"Alberto Adalberto",
        "matricula":132455,
        "senha":"abc123",
        "salario":2570.80,
        "responsavel":[
            {
                "cod":"ca1423",
                "endereco":"Rua das Ruas, 43",
                "valor":455000
            },
            {
                "cod":"ap1321",
                "endereco":"Rua das avenidas, 36, AP. 4",
                "valor":455000
            }
        ]
    },
    {
        "nome":"Jair Javindo",
        "matricula":132455,
        "senha":"asd321",
        "salario":2570.80,
        "responsavel":[
            {
                "cod":"ca3321",
                "endereco":"Rua sem calçada, 59",
                "valor":455000
            },
            {
                "cod":"ap1221",
                "endereco":"Alameda dos Santos, 22, AP. 7",
                "valor":455000
            }
        ]
    }
]


function auth() {
    let corretor = base.find(data => {
        return (
            (data.matricula == inpMatricula.value) 
            && 
            (data.senha == inpSenha.value)
            )
    });

    if(corretor != undefined) {
        localStorage.setItem("imoveis", JSON.stringify(corretor.responsavel))

        window.location.href = "./home.html";
    }else {
        alert("Corretor não cadastrado !");
    }
}