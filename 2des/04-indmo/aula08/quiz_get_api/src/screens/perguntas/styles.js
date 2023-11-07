import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    item: {
        backgroundColor: '#000',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 32,
    },
    text:{
        fontSize: 20,
        color: '#fff',
    },
    img:{
        width: 200,
        height: 200,
    },
});

export default styles;