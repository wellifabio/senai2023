import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignItems: 'center',
        height: '100%',
    },
    list: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: 0,
        flexDirection: 'column',
        textAlign: 'center',
    },
    img: {
        maxWidth: 250,
        width: '80%',
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
    },
    link:{
        marginTop: 40,
        padding: 10,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderTopLeftRadius:20,
        borderBottomEndRadius:20,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderStartColor: "#999",       
    },
});

export default styles;