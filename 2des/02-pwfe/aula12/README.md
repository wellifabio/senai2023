# Front-End - Aula12

### Conhecimentos
- Display (Tela com Modais)
- Armazenamento local (localStorage)
- Listas de dados / Mokups

### Situação problema:

|Contextualização|
|-|
|A **Pizzaria XPTO** precisa de uma **UI (Interface de usuário) web** para receber pedidos de seus produtos, como programador front-end esta é sua missão.|

|Desafio|
|-|
|Desenvolver uma interface de carrinho de compras onde o cliente escolhe os produtos e monta seu pedido. A seguir seguem os dados em formato **JSON** para montar o cardápio de pizzas e um **modelo de pedido**, a interface deve ter:<br>- Uma tela principal **"carrinho.html"** onde os produtos selecionados serão listados e possua um botão para **Enviar o pedido**<br>- Uma tela com os produtos **cardapio.html**<br>- Uma tela ou modal que mostre os detalhes do produto e possua um botão para **Adicionar ao Carrinho**<br>- Uma tela quem mostre os pedidos enviados **pedidos.html** com um status fictício: **Pedido no forno**.<br>**Obs:** Utilize **localsorage** para enviar os dados entre as telas|
|**WireFrame:** representação meramente ilustrativa, desenvolva a interface utilizando sua criatividade.<br>![Wireframe](./carrinho.png)|

## Mokups
- Modelo de pedido
```json
[
    {
        "DataHora": "2023-05-18T08:00:00:000Z",
        "Total":125.45,
        "Itens":[
                {
                "id": 2,
                "nome":"Alho e oleo",
                "descricao":"Molho de tomate fresco, alho crocante coberto com parmes?o, or?gano e azeitonas pretas",
                "preco": 32.77,
                "quantidade":1
            },
            {
                "id": 3,
                "nome":"Aliche",
                "descricao":"Molho especial de tomate fresco, fil?s de aliche importado, or?gano e azeitonas pretas",
                "preco": 32.61,
                "quantidade":2
            }
        ]
    },
    {
        "DataHora": "2023-05-18T08:00:00:000Z",
        "Total":125.45,
        "Itens":[
            {
                "id": 5,
                "nome":"Atum",
                "descricao":"Molho de tomate fresco, atum especial s?lido, cebola fatiada, or?gano e azeitonas pretas",
                "preco": 32.29,
                "quantidade":1
            }
        ]
    }
]
```
- Ítens do cardápio
```json
[
    {
       "id": 1,
       "nome":"A Moda da Casa",
       "descricao":"Molho de tomate fresco, mussarela especial, presunto cozido picado, ovos, cebola fatiada, cobertura",
       "preco": 32.93
    },
    {
       "id": 2,
       "nome":"Alho e oleo",
       "descricao":"Molho de tomate fresco, alho crocante coberto com parmes?o, or?gano e azeitonas pretas",
       "preco": 32.77
    },
    {
       "id": 3,
       "nome":"Aliche",
       "descricao":"Molho especial de tomate fresco, fil?s de aliche importado, or?gano e azeitonas pretas",
       "preco": 32.61
    },
    {
       "id": 4,
       "nome":"Ao Funghi",
       "descricao":"Molho de tomate fresco, mussarela especial, champignon fatiado, manjeric?o fresco, or?gano e azeiton",
       "preco": 32.45
    },
    {
       "id": 5,
       "nome":"Atum",
       "descricao":"Molho de tomate fresco, atum especial s?lido, cebola fatiada, or?gano e azeitonas pretas",
       "preco": 32.29
    },
    {
       "id": 6,
       "nome":"Baiana",
       "descricao":"Molho de tomate fresco, calabresa mo?da levemente apimentada, ovos cozidos picados, cebola fatiada,",
       "preco": 32.13
    },
    {
       "id": 7,
       "nome":"Bauru",
       "descricao":"Molho de tomate fresco, presunto cozido picado, mussarela especial, rodelas de tomate, or?gano e aze",
       "preco": 31.97
    },
    {
       "id": 8,
       "nome":"Caipira",
       "descricao":"Molho de tomate fresco, frango desfiado levemente temperado, cobertura de catupiry, milho verde, or?",
       "preco": 31.81
    },
    {
       "id": 9,
       "nome":"Calabresa",
       "descricao":"Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, or?gano e azeitonas pretas",
       "preco": 31.65
    },
    {
       "id": 10,
       "nome":"Camponesa",
       "descricao":"Molho de tomate fresco, cobertura de catupiry, milho verde, or?gano e azeitonas pretas",
       "preco": 31.49
    },
    {
       "id": 11,
       "nome":"Canadense",
       "descricao":"Molho de tomate fresco, lombo canadense fatiado, cobertura de catupiry, rodelas de cebola, or?gano e",
       "preco": 31.33
    },
    {
       "id": 12,
       "nome":"Capri",
       "descricao":"Molho de tomate fresco, fatias de lombo canadense, mussarela especial, rodelas de tomate, manjeric?o",
       "preco": 31.17
    },
    {
       "id": 13,
       "nome":"Catupiry",
       "descricao":"Molho de tomate fresco, cobertura de catupiry, or?gano e azeitonas pretas",
       "preco": 31.01
    },
    {
       "id": 14,
       "nome":"Cubana",
       "descricao":"Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com mussarela especial",
       "preco": 30.85
    },
    {
       "id": 15,
       "nome":"Escarola",
       "descricao":"Molho de tomate fresco, escarola refogada alho e ?leo, fil?s de aliche importada, coberta com mussar",
       "preco": 35.49
    },
    {
       "id": 16,
       "nome":"Firense",
       "descricao":"Molho de tomate fresco, atum s?lido especial, milho verde, coberto com catupiry, or?gano e azeitonas",
       "preco": 35.33
    },
    {
       "id": 17,
       "nome":"Frango",
       "descricao":"Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com catupiry, or?gano",
       "preco": 35.17
    },
    {
       "id": 18,
       "nome":"Gramute",
       "descricao":"Molho de tomate fresco, mussarela especial, presunto cozido picado, champignon fatiado, or?gano e az",
       "preco": 35.01
    },
    {
       "id": 19,
       "nome":"Gratinada",
       "descricao":"Molho de tomate fresco, cobertura de catupiry, camada de provolone , salpicada de parmes?o, or?gano",
       "preco": 34.85
    },
    {
       "id": 20,
       "nome":"Grega",
       "descricao":"Molho de tomate fresco, palmito macio em rodelas, ervilhas, cobertura de mussarela especial, or?gano",
       "preco": 34.69
    },
    {
       "id": 21,
       "nome":"Imperial",
       "descricao":"Molho de tomate fresco, mussarela especial, atum s?lido, champignon fatiado, or?gano e azeitonas pre",
       "preco": 34.53
    },
    {
       "id": 22,
       "nome":"Margherita",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, salpicada de parmes?o, manjeric?o fre",
       "preco": 34.37
    },
    {
       "id": 23,
       "nome":"Matriciana",
       "descricao":"Molho de tomate fresco, mussarela especial, champignon fatiado, cobertura de parmes?o, or?gano e aze",
       "preco": 34.21
    },
    {
       "id": 24,
       "nome":"Mexicana",
       "descricao":"Molho de tomate fresco, mussarela especial, presunto cozido picado, milho verde, or?gano e azeitonas",
       "preco": 34.05
    },
    {
       "id": 25,
       "nome":"Moda do Clientes",
       "descricao":"Molho de tomate fresco, livre escolha dos ingredientes ( m?x.4 ), or?gano e azeitonas pretas",
       "preco": 33.89
    },
    {
       "id": 26,
       "nome":"Mussarela",
       "descricao":"Molho de tomate fresco, cobertura de mussarela especial, or?gano e azeitonas pretas",
       "preco": 33.73
    },
    {
       "id": 27,
       "nome":"Napolitalho",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmes?o, alho crocante, or?ga",
       "preco": 33.57
    },
    {
       "id": 28,
       "nome":"Napolitana",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmes?o, or?gano e azeitonas",
       "preco": 33.41
    },
    {
       "id": 29,
       "nome":"Oba Oba",
       "descricao":"Molho de tomate fresco, peito de frango desfiado levemente temperado, mussarela especial, bacon fati",
       "preco": 33.25
    },
    {
       "id": 30,
       "nome":"Palmito",
       "descricao":"Molho de tomate fresco, palmito macio em rodelas, coberto com catupiry, or?gano e azeitonas pretas",
       "preco": 33.09
    },
    {
       "id": 31,
       "nome":"Portuguesa",
       "descricao":"Molho de tomate fresco, presunto cozido, ovos picados, rodelas de cebola, cobertura de mussarela esp",
       "preco": 30.69
    },
    {
       "id": 32,
       "nome":"Provolone",
       "descricao":"Molho de tomate fresco, coberto com queijo provolone, champignon fatiado, rodelas de tomate, or?gano",
       "preco": 30.53
    },
    {
       "id": 33,
       "nome":"Quatro Queijos",
       "descricao":"Molho de tomate fresco, mussarela especial, camada de catupiry, provolone, salpicado com gorgonzola,",
       "preco": 30.37
    },
    {
       "id": 34,
       "nome":"Romana",
       "descricao":"Molho de tomate fresco, mussarela especial, rodelas de tomate, fil?s de aliche importado, or?gano e",
       "preco": 30.21
    },
    {
       "id": 35,
       "nome":"R?stica",
       "descricao":"Molho de tomate fresco, calabresa especial fatiada, alho crocante, rodelas de cebola, or?gano e azei",
       "preco": 30.05
    },
    {
       "id": 36,
       "nome":"Se Liga",
       "descricao":"molho de tomate fresco, fatias de lombo canadense, cobertura de provolone, or?gano e azeitonas preta",
       "preco": 29.89
    },
    {
       "id": 37,
       "nome":"Siciliana",
       "descricao":"Molho de tomate fresco, mussarela especial, fatias de bacon, champignon fatiado, or?gano e azeitonas",
       "preco": 29.73
    },
    {
       "id": 38,
       "nome":"Torino",
       "descricao":"Molho de tomate fresco, calabresa especial fatiada, palmito macio em rodelas, or?gano e azeitonas pr",
       "preco": 29.57
    },
    {
       "id": 39,
       "nome":"Toscana",
       "descricao":"Molho de tomate fresco, calabresa mo?da especial, cobertura de mussarela, or?gano e azeitonas pretas",
       "preco": 29.41
    },
    {
       "id": 40,
       "nome":"Veneza",
       "descricao":"Molho de tomate fresco, presunto cozido picado, azeitona verde fatiada, cobertura de mussarela espec",
       "preco": 29.25
    },
    {
       "id": 41,
       "nome":"Vienense",
       "descricao":"Molho de tomate fresco, mussarela especial, calabresa especial fatiada, rodelas de cebola, or?gano e",
       "preco": 29.09
    }
]
```