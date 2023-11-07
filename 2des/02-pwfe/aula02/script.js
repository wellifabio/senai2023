//Variaveis  globais e locais
//Usando o método getElementByUd ou querySelector
//Concatenar com + ou template String

//Variáveis Globais
var nome = document.getElementById("name");
var idade = document.getElementById("age");
var sexo = document.getElementById("gender");
var form = document.querySelector("#form");

//Método que processa o evento submit executando a função abaixo
form.addEventListener("submit",processaSubmit);

//Função ou Método que processa os dados recebidos por submit
function processaSubmit(){

    //Variável Local    var fase;
    if(idade.value < 10){
        fase = "criança";
    } else if(idade.value < 15){
        fase = "adolescente";
    }else if(idade.value < 20){
        fase = "jovem";
    } else if(idade.value < 40){
        fase = "adulto";
    } else {
        fase = "idoso";
    }

    //Alert com concatenaçao de string e utilizando variáveis globais
    alert("Olá "+nome.value+" você tem "+idade.value+" anos, é do sexo "+sexo.value+" e é "+fase);
}

function processaButton(){
    //Variáveis locais
    var nom = document.querySelector("#name").value;
    var idad = document.querySelector("#age").value;
    var sx = document.querySelector("#gender");
    var fase;
    //Condições
    if(idad < 10){
        fase = "criança";
    } else if(idad < 15){
        fase = "adolescente";
    }else if(idad < 20){
        fase = "jovem";
    } else if(idad < 40){
        fase = "adulto";
    } else {
        fase = "idoso";
    }

    //Alert com template String
    alert(`Olá ${nom} você tem ${idad} anos, é do sexo ${sx.value} e é ${fase}`);
}