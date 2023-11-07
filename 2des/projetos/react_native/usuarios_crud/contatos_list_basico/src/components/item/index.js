import { Text, View, Image } from 'react-native';
import styles from './style';

export default function ItemList(usuario) {
    return <View style={styles.item}>
        <Image
            style={styles.img}
            source={usuario.foto}
        />
        <Text>{usuario.nome}</Text>
    </View>
}