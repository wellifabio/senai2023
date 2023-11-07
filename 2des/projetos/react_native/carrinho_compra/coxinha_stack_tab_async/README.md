# App - Carrinho de compras
## Exemplo com recuros, AsyncStorage, Stack e Tab Navigation

|Download para testar em colular Android|
|:-:|
|[APK](https://expo.dev/artifacts/eas/ePWUt7mLpG84tbC1YT4Lpc.apk)|
# Processo para testar no PC
## Ambiente
Necessário ter instalado:
- VsCode
- NodeJS
## Passos
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

- Certifique-se de que no arquivo babel.config.js esteja inserido:
```javascript
plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin'
]
```
### Dependências
```cmd
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/bottom-tabs
yarn add @react-native-async-storage/async-storage
yarn add @expo/vector-icons
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add react-native-reanimated
```