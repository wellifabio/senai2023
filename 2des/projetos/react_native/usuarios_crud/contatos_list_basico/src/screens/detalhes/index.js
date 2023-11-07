import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Detalhes({ navigation, route }) {
  const usuario = {
    id: 0,
    nome: '',
    email: '',
    foto: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    nascimento: ''
  }
  if (route.params != undefined) {
    usuario.id = route.params.usuario.id;
    usuario.nome = route.params.usuario.nome;
    usuario.email = route.params.usuario.email;
    usuario.foto = route.params.usuario.foto;
    usuario.nascimento = route.params.usuario.nascimento;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={usuario.foto}
      />
      <View style={styles.texts}>
        <Text style={styles.text}>Id: {usuario.id}</Text>
        <Text style={styles.text}>Nome: {usuario.nome}</Text>
        <Text style={styles.text}>Email: {usuario.email}</Text>
        <Text style={styles.text}>Nascimento: {usuario.nascimento}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textb}>Alterar</Text>
      </TouchableOpacity>
    </View>
  );
}