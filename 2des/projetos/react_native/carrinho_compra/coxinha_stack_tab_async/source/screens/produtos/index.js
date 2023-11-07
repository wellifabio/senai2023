import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Prods from '../../mocks/produtos'
import ProdutoLista from '../../components/ProdutoLista'

export default function Produtos({ navigation }) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>O que vai querer hoje?</Text>
            <FlatList
                data={Prods}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item)}>
                    <ProdutoLista prod={item} />
                </TouchableOpacity>}
            />
        </View >);
};