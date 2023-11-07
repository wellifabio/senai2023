import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const produtos = [
  { id: 1, nome: 'Produto 1', img: require('../assets/produto1.png'), preco: 19.99 },
  { id: 2, nome: 'Produto 2', img: require('../assets/produto2.png'), preco: 29.99 },
  { id: 3, nome: 'Produto 3', img: require('../assets/produto3.png'), preco: 39.99 },
];

const MainScreen = ({ navigation }) => {

  const handleProdutoPress = (produto) => {
    navigation.navigate('Detalhes', { produto });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleProdutoPress(item)}>
      <Text style={styles.titulo}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainScreen;