# Aula 08 - CSS
## Display wrap e grid
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <div class="grid">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
    </div>

    <div class="wrap">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
    </div>
    
</body>
</html>
```
style.css
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
}

.grid{
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 20px;
}

.box{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 200px;
    width: auto;
    border: 2px solid black;
}

.wrap{
    display: flex;
    flex-wrap: wrap;
}

.wrap .box{
    width: 300px;
    margin: 20px;
}
```

## Web Semantica
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./imgs/img1.png" type="image/x-icon">
    <link rel="stylesheet" href="./style.css">
    <title>Expoflora</title>
</head>
<body>
    <img id="img1" src="./imgs/img1.png" alt="Campo de flores e uma senhora">
    <img id="img2" src="./imgs/img2.png" alt="Teto de sombrinhas coloridas">
    <img id="img3" src="./imgs/img3.png" alt="Sr. com trajes tipicos em um desfile">
</body>
</html>
```
## Com a semântica correta
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./imgs/img1.png" type="image/x-icon">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>Expoflora</h1>
        <h2>2023</h2>
    </header>
    <main>
        <section>
            <h3>Expoflora</h3>
            <p>Lorem ipsum dolor sit amet consec</p>
    </main>
    <footer>
        <p>Expoflora Holambra</p>
        <p>2023</p>
    </footer>
</body>

</html>
```