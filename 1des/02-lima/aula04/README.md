# Aula 04

## CSS

- Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web podendo ser aplicado diretamente nas tags, dentro de uma tag style ou em um arquivo separado.

#### CSS Inline

- CSS Inline é quando se utiliza o css diretamente nas tags HTML como segue o exemplo.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Inline</title>
</head>
<body style="background-image: url(assets/img/bg.jpg); background-size: cover">
    
    <h1 style="text-align: center; font-size: 100px; color: white">TITULO</h1>

</body>
</html> 

```

#### CSS Interno

- CSS Interno é quando se utiliza o css dentro de uma tag style dentro do HTML como mostra o exemplo.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Interno</title>
    <style>
        body{
            background-image: url(assets/img/bg.jpg);
            background-size: cover;
        }
        h1{
            text-align: center;
            font-size: 100px;
        }
        .t1{
            color: blue;   
        }
        #t2{
            color: red;
        }
    </style>
</head>
<body>

    <h1 class="t1">TITULO</h1>
    <h1 id="t2">TITULO</h1>
    
</body>
</html>

```

#### CSS Externo

- CSS externo é quando se utiliza um arquivo externo ao HTML, sendo necessário linkar um arquivo no outro como mostra o exemplo.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=], initial-scale=1.0">
    <title>CSS Externo</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

    <h1 class="t1">TITULO</h1>
    <h1 id="t2">TITULO</h1>
    
</body>
</html>

```

```css

body{
    background-image: url(../img/bg.jpg);
    background-size: cover;
}
h1{
    text-align: center;
    font-size: 100px;
}
.t1{
    color: blue;   
}
#t2{
    color: red;
}

```