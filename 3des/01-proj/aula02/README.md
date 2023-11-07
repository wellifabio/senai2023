# Aula02 - Recursos Avançados - ORM Prisma
## Projeto Exemplo
### Sistema de Gestão de pedidos em um Restaurante
- ![Lousa1](lousa1.jpg)

## Passo a passo para um novo projeto com Prisma
- ![Lousa1](lousa2.jpg)
### Abrir o VSCode
### Abrir um terminal: CTRL + "
- Navegar até a pasta do seu projeto API.
- Instalar o risma globalmente e iniciar o projeto com MySQL
```bash
  npm i -g prisma
  prisma init --datasource-provider mysql
```
- Neste caso estamos utilizando o prisma com o SGBD mysql.
- Caso não inicie o seu projeto, reinstale a última versão LTS do nodejs
- Feche o VsCode e abra novemante, reinstalando o prisma e iniciando o projeto.
- OBS: Abrir o XAMPP Control Panel e iniciar o Apache e o MySQL (Start) 

### Configurar o .ENV
- Substituir usuario, senha, host(se necessario), porta(se necessario), database
- Ex:
  ```env
    DATABASE_URL="mysql://root@localhost:3306/restaurante?schema=public&timezone=UTC"
    # DATABASE_URL="mysql://user:senha@servidor:3306/dbname?schema=public&timezone=UTC"
  ```
### Criar os models
./prisma/schema.prisma
```javascript
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Cardapio {
  id        Int     @id @default(autoincrement())
  produto   String
  descricao String
  preco     Float
  itens     Itens[]
}

model Motoboy {
  id      Int      @id @default(autoincrement())
  nome    String
  placa   String
  modelo  String
  pedidos Pedido[]
}

model Cliente {
  id                  Int      @id @default(autoincrement())
  cpf                 String   @unique
  nome                String
  telefones           String
  enderecoCep         String
  enderecoNumero      String
  enderecoComplemento String
  pedidos             Pedido[]
}

model Pedido {
  id           Int       @id @default(autoincrement())
  clienteId    Int
  cliente      Cliente   @relation(fields: [clienteId], references: [id])
  motoboyId    Int
  motoboy      Motoboy   @relation(fields: [motoboyId], references: [id])
  dataPedido   DateTime  @default(now())
  dataCozinha  DateTime?
  dataEntrega  DateTime?
  valorPedido  Float
  valorEntrega Float?
  itens        Itens[]
}

model Itens {
  id         Int      @id @default(autoincrement())
  pedidoId   Int
  pedido     Pedido   @relation(fields: [pedidoId], references: [id])
  cardapioId Int
  cardapio   Cardapio @relation(fields: [cardapioId], references: [id])
  quantidade Int
}
```
### Gerar a migrate para criar a base de dados
```cmd
  prisma migrate dev --name "descricao"
```
- Será criada uma pasta chamada migrations com o script SQL
- Dentro dela estarão os scripts de criação do banco de dados
- Caso faça alguma mudança no Schema em algum modelo
- rode novemente o script de migração
- Em seguida, popule o banco de dados com testes como a seguir
```sql
-- Popular o banco de dados com alguns dados de tetes
insert into cliente values
(default, "443.785.553-10", "Jaqueline Souza Martim","19-85916-8673, 19-70565-8763", "13917-152", "105", null),
(default, "789.588.411-50", "Sara Bispo Filho","19-04431-8940", "13917-052", "1025", null),
(default, "731.715.974-38", "Clóvis Martins Bispo","19-20609-9645", "13917-156", "1150", "Fundos"),
(default, "498.084.178-33", "Gilberto Martins Teixeira","19-34251-1302", "13917-158", "1138", "Ap144 bl2"),
(default, "066.453.810-00", "Saulo Martim","19-50210-7927, 19-54920-8113", "13914-552", "1227", null),
(default, "000.000.000-00", "Comer no local","19 99999-9999", "13917-151", "0", null);

insert into motoboy values
(default,"Gilberto Martins","JQT-7I87","CG Titan KS 150 Honda"),
(default,"Clóvis Martins","FZC-9X29","Faser 250 Yamaha"),
(default,"Saulo Martim","LHW-1J81","Ginerae"),
(default,"Sem entrega","AAA-0A00","Sem veículo");

insert into cardapio values
(default, "Parmegiana de Frango", "Filé de frango empanado, coberto com molho de tomate, presunto e queijo mussarela gratinado. Acompanha arroz branco e fritas.", 25.00),
(default, "Parmegiana de Carne", "Filé mignon empanado, coberto com molho de tomate, presunto e queijo mussarela gratinado. Acompanha arroz branco e fritas.", 30.00),
(default, "Contra Filé Argentino", "Contra filé grelhado, com molho de churrasco, farofa, Acompanha arroz branco e feijão.", 50.00),
(default, "Contra Filé Acebolado", "Contra filé grelhado, com molho de churrasco, farofa, Acompanha arroz branco e feijão.", 45.00),
(default, "Bisteca de porco", "Bisteca de porco grelhada, farofa, couve refogada, Acompanha arroz branco, feijão e torresmo.", 49.90),
(default, "Refrigerante de 2L", "Refrigerante de 2L", 15.00),
(default, "Refrigerante de 1L", "Refrigerante de 1L", 12.00),
(default, "Refrigerante de 600ml", "Refrigerante de 600ml", 8.00),
(default, "Refrigerante de 350ml", "Refrigerante de 350ml", 5.00),
(default, "Cerveja de 600ml", "Cerveja de 600ml", 8.00),
(default, "Cerveja de 350ml", "Cerveja de 350ml", 5.00);

insert into pedido values
(default, 1, 1, DATE_ADD(curtime(), INTERVAL -45 minute), DATE_ADD(curtime(), INTERVAL -20 minute), DATE_ADD(curtime(), INTERVAL -5 minute), 0, 5),
(default, 2, 2, DATE_ADD(curtime(), INTERVAL -30 minute), DATE_ADD(curtime(), INTERVAL -15 minute), null, 0, 5),
(default, 6, 4, curtime(), null, null, 0, 0);

insert into itens values
(default,1, 3, 1, (select preco from cardapio where id = 3)),
(default,1, 8, 1, (select preco from cardapio where id = 8)),
(default,2, 1, 2, (select preco from cardapio where id = 1)),
(default,3, 4, 1, (select preco from cardapio where id = 4)),
(default,3, 6, 1, (select preco from cardapio where id = 6));

-- Cadastrar a horaCozinha e horaEntrega para finalizar o pedido
-- update pedido set dataCozinha = curtime(), dataEntrega = curtime() where id = 3;

-- Cadastrar os valores dos pedidos
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 1) where id = 1;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 2) where id = 2;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 3) where id = 3;

```

### Iniciar o desenvolvimento
- No terminal, confira se está na pasta da sua API
- Inicie o projeto NodeJS normalmente e instale as principais dependências
```bash
  npm init
  npm i express cors dotenv
```
- Criar a estrutura de pastas **src**
- O prisma já trabalha com a estrutura MVC, o arquivo schema.prisma é a camada modelo.
- Editar os arquivos
- servet.js
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const rotes = require('./src/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(rotes);

app.listen(PORT, () => { console.log("API respondendo na porta " + PORT) });
```
- ./src/routes.js
```javascript
const express = require('express');

const router = express.Router();

const motoboy = require('./controllers/motoboy.controller');

router.get('/', (req, res) => { return res.json("API Restaurante respondendo") });
router.post('/motoboy', motoboy.create);
router.get('/motoboy', motoboy.read);
router.put('/motoboy', motoboy.update);
router.delete('/motoboy/:id', motoboy.del);

module.exports = router;
```
- ./src/controllers/motoboy.controller.js
```JavaScript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const motoboys = await prisma.motoboy.findMany();
    return res.json(motoboys);
}

const create = async (req, res) => {
    const data = req.body;
    const motoboy = await prisma.motoboy.create({
        data: data
    });
    return res.status(201).json(motoboy).end();
}

const update = async (req, res) => {
    const data = req.body;
    let motoboy = await prisma.motoboy.update({
        data: data,
        where: {
            id: parseInt(req.body.id)
        }
    });
    res.status(202).json(motoboy).end();
}

const del = async (req, res) => {
    let motoboy = await prisma.motoboy.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(204).json(motoboy).end();
}

module.exports = {
    read,
    create,
    update,
    del
};
```
### Testar com insomnia
- Executar o projeto
```bash
nodemon
```

### OBS:
- Este exemplo criar um CRUD apenas do objeto **motoboy** a partir dele pode seguir com a criação dos outros objetos.
- O repositório deste projeto exemplo está separado como "restaurante3des"
