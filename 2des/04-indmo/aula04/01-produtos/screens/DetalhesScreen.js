import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalhesScreen = ({ route }) => {
    const { produto } = route.params;

    return (
        <View style={styles.container}>
            <Image source={produto.img} style={styles.imagem} />
            <Text style={styles.titulo}>{produto.nome}</Text>
            <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: '80%',
        height: 200,
        resizeMode: 'contain',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    preco: {
        fontSize: 18,
        color: 'green',
        marginTop: 10,
    },
});

export default DetalhesScreen;