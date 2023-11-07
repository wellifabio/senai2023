import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxHeight: '90%',
    },
    img: {
        width: '80%',
        height: '100%',
        maxHeight: 300,
    },
    texts: {
        flex: 1,
        width: '80%',
        flexDirection: 'column',
        textAlign: 'left',
    },
    text: {
        fontSize: 18,
        margin: 10,
    },
    button: {
        width: '80%',
        backgroundColor: '#ca2',
        textAlign: 'center',
        padding: 10,
        shadowColor: '#999',
        shadowOffset: { width: -1, height: 1 },
        margin: 5,
    },
    textb: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: '#333',
        textShadowOffset: { width: -1, height: 1 },
    },
    input: {
        fontSize: 18,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    }
});

export default styles;