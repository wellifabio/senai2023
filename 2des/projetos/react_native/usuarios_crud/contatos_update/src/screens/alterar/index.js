import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Alterar({ navigation, route }) {
  const usuario = route.params.usuario;
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [nascimento, setNascimento] = useState(usuario.nascimento);
  function alterar() {
    usuario.nome = nome;
    usuario.email = email;
    usuario.nascimento = nascimento;
    navigation.navigate('Usuarios', { usuario });
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: `${usuario.foto}` }}
      />
      <View style={styles.texts}>
        <Text style={styles.text}>Id: {usuario.id}</Text>
        <Text style={styles.text}>Nome: </Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text style={styles.text}>Email: </Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.text}>Nascimento: </Text>
        <TextInput style={styles.input} value={nascimento} onChangeText={setNascimento} />
      </View>
      <TouchableOpacity style={styles.button} onPress={alterar}>
        <Text style={styles.textb}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}