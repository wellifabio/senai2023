import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import cursos from '../../../mocks/cursos.js';

const MainScreen = ({ navigation }) => {

    const [tipos, setTipos] = useState([]);

    const handleTipos = (indice) => {
        navigation.navigate('TiposScreen', { indice });
    }

    useEffect(() => {
        setTipos(cursos);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tipos de Cursos</Text>
            <FlatList
                data={tipos}
                renderItem={({ item, index }) => <TouchableOpacity style={styles.link} onPress={() => handleTipos(index)}>
                    <Text style={styles.text}>{item.tipo} - {item.descricao}</Text>
                    <Image
                        style={styles.img}
                        source={{ uri: `${item.img}` }}
                    />
                </TouchableOpacity>}
                style={styles.list}
            />
        </View>
    );
};

export default MainScreen;