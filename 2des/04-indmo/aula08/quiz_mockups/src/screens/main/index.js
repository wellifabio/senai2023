import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function MainScreen({ navigation }) {
  const iniciar = () => {
    navigation.navigate('PerguntasScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quiz - To be</Text>
      <TouchableOpacity onPress={iniciar} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

