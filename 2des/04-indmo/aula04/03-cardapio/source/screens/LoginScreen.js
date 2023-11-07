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