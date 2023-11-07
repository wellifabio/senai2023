import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100,
        height: 50,
        maxHeight: 50,
        padding: 10,
        top: 145,
        left: -55,
        borderWidth: 1,
        borderColor: '#ec4',
        borderRadius: 20,
        borderBottomColor: '#999',
        borderBottomWidth: 2,
        backgroundColor: '#ca2',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 999,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },
});

export default styles;