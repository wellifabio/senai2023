import { View, Image, StyleSheet, Text } from "react-native";

export default function CarrinhoLista({ item }) {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={{ uri: `${item.img}` }} />
            <View style={styles.container}>
                <Text style={styles.text}>Id: {item.id}</Text>
                <Text style={styles.text}>Nome: {item.nome}</Text>
                <Text style={styles.text}>Preço: R$ {item.preco.toFixed(2)}</Text>
            </View>
            <Text style={[styles.text,styles.center]}>Qtdade:{'\n'+item.quantidade}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        maxWidth: '100%',
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    container:{
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
    center:{
        fontWeight: 'bold',
        textAlign: 'center',
    },
});