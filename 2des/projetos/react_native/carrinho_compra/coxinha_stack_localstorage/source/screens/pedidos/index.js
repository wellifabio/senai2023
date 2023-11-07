import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import PedidoLista from '../../components/PedidoLista'

export default function Pedidos({ navigation, route }) {
    const pedido = JSON.parse(route.params.pedido);
    let pedidos = [];

    if (localStorage.getItem('pedidos')) {
        pedidos = JSON.parse(localStorage.getItem('pedidos'));
    }

    if (pedido) {
        pedido.id = pedidos.length + 1;
        pedidos.push(pedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
    }
    
    const limpar = () => {
        localStorage.removeItem('pedidos');
        navigation.navigate('Pedidos', { pedido: false });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                style={styles.list}
                renderItem={({ item }) => <PedidoLista pedido={item} />}
            />
            <TouchableOpacity style={styles.button} onPress={limpar}>
                <Text style={styles.textButton}>Limpar Pedidos</Text>
            </TouchableOpacity>
        </View >);
};