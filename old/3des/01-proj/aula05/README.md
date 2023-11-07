# Recursos Avançados - ORM Prisma
## Sistema de Vendas/Loja
- Entidades
	- Produtos
	- Vendedores
	- Vendas
	- Detalhes
- Back-End em NodeJS + Framework ORM (Prisma)

## Novo Projeto
### Abrir o VSCode
### No terminal, Iniciar Prisma
```cmd
  npm i -g prisma
  prisma init --datasource-provider mysql
```
### Configurar o .ENV
- Substituir usuario, senha, host(se necessario), porta(se necessario), database
- Ex:
  ```env
    DATABASE_URL="mysql://root@localhost:3306/afazer?schema=public&timezone=UTC"
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

model Setor {
  id         Int          @id @default(autoincrement())
  nome       String
  comissao   Float
  produtos   Produtos[]
  vendedores Vendedores[]
}

model Produtos {
  id       Int        @id @default(autoincrement())
  nome     String
  valor    Float
  id_setor Int
  setor    Setor      @relation(fields: [id_setor], references: [id])
  detalhes Detalhes[]
}

model Vendedores {
  id       Int      @id @default(autoincrement())
  nome     String
  salario  Float
  id_setor Int
  setor    Setor    @relation(fields: [id_setor], references: [id])
  vendas   Vendas[]
}

model Vendas {
  id          Int        @id @default(autoincrement())
  data        DateTime
  id_vendedor Int
  vendedor    Vendedores @relation(fields: [id_vendedor], references: [id])
  detalhes    Detalhes[]
}

model Detalhes {
  id         Int      @id @default(autoincrement())
  id_venda   Int
  id_produto Int
  quantidade Int
  venda      Vendas   @relation(fields: [id_venda], references: [id])
  produto    Produtos @relation(fields: [id_produto], references: [id])
}

```


### Gerar a migrate para criar a base de dados
```cmd
- prisma migrate dev --name "descricao"
```
### Codificar os src/controles, src/rotas e server.js
./src/controllers/produto-controller.js
```javascript
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const create = async (req, res) => {
    let produto = await prisma.produtos.create({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const read = async (req, res) => {
    let produtos = await prisma.produtos.findMany();

    res.status(200).json(produtos).end();
}

const update = async (req, res) => {
    let produto = await prisma.produtos.update({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const remove = async (req, res) => {
    let produto = await prisma.produtos.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(produto).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}
```
./src/controllers/setor-controller.js
./src/controllers/veda-controller.js
./src/controllers/vendedor-controller.js

### Rotas e server, segue o padrão normal.
