# Estacionamento FullStack (Node + MongoDB)
## Tutorial CRUD (TypeStript + MongoDB)
- iniciando projeto com yarn
```cmd
yarn init -y
```
- Dependências iniciais
```cmd
yarn add -D typescript sucrase express mongoose dotenv
```
- Utilizando o **sucrase** para transpilar no lugar do **tsc**
    - Alterar o *package.json* adicionando as seguintes linhas
```json
  "scripts": {
    "dev": "sucrase-node src/server.ts",
    "build": ""
  },
```
- Criar um arquivo **/src/server.ts**
```typescript
const a: number = 5;
console.log(a);
```
- Executar a primeira vez para testar:
```cmd
yarn dev
```
- A transpilação será muito mais rápida do que com *tsc*, pois o *sucrase* ignora códigos desnecessários
- Para automatizar a execução podemos utilizar o **nodemon** criando um arquivo **nodemon.json**
```cmd
yarn add -D nodemon
```
- ./nodemon.json
```json
{
    "whach":["src"],
    "ext": "ts",
    "execMap": {
        "ts": "sucrase-node src/server.ts"
    }
}
```
- Alterar o *package.json* adicionando as seguintes linhas
```json
    "dev": "nodemon src/server.ts",
```
- Executar novamente, verifique que agora o nodemon está ativo:
```cmd
yarn dev
```
Fonte: https://www.youtube.com/watch?v=aTf8QTjw4RE
