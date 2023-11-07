import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import PedidoLista from '../../components/PedidoLista'

export default function Pedidos({ navigation }) {
    const [pedidos, setPedidos] = useState([]);

    const abrirPedidos = async () => {
        try {
            const stPedidos = await AsyncStorage.getItem('pedidos');
            if (stPedidos !== null) {
                setPedidos(JSON.parse(stPedidos));
            }
        } catch (error) {
            console.log('Erro ao checar pedidos:', error);
        }
    }

    const removerTodos = async () => {
        try {
            await AsyncStorage.removeItem('pedidos');
            setPedidos([]);
        } catch (error) {
            console.log('Erro ao remover pedidos:', error);
        }
    }

    const enviarPorWhatsApp = async () => {
        let msg = 'Olá, gostaria de fazer o pedido:\n';
        let total = 0;
        pedidos.forEach(e => {
            e.produtos.forEach(p => {
                msg += `${p.quantidade} ${p.nome} de R$ ${p.preco.toFixed(2)}\n`;
            });
            msg += `Subtotal = ${e.valor.toFixed(2)}\n`;
            total += e.valor;
        });
        msg += `Total: R$ ${total.toFixed(2)}`;
        msg = encodeURI(msg);
        const url = `whatsapp://send?text=${msg}`;
        if (pedidos.length > 0)
            await Linking.openURL(url);
        else
            alert('Não há pedidos para enviar!');
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            abrirPedidos();
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pedidos</Text>
            <FlatList
                data={pedidos}
                style={styles.list}
                renderItem={({ item }) => <PedidoLista pedido={item} />}
            />
            <TouchableOpacity style={styles.buttonWhats} onPress={enviarPorWhatsApp}>
                <Text style={styles.textButton}>Enviar por WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={removerTodos}>
                <Text style={styles.textButton}>Limpar Pedidos</Text>
            </TouchableOpacity>
        </View >);
};