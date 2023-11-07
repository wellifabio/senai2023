# Projeto: OS (Ordens de Serviço)

## Exeplo de projeto full-stack
- MySQL (MariaDB) XAMPP
- Back-End
    - NodeJS
    - Prisma
- Front-End
    - HTML
    - CSS
    - vanillajs

## Como testar localmente
Necessário ter instalado
- VsCode
- NodeJS 16 LTS
- XAMPP v3.3.0
- Insomnia

# API = Back-End
- 1 Clonar este repositório
- 2 Abrir com VsCode
- 3 Navegar até o diretório "back" e instale as dependências
```bash
cd back
npm i
```
- 4 Criar o arquivo .env contendo
```js
DATABASE_URL="mysql://root@localhost:3306/os?schema=public&timezone=UTC"
```
- 5 Abrir o XAMPP Control Panel e dar **start** em Apache e MySQL
- 6 Executar o comando para criar a implantação/migração do Banco de Dados
```bash
prisma migrate dev --name "descricao"
```
- OBS: Antes da migração, deve instalar o ORM **Prisma** Globalmente
```bash
npm i -g prisma
```
- 7 Para importar os dados de teste, execute o script **./testes/importa_testes.sql** no banco de Dados, alterando os caminhos das tabelas para os arquivos **CSV** na pasta **./dados**<br>Se estiver utilizando o XAMPP copie os dados e cole na aba SQL do PHPMyAdmin.
- 8 para executar a API
```bash
nodemon
```
- 9 Para testar a API abra o aplicativo Insomnia ou outro que preferir como postman, no caso do Insomnia importar o aquivo **./testes/Insomnia.json**