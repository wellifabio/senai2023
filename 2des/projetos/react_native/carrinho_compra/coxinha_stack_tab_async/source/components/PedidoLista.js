import { View, FlatList, StyleSheet, Text } from "react-native";
import CarrinhoLista from './CarrinhoLista'

export default function PedidoLista({ pedido }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Id: {pedido.id}</Text>
            <Text style={styles.text}>Usuário: {pedido.user}</Text>
            <Text style={styles.text}>Data: {pedido.data}</Text>
            <FlatList
                data={pedido.produtos}
                style={styles.list}
                renderItem={({ item }) => <CarrinhoLista item={item} />}
            />
            <Text style={[styles.text, styles.center]}>Valor: R$ {pedido.valor.toFixed(2)}</Text>
            <Text style={styles.textStatus}>Aguardando retirada no local</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pedido: {
        flex: 1,
        maxWidth: '100%',
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        alignpedidos: 'center',
    },
    container: {
        flex: 1,
        maxWidth: '100%',
    },
    img: {
        width: 100,
        height: 100,
        margin: 5,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        margin: 8,
    },
    center: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStatus: {
        width: '100%',
        textAlign: 'center',
        padding: 5,
        backgroundColor: '#fc6',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        fontSize: 20,
        color: '#444',
        textShadowRadius: 1,
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 1 },
    },
});