import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function DetalhesScreen({ navigation, route }) {
    const produto = route.params.dados;
    const indice = route.params.index;

    const comprar = () => {
        navigation.navigate("Carrinho", { produto: produto })
    }

    const remover = () => {
        navigation.navigate("Carrinho", { indice: indice + 1 })
    }

    if (indice >= 0) {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: `${produto.img}` }}></Image>
                <View style={styles.textos}>
                    <Text style={styles.text}>Nome: {produto.nome}</Text>
                    <Text style={styles.text}>Complemento: {produto.preco}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={remover}>
                    <Text style={styles.textButton}>Remover ítem</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: `${produto.img}` }}></Image>
                <View style={styles.textos}>
                    <Text style={styles.text}>Nome: {produto.nome}</Text>
                    <Text style={styles.text}>Complemento: {produto.preco}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={comprar}>
                    <Text style={styles.textButton}>Quero um deste!</Text>
                </TouchableOpacity>
            </View>
        );
    }
};
