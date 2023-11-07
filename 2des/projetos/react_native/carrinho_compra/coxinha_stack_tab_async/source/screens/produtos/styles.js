import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 80,
    },
    titulo: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 30,
        padding: 10,
        backgroundColor: '#fa3',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textShadowRadius: 1,
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 1 },
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    }
});