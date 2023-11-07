import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import produtos from '../mocks/produtosMock'; // importando os dados do produtos
import Produto from '../components/Produto';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <Produto prop={item} />}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
});

export default MainScreen;