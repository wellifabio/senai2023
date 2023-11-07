# Aula 02

## Tags para estilização de texto

- b
- i
- sup
- sub
- ins
- del
- small
- mark

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
         <!-- tag b é utilizada para deixar o texto em negrito -->
        <p>Exemplo de <b>negrito</b></p>
        <!-- tag i é utilizada para deixar o texto em italico -->
        <p>Exemplo de <i>italico</i></p>
        <!-- tag sup é utilizada para deixar o texto sobrescrito -->
        <p>Exemplo de <sup>sobrescrito</sup></p>
        <!-- tag sub é utilizada para deixar o texto subscrito -->
        <p>Exemplo de <sub>subscrito</sub></p>
        <!-- tag ins é utilizada para deixar o texto inserido -->
        <p>Exemplo de <ins>inserido</ins></p>
        <!-- tag del é utilizada para deixar o texto excluido -->
        <p>Exemplo de <del>excluido</del></p>
        <!-- tag small é utilizada para deixar o texto pequeno -->
        <p>Exemplo de <small>pequeno</small></p>
        <!-- tag mark é utilizada para deixar o texto destacado -->
        <p>Exemplo de <mark>destacado</mark></p>
    </body>
</html>
```

## Importação de imagens e tag de link
- img
- a

```html

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <!-- tag img é utilizada para importar imagens -->
        <img src="panda.jpg">

         <!-- tag a é utilizada para links -->
        <a href="https://www.w3schools.com/">W3Schools</a>
    </body>
</html>

```

## Listas não ordenadas
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>  
        <!-- tag ul é utilizada para criar listas não ordenadas -->
        <!-- tag li é utilizada para criar um item dentro da lista -->
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </body>
</html>
```

## Listas ordenadas

```html

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <!-- tag ol é utilizada para criar listas ordenadas -->
        <!-- tag li é utilizada para criar um item dentro da lista -->
        <!-- 1 - números (padrão)
         i - números romanos minúsculos
         I - números romanos maiúsculos
         a - letras minúsculas
         A - letras maiúsculas -->
         <ol type="1">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>

    </body>
</html>

```

## Tabelas

```html

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <!-- a tag table é utilizada para a criação de tabelas, marcando o inicio e o fim de uma -->
        <table border="1">
            <!-- a tag thead é utilizada para a criação do cabeçalho da tabela -->
            <thead>
                <!-- a tag tr é utlizada para a criaão de uma linha -->
                <tr>
                    <!-- a tag th é utilizada para a criação de uma coluna com o texto em negrito, semelhante a tag h1-h6 -->
                    <th>Col 1</th>
                    <th>Col 2</th>
                    <th>Col 3</th>
                </tr>
            </thead>
            <!-- a tag tbody é utilizada para criar e demarcar todo o corpo da tabela -->
            <tbody>
                <tr>
                    <!-- a tag td é utizada para a criação de uma coluna -->
                    <td>Lin 1 Col 1</td>
                    <td>Lin 1 Col 2</td>
                    <td>Lin 1 Col 3</td>
                </tr>
                <tr>
                    <td>Lin 2 Col 1</td>
                    <td>Lin 2 Col 2</td>
                    <td>Lin 2 Col 3</td>
                </tr>
                <tr>
                    <td>Lin 3Col 1</td>
                    <td>Lin 3Col 2</td>
                    <td>Lin 3Col 3</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>

```

## Atividade / Tarefa

- Desenvolva um site que contenha três páginas que navegem entre si. O conteudo do site pode ser escolhido por você e o site deve ser minimamente estilizado utilizando somente as tags vistas em sala.
- CSS só poderá ser utilizado INLINE e através de pesquisa.

