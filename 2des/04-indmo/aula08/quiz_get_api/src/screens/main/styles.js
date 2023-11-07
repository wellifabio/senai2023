import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
    button: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    dropdownarea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        maxHeight: 300,
    },
});

export default styles;