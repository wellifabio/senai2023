import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position:'absolute',
        top:0,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        opacity: 0.3,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
    },
    button: {
        width: '80%',
        padding: 10,
        backgroundColor: '#fa3',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 5,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 2 },
    }
});