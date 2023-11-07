import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 300,
    },
    textos:{
        width: '100%',
    },
    text:{
        fontSize: 16,
        margin: 5,
    },
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fa3',
        alignItems: 'center',
        color: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        textShadowRadius: 1,
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 1 },
    }
});