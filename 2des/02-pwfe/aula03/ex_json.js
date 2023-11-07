var usuario1 = {
    "nome":"Fulano",
    "idade":20,
    "cadastrado":true,
    "notas":[8,5,6]
};

var usuario2 = {
    "nome":"Ciclano",
    "idade":25,
    "cadastrado":false,
    "notas":[7,9,8]
}

var usuarios = [];

usuarios.push(usuario1);
usuarios.push(usuario2);

for(let i = 0; i < usuarios.length; i++)
    console.log(usuarios[i].nome);