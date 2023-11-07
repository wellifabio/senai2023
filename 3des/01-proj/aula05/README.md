## Aula05 - SAEP Semestre anterior

### Instruções
- [Prova](./prova1.pdf)
- [Avaliação](./ficha.pdf)
- [Planta](./planta1.png)
- [Dados](./dados)

# Para testar localmente

## Necessário ter instalado
- VsCode
- NodeJS
- Insomnia

## Passos para executar o Back-End
- 1 Clonar este repositório, juntamente com a pasta **dados** e abrir com o VsCode.
- 2 Na pasta **solucao/back** criar o arquivo **.env** contendo as variáveis de ambiente a seguir:
```
DATABASE_URL="mysql://root@localhost:3306/fabrica"
```
- 3 Abrir o MySQL caso utilize o XAMPP iniciar o MySQL e o Apache
- 4 Implantar o Banco de dados.
    - 4.1 Abrir o terminal do VsCode **CTRL + "**.
    - 4.2 Acessar a pasta solucao/back
    ```bash
    cd solucao
    cd back
    ```
    - 4.3 Instalar as dependências
    ```bash
    npm install
    ```
    - 4.4 Executar a migração do Banco de dados
    ```
    prisma migrate dev --name "migracao1"
    ```
        - 4.4.1 Caso o prisma não esteja instalado
    ```bash
        npm i -g prisma
    ```
        - 4.4.2 Caso o comando prisma não execute diretamente utilize "npx"
- 5 Importar os dados dos arquivos **csv** para o banco de dados **SQL**. Obs: corrija os paths (caminhos) do script a seguir
```sql
use fabrica;

LOAD DATA INFILE 'D:/wellington/senai2023/3des/01-proj/aula05/dados/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/senai2023/3des/01-proj/aula05/dados/automoveis.csv'
INTO TABLE automoveis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/senai2023/3des/01-proj/aula05/dados/concessionarias.csv'
INTO TABLE concessionaria
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/senai2023/3des/01-proj/aula05/dados/alocacao.csv'
INTO TABLE alocacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
```
    - 5.1 Execute o script acima no SGBD MySQL, via PhpMyAdmin ou Shell
- 6 Executar o Back-End
```bash
nodemon
ou
node server.js
```
- 7 Utilize o aplicativo **Isomnia** para testar o Back-End na hota **http://localhost:3000/**

## Passos para executar o Back-End
- 1 Abrir o arquivo **solucao/front/index.html** com Live Server.