import { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native"
import { Ionicons } from '@expo/vector-icons'
import Animated, { SlideInRight} from 'react-native-reanimated';



export default function Cart() {
    const [mostrarCart, setMostrarCart] = useState(false)

    const startAnimation = () => {
        translateXValue.value = withTiming(200, { duration: 500 });
      };

    const toggleMostrarCart = () => setMostrarCart(!mostrarCart)

    return (
        <>
            {mostrarCart && 
                (
                    <View  
                        style={styles.container}>
                        <Text onPress={toggleMostrarCart} style={styles.preco}>
                            0,00
                        </Text>
                    </View>
                )
            }
            {!mostrarCart && (
                (
                    <Animated.View 
                        entering={SlideInRight.duration(3000)}
                        style={styles.containerDois}>
                        <Text onPress={toggleMostrarCart} style={styles.icon}>
                            <Ionicons
                                name={'cart'}
                                size={20}
                                color={'white'}
                            />
                        </Text>
                    </Animated.View>
                )
            )} 
                
            
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 30,
        padding: 10,
        flex: 1,
        top: '10px',
        borderRadius: 10,
        left: '-10px',
        position: 'fixed',
        backgroundColor: 'orange',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 999,
    },
    preco: {
        color: '#f1f1f1'
    },
    containerDois: {
        width: 60,
        height: 30,
        padding: 10,
        paddingRight:5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
        top: '10px',
        left: '-25px',
        position: 'fixed',
        backgroundColor: 'orange',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 999,
    },
    icon: {

    }
})