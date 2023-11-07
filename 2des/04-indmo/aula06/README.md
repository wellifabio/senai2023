# Aula06 - Criando app mobile com recurso de navegação por abas

  A navegação por abas é um padrão de interface comum em aplicativos móveis, ela permite que você organize o conteúdo do seu aplicativo em diferentes guias, facilitando a navegação entre as seções principais do aplicativo.

## Bibliotecas
  - https://reactnavigation.org/docs/tab-based-navigation/
  - https://docs.expo.dev/versions/latest/sdk/reanimated/

## Passos

  - Executar o `yarn` ou `npm i` na pasta do projeto
  - Certifique-se de que no arquivo babel.config.js esteja inserido: `plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
    ]`

  - Executar `yarn start` ou `npm run start`

## Tutorial sobre Navegações entre telas
- https://oieduardorabelo.medium.com/react-native-navega%C3%A7%C3%B5es-complexas-com-react-navigation-583a8f5a4a7

# Dependencias

  yarn add react-native-reanimated
  yarn add react-native-safe-area-context
  yarn add react-native-screens
  yarn add @react-navigation/bottom-tabs
  yarn add @react-navigation/native

ou 

  yarn add react-native-reanimated react-native-safe-area-context react-native-screens @react-navigation/bottom-tabs @react-navigation/native

ou 

  npx expo install react-native-reanimated
  npx expo install react-native-safe-area-context
  npx expo react-native-screens
  npx expo @react-navigation/bottom-tabs
  npx expo @react-navigation/native

# Inserir no babel.config.js conforme ao lado
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
    ]
