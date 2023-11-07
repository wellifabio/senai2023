import { TouchableOpacity, Text } from 'react-native';

import styles from './style';

export default function ButtonCadastrar() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
    );
}