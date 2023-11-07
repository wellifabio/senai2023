# App Cursos SENAI
### Solução da atividade da aula04
## Ambiente
Necessário ter instalado:
- VsCode
- NodeJS
# Processo para testar no PC
- 1. Clonar este repositório
- 2. Abrir com VsCode
- 3. Abrir um terminal "cmd" ou "bash"
- 4. Instalar as dependências
```bash
npm i
```
ou 
```bash
yarn
```
- 5. Executar com expo em um dispositivo virtual, real ou web
```bash
expo start
```
ou 
```bash
yarn web
```
#### Dependências
```cmd
yarn add @react-navigation/native
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native-stack
yarn add @expo/vector-icons
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add react-native-reanimated
npm install --save-dev @babel/plugin-proposal-export-namespace-from
```
- Certifique-se de que no arquivo **babel.config.js** esteja inserido:
```javascript
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
    ]
 ```

#Expo Ícones
![Pesquisar ícones](https://icons.expo.fyi/)