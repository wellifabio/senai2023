import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import users from '../../../mocks/usuarios';
import ItemList from '../../components/item';

export default function Usuarios({ navigation }) {
  function abrirDetalhes(usuario) {
    navigation.navigate('Detalhes', { usuario })
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        style={styles.list}
        renderItem={({ item }) => <TouchableOpacity onPress={() => abrirDetalhes(item)}>
          {ItemList(item)}
        </TouchableOpacity>}
      >
      </FlatList>
    </View>
  );
}