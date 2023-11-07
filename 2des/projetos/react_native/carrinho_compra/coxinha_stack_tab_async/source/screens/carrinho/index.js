import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import CarrinhoLista from '../../components/CarrinhoLista'

export default function Carrinho({ navigation, route }) {
    const item = route.params;
    const [itens, setItens] = useState([]);
    const [total, setTotal] = useState(0);
    let user = '';

    const calcTotal = () => {
        let acumula = 0;
        itens.forEach(e => {
            acumula += e.preco * e.quantidade;
        });
        setTotal(acumula);
    }

    const abrirItens = async () => {
        try {
            const stItens = await AsyncStorage.getItem('itens');
            if (stItens !== null) {
                setItens(JSON.parse(stItens));
            }
        } catch (error) {
            console.log('Erro ao carregar Storage:', error);
        }
    }

    const abrirUser = async () => {
        try {
            const stUser = await AsyncStorage.getItem('user');
            if (stUser !== null) {
                user = JSON.parse(stUser).username;
            }
        } catch (error) {
            console.log('Erro ao carregar Storage:', error);
        }
    }

    const salvarItens = async () => {
        try {
            await AsyncStorage.setItem('itens', JSON.stringify(itens));
        } catch (error) {
            console.log('Erro ao salvar itens:', error);
        }
    }

    const addItem = (produto) => {
        let its = itens;
        let encontrado = false;
        its.forEach(e => {
            if (e.id === produto.id) {
                e.quantidade++;
                encontrado = true;
            }
        });
        if (!encontrado) {
            produto.quantidade = 1;
            its.push(produto);
        }
        setItens(its);
    }

    const removeIten = (indice) => {
        let its = itens;
        indice--;
        its.splice(indice, 1);
        setItens(its);
    }

    const removeItens = async () => {
        try {
            await AsyncStorage.removeItem('itens');
            setItens([]);
        } catch (error) {
            console.log('Erro ao remover itens:', error);
        }
    }

    const removeUser = async () => {
        try {
            await AsyncStorage.removeItem('user');
        } catch (error) {
            console.log('Erro ao remover itens:', error);
        }
    }

    const abrirPedidos = async () => {
        try {
            const stPedidos = await AsyncStorage.getItem('pedidos');
            if (stPedidos !== null) {
                return JSON.parse(stPedidos);
            }
        } catch (error) {
            console.log('Erro ao checar pedidos:', error);
        }
    }

    const salvarPedido = async (pedidos) => {
        try {
            await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
        } catch (error) {
            console.log('Erro ao salvar pedidos:', error);
        }
    }

    const enviarPedido = async () => {
        if (itens.length > 0) {
            const pedidos = await abrirPedidos() || [];
            const pedido = {
                id: pedidos.length + 1,
                user: user,
                valor: total,
                data: new Date(),
                produtos: itens,
            }
            pedidos.push(pedido);
            await salvarPedido(pedidos);
            removeItens();
            navigation.navigate('Pedidos');
        } else {
            alert('Pedido vazio, acrescente novos itens.');
        }
    }

    const cancelarCarrinho = () => {
        removeItens();
    }

    const irParaDetalhes = (dados, index) => {
        navigation.navigate('Detalhes', { dados, index });
    }

    const sair = () => {
        removeUser();
        navigation.navigate('Login');
    }

    useEffect(() => {
        if (item) {
            let produto = route.params.produto;
            let indice = route.params.indice;
            if (produto) addItem(produto);
            if (indice) removeIten(indice);
            salvarItens();
        } else {
            abrirItens();
            abrirUser();
        }
        calcTotal();
    }, [item]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carrinho</Text>
            <Text style={styles.textTotal}>Total do Pedido: R$ {total.toFixed(2)}</Text>
            <FlatList
                data={itens}
                style={styles.list}
                renderItem={({ item, index }) => <TouchableOpacity style={styles.item} onPress={() => irParaDetalhes(item, index)}>
                    <CarrinhoLista item={item} />
                </TouchableOpacity>}
            />
            <TouchableOpacity style={styles.button} onPress={enviarPedido}>
                <Text style={styles.textButton}>Enviar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelarCarrinho}>
                <Text style={styles.textButton}>Esvaziar Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={sair}>
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>
        </View >);
};