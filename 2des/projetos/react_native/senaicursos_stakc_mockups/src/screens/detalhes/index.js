import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles'

const DetalhesScreen = ({ navigation, route }) => {
    const curso = route.params.curso;
    console.log(curso);
    return (
        <View style={styles.container}>
            <View style={styles.quadro}>
                <Text style={styles.title}>{curso.nome}</Text>
                <View style={styles.quadro}>
                    <Text style={styles.text}>Resumo: {curso.resumo}</Text>
                    <Text style={styles.text}>Área: {curso.area}</Text>
                </View>
                <Text style={styles.text}>Modalidade: {curso.modalidade}</Text>
                <Text style={styles.text}>Carga Horária: {curso.cargaHoraria}</Text>
                <Text style={styles.destaque} onPress={() => Linking.openURL(curso.link)}>Saiba mais</Text>
            </View>
        </View>
    );
};

export default DetalhesScreen;