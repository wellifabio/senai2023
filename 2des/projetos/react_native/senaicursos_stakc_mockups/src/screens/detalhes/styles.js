import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
    },
    destaque: {
        margin: 20,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#f00',
        borderRadius: 10,
        borderBottomColor: '#999',
        borderBottomWidth: 2,
        padding: 10,
    },
    quadro: {
        marginTop: 40,
        padding: 10,
        width: "100%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderStartColor: "#999",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        borderRightWidth: 1,
        borderRightColor: "#ccc",
    },
});

export default styles;