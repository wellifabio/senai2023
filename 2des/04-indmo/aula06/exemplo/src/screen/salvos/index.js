import { View, Text, StyleSheet } from "react-native"

export default function Salvos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                SALVOS
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#121214',
        fontSize: 20,
        fontWeight: 'bold',

    },
})