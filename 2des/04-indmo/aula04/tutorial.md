# Tutorial Tela de Login e Tela Principal
Passo a passo para criar um aplicativo React Native com Expo que apresenta uma tela de login e, se a entrada estiver correta, direciona para uma tela principal que contém uma lista de produtos do cardápio da cantina.

- 1. Crie um novo projeto Expo executando o seguinte comando no terminal:
```cmd
npx expo init cardapio
```
- 2. Navegue até a pasta do projeto, instale as dependências e inicie o servidor de desenvolvimento com o comando:
```cmd
cd cardapio
yarn add @react-navigation/native
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add react-native-svg
yarn add @react-navigation/native-stack
yarn add react-native-mask-input
```
- Execute o projeto no seu navegador web
```cmd
yarn web
```
- Caso solisite mais alguma dependência instale com npx, e novamente execute:
```cmd
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
yarn web
```
- Caso queira executar em um dispositivo virtual do Android, Abra seu dispositivo virtual, inicie o expo com o comando a seguir 
```cmd
expo start -a
```
-  3. Depois que o App estiver em execução no navegador, crie a seguinte estrutura de pastas:
```cmd
md source
md source\screens
md source\components
md source\mocks
```
    - 3.1 dentro da pasta  './source/components' crie os arquivos:
        - Produto.js
    - 3.2. dentro da pasta  './source/mocks' crie os arquivos:
        - produtosMock.js
        - userMock.js
    - 3.3. dentro da pasta  './source/screens' crie os arquivos:
        - LoginScreen.js
        - MainScreen.js
- 4. No arquivo **userMock.js** coloque o seguinte codigo com os dados de acesso do usuário
```javascript
const user = {
    username: 'admin',
    password: '1234',
};

export default user;
```
- 5. No arquivo **produtosMock.js** coloque o seguinte codigo com os dados dos produtos que serão listados, certifique-se que as imagens estejam na pasta assets/imgs
```javascript
import coxinha from '../../assets/imgs/coxinha.png'
import pqueijo from '../../assets/imgs/pqueijo.png'
import pbatata from '../../assets/imgs/pbatata.png'
import hamburgao from '../../assets/imgs/hamburgao.png'
import empada from '../../assets/imgs/empada.png'
import palmito from '../../assets/imgs/palmito.png'

const produtos = [
    {
        id: 1,
        nome: 'Coxinha',
        img: coxinha,
        preco: 7
    },
    {
        id: 2,
        nome: 'Pão de Queijo',
        img: pqueijo,
        preco: 4.5
    },
    {
        id: 3,
        nome: 'Pão de Batata',
        img: pbatata,
        preco: 7
    },
    {
        id: 4,
        nome: 'Hamburguer',
        img: hamburgao,
        preco: 7
    },
    {
        id: 5,
        nome: 'Empada',
        img: empada,
        preco: 7
    },
    {
        id: 6,
        nome: 'Assado de Palmito',
        img: palmito,
        preco: 7
    }
];

export default produtos;
```
- 6. No arquivo de componente **Produto.js** coloque o seguinte codigo
```javascript
import { View, Text, StyleSheet, Image } from 'react-native';

const Produto = ({ prop }) => (
    <View style={styles.item}>
        <>
            <Text style={styles.titulo}>{prop.id}</Text>
            <Text style={styles.texto}>{prop.nome}</Text>
            <Text style={styles.preco}>{prop.preco}</Text>
        </>
        <Image
            style={styles.miniatura}
            source={prop.img}
        />
    </View>
);

const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
        marginVertical: 5,
    },
    preco: {
        fontSize: 16,
        color: 'green',
    },
    miniatura: {
        resizeMode: 'contain',
        width: 200,
        height: 180,
    },
});

export default Produto;
```
- 7. No arquivo **MainScreen.js** coloque o seguinte código onde será renderizada a FlatList
```javascript
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import produtos from '../mocks/produtosMock'; // importando os dados do produtos
import Produto from '../components/Produto';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <Produto prop={item} />}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
});

export default MainScreen;
```
- 8. No arquivo **LoginScreen.js** coloque o seguinte codigo
```javascript
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import user from '../mocks/userMock';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('1234');

    const handleLogin = () => {
        // Verificando as credenciais fornecidas com as credenciais armazenadas
        if (username === user.username && password === user.password) {
            navigation.navigate('MainScreen');
        } else {
            alert('Usuário ou senha incorretos!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default LoginScreen;
```
- 9. E finalmente no arquivo **App.js** coloque o seguinte codigo
```javascript

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './source/screens/LoginScreen';
import MainScreen from './source/screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Tela de Login' }} />

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Tela Principal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
- Faça testes executando via Web, Celular ou Android Virtual