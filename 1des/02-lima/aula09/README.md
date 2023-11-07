# Aula 09 - Introdução a HTML dinãmico com JavaScript
## Objetivos
- Entender o que é JavaScript
- Entender como usar JavaScript em uma página HTML

## Prática
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script src="script.js"></script>
</html>
```
script.js
```javascript
/*
    var - Variavel Global
    let - Variavel Local
    const - Constante
*/

/*
const obj = [
    {   
        "id": 1,
        "nome": "Ana Maria",
        "nascimento": "2000-01-01"
    },
    {   
        "id": 2,
        "nome": "Maria silva",
        "nascimento": "2002-03-18"
    },
    {   
        "id": 3,
        "nome": "Marcos Paulo",
        "nascimento": "2003-04-25"
    },
    {   
        "id": 4,
        "nome": "Mariana Lima",
        "nascimento": "2001-01-13"
    }
];
*/

/*
    console.log("Teste"); //- Imprime um dado no console do navegador;     
    console.warn("Teste"); //- Imprime um dado no console do navegador;    
    console.error("Teste"); //- Imprime um dado no console do navegador;    
    console.table(obj); //- Imprime um dado no console do navegador;    
*/

/*
    //Operadores Aritméticos

    Soma            +
    Subtracao       -
    Divisão         /
    Multiplicação   *
    Potencia        **
    Resto           %     
*/

/*
    //Operadores Lógicos

    Maior               >
    Menor               <
    Maior Igual         >=
    Menor Igual         <=
    Igual               ==
    Diferente           !=
    Igualdade Restrita  ===
    Diferença Restrita  !==
*/

/*
    AND && 
    OR  ||
    NOT !
    
    TRUE && TRUE    => TRUE
    TRUE && FALSE   => FALSE
    FALSE && TRUE   => FALSE
    FALSE && FALSE  => FALSE
    TRUE || TRUE    => TRUE
    TRUE || FALSE   => TRUE
    FALSE || TRUE   => TRUE
    FALSE || FALSE  => FALSE
    !FALSE  => TRUE
    !TRUE   => FALSE
*/

/*
var data = new Date();
console.log(data);

var dataatual = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

//tamplate string
`Texto normal até a variavel ${sua_variavel}`
dataatual = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

var horaatual = `${data.getHours()}:${data.getMinutes()}`;

console.log(`${dataatual} ${horaatual}`);
console.log(dataatual, horaatual);
*/

/*
Math.ceil() //arredonda pra cima
Math.floor() //arredonda pra baixo
Math.round() //arredonda de acordo com a casa decimal

Number.parseInt() //Converte uma string para inteiro
Number.parseFloat() //converte uma string para float

replace() //Substitui a primeira ocorrencia
replaceAll() //Substitui todos caracteres
*/

/*
if() {
}else if() {
}else {
}

condicao ? true : false;

switch() {
    case :
        break;
    default :
        break;
}

for(let i = 0; i < 10; i++) {
}

while() {
}

do {
}while();
*/

/*
let arr = "a b c d e".split(" ");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(item => {
    console.log(item);
})

for (let item of arr) {
    console.log(item);
}
*/

/*
function ex1() {
    console.log("EXECUTANDO A FUNCAO EX1");
}

ex1();
*/
```
