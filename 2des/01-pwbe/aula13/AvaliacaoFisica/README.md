#API - Sistema de Avaliação Física
## Recursos necessários
- NoddeJS (JavaScript)
- MySQL (Preferencialmente XAMPP)
- VsCode
- Insomnia (Para executar os testes)
## Para Executar e Testar
- Clonar este repositório
- Abrir com VsCode e/ou um Terminal (cmd)
- Acessar a pasta ./back
```cmd
cd back
```
- Instalar e executar o Banco de dados ./docs/script_simples.sql
- Instalar as dependências
```cmd
npm i
```
- Executar a API
```cmd
nodemon
```
ou
```cmd
npm start
```
- Testar com Insomnia, Postman ou qualquer (API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs)
    - Caso use o insomnia pode importar o script:
    ./docs/Insomnia_2023-04-06.json
- Abrir a pasta ./front
- Executar o arquivo inxes.html via Live Server ou servidor que preferir