import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import cursos from '../../../mocks/cursos.js';

const TiposScreen = ({ navigation, route }) => {
    const indice = route.params.indice;

    const handleDetalhes = (curso) => {
        navigation.navigate('DetalhesScreen', { curso });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cursos[indice].cursos}
                renderItem={({ item }) => <TouchableOpacity style={styles.link} onPress={() => handleDetalhes(item)}>
                    <Text style={styles.text}>Área: {item.area}</Text>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={[
                        styles.destaque1,
                        item.modalidade === "Presencial" && styles.destaque2,
                    ]}>{item.modalidade}</Text>
                </TouchableOpacity>}
                style={styles.list}
            />
        </View>
    );
};

export default TiposScreen;