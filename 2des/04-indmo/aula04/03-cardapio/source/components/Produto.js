import { View, Text, StyleSheet, Image } from 'react-native';

const Produto = ({ prop }) => (
    <View style={styles.item}>
        <>
            <Text style={styles.titulo}>{prop.id}</Text>
            <Text style={styles.texto}>{prop.nome}</Text>
            <Text style={styles.preco}>{prop.preco}</Text>
        </>
        <Image
            style={styles.miniatura}
            source={prop.img}
        />
    </View>
);

const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
        marginVertical: 5,
    },
    preco: {
        fontSize: 16,
        color: 'green',
    },
    miniatura: {
        resizeMode: 'contain',
        width: 200,
        height: 180,
    },
});

export default Produto;