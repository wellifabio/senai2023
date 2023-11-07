const urlUsuarios = 'http://localhost:3000/usuarios';
const senha = document.getElementById("senha");
function login() {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"senha":' + senha.value + '}'
    };
    fetch(urlUsuarios, options)
        .then(resp => {
            if (!resp.ok) {
                alert("Senha incorreta");
            }
            return resp.json();
        }).then(
            resp => {
                window.location.href = "../home/index.html?perfil=" + resp.perfil;
            }
        )
        .catch(err => console.log(err));
}