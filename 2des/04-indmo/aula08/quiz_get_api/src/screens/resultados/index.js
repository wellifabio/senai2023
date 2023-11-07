import React from 'react';
import { BackHandler } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ResultadosScreen({ navigation, route }) {
  const result = route.params.resultados;
  const reiniciar = () => {
    navigation.navigate('MainScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultados</Text>
      <Text style={styles.texto}>Total de perguntas: {result.perguntas}</Text>
      <Text style={styles.texto}>Acertos: {result.acertos}</Text>
      <Text style={styles.texto}>Erros: {result.erros}</Text>
      <Text style={styles.texto}>Porcentagem de acertos: {result.acertos / result.perguntas * 100}%</Text>
      <Text style={styles.texto}>Porcentagem de erros: {result.erros / result.perguntas * 100}%</Text>
      <Text style={styles.texto}>Porcentagem de aproveitamento: {result.acertos / result.perguntas * 100}%</Text>
      <Text style={styles.texto}>Nota: {result.acertos / result.perguntas * 10}</Text>
      <Text style={styles.conceito}>{result.acertos > 5?"Aprovado":"Reprovado"}</Text>
      <TouchableOpacity onPress={reiniciar} style={styles.button}>
        <Text style={styles.buttonText}>Tente outra vez</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => BackHandler.exitApp()} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

