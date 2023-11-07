# Aula02 - Consumindo API com React Native e JavaScript fetch
## 1. Introdução
### 1.1. O que é uma API?
- API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web.
- A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".

### Mockups
- Mockup é um termo utilizado para descrever um modelo ou protótipo de um projeto ou produto.
- Até o momento, no semestre anterior, criamos nossos aplicativos consumindo dados estáticos, ou seja, dados que nós mesmos criamos, nossos mockups.

### API REST
- REST é um acrônimo para Representational State Transfer, que significa Transferência de Estado Representacional.
- É um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services (serviços Web).

## 2. Consumindo API com React Native
### 2.1. Iniciando um novo aplicativo React Native com Expo, para consumir a API que já criamos.
- Criar um novo projeto React Native com Expo:
- Abrir o terminal CMD ou BASH e executar os comandos:
    - `expo init appcozinha`
    - `cd appcozinha`
    - `expo start`
- Caso precise instalar globalmente o expo-cli, executar o comando:
    - `npm install -g expo-cli`
- Podemos utilizar o NPX caso o npm não funcione
    - `npx expo init appcozinha`
    - `cd appcozinha`
    - `npx expo start`

### 2.2. Instalando dependências básicas
- Instalar as dependências básicas:
    - `npm install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
- Instalar a dependência do React Navigation Stack:
    - `npm install @react-navigation/stack`
- Podemos utilizar o yarn como gerenciador de pacotes
    - `yarn add react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
    - `yarn add @react-navigation/stack`

### 2.3. Configurando duas páginas uma home e outra para listar os pedidos
- Criar a pasta `src` na raiz do projeto
- Criar a pasta `screens` dentro da pasta `src`
- Criar a pasta `Home` dentro da pasta `screens`
- Criar a pasta `Pedidos` dentro da pasta `screens`
- Criar o arquivo `index.js` dentro da pasta `Home`
- Criar o arquivo `index.js` dentro da pasta `Pedidos`
- Editar o arquivo App.js com stack navigator
```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Pedidos from './src/screens/Pedidos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
- Editar o arquivo ./src/screens/Home/index.js
```js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
            title="Ir para Pedidos"
            onPress={() => navigation.navigate('Pedidos')}
        />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
```
- Editar o arquivo ./src/screens/Pedidos/index.js
```js
import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ItemPedido from '../../components/item';

const Pedidos = ({ navigation }) => {

    const [pedidos, setPedidos] = useState([]);
    const uri = 'http://localhost:3000/pedido';
    useEffect(() => {
        fetch(uri + '/cozinha', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPedidos(data);
            });
    }, []);

    const concluirPedido = (id, clienteId) => {
        const corpo = {
            id: id,
            dataCozinha: new Date(),
        }
        if (clienteId == 1) corpo.dataEntrega = new Date();

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        };
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 202) {
                    navigation.navigate('HomeScreen');
                } else {
                    alert('Erro ao concluir pedido!');
                }
            });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                renderItem={({ item }) => (
                    <View style={styles.pedido}>
                        <Text style={styles.text}>Id: {item.id}</Text>
                        <Text style={styles.text}>
                            Data: {item.dataPedido.toString().slice(0, 10) + " "}
                            Hora: {item.dataPedido.toString().slice(11, 16)}
                        </Text>
                        <Text style={styles.text}>Entrega: {item.clienteId == 1 ? "Não" : "Sim"}</Text>
                        <ItemPedido item={item.itens} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => concluirPedido(item.id, item.clienteId)}
                        >
                            <Text style={styles.buttonText}>Concluído</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default PedidosScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pedido: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    button: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
    }
});
```
- Criar uma pasta `components` dentro da pasta `src`
- Criar o arquivo `item.js` dentro da pasta `components`
- Editar o arquivo ./src/components/item.js
```js
import { StyleSheet, View, Text, FlatList } from 'react-native';
import styles from './styles'

export default function ItemPedido({ item }) {
    return (
        <FlatList
            data={item}
            renderItem={({ item }) => (
                <View style={styles.pedido}>
                    <Text style={styles.text}>Quantidade: {item.quantidade}</Text>
                    <Text style={styles.textBold}>Produto: {item.cardapio.produto}</Text>
                    <Text style={styles.text}>Descrição: {item.cardapio.descricao}</Text>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    pedido: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    }
});
```


