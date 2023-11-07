import {useState} from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';


export default function Cart() {
    const [cart, setCart] = useState(0);

    
    const getItem = async (key) => {
        if(Platform.OS === 'web' ){
            let preco = window.localStorage.getItem('preco')
            setCart(preco)
            return
        }
        AsyncStorage.getItem(key)
            .then((valor) => {
          console.log(valor);
        });
    
    }
    return (
        <>
            <TouchableOpacity onPress={()=> getItem('teste')} style={styles.container2}>
                <Text style={styles.title}>Get</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        flex: 1,
        top: '10px',
        left: '10px',
        position: 'fixed',
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    container2: {
        width: 50,
        height: 50,
        flex: 1,
        top: '10px',
        left: '60px',
        position: 'fixed',
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    title: {
        color: '#121214',
        fontSize: 20,
        fontWeight: 'bold',
    },
});