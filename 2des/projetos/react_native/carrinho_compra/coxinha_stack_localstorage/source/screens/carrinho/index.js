import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import CarrinhoLista from '../../components/CarrinhoLista'

export default function Carrinho({ navigation, route }) {
    const item = route.params;
    let acumula = 0;
    let itens = [];

    const total = () => {
        acumula = 0;
        itens.forEach(e => {
            acumula += e.preco * e.quantidade;
        });
    }

    if (localStorage.getItem('itens')) {
        itens = JSON.parse(localStorage.getItem('itens'));
        total();
    }

    if (item) {
        let produto = route.params.produto;
        let indice = route.params.indice;
        let encontrado = false;
        if (produto) {
            produto.quantidade = 1;
            itens.forEach(e => {
                if (e.id === produto.id) {
                    e.quantidade++;
                    encontrado = true;
                }
            });
            if (!encontrado) itens.push(produto);
            localStorage.setItem('itens', JSON.stringify(itens));
        }
        if (indice) {
            indice--;
            itens.splice(indice, 1);
            localStorage.setItem('itens', JSON.stringify(itens));
        }
        total();
    }

    const enviar = () => {
        if (itens.length > 0) {
            const pedido = {
                user: JSON.parse(localStorage.getItem('user')).username,
                valor: acumula,
                data: new Date(),
                produtos: itens,
            }
            navigation.navigate('Pedidos', { pedido: JSON.stringify(pedido) });
            localStorage.removeItem('itens');
            itens=[];
        } else {
            alert('Pedido vazio, acrescente novos itens.');
            navigation.navigate('Carrinho', { pedido: false });
        }
    }

    const cancelar = () => {
        localStorage.removeItem('itens');
        navigation.navigate('Carrinho', { pedido: false });
    }

    const sair = () => {
        localStorage.removeItem('user');
        navigation.navigate('Login');
    }

    const listarProdutos = () => {
        navigation.navigate('Produtos');
    }

    const abrirDetalhes = (dados, index) => {
        navigation.navigate('Detalhes', { dados, index });
    }

    const pedidos = () => {
        navigation.navigate('Pedidos', { pedido: false });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={listarProdutos}>
                <Text style={styles.textButton}>O que vai querer hoje?<br />Escolha seu lanchinho:</Text>
            </TouchableOpacity>
            <FlatList
                data={itens}
                style={styles.list}
                renderItem={({ item, index }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item, index)}>
                    <CarrinhoLista item={item} />
                </TouchableOpacity>}
            />
            <Text style={styles.textTotal}>Total do Pedido: R$ {acumula.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={enviar}>
                <Text style={styles.textButton}>Enviar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelar}>
                <Text style={styles.textButton}>Cancelar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pedidos}>
                <Text style={styles.textButton}>Acompanhar Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={sair}>
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>
        </View >);
};