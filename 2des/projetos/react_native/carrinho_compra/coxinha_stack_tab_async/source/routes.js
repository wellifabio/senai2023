import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Carrinho from './screens/carrinho';
import Produtos from './screens/produtos';
import Pedidos from './screens/pedidos';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    bottom: Platform.OS === 'android' ? 14 : 28,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 4,
                    height: 60,
                    paddingBottom: 0,
                }
            }}
        >
            <Tab.Screen
                name="Carrinho"
                component={Carrinho}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="cart" size={45} color={'#fa3'} />
                        }
                        return <Ionicons name="cart-outline" size={35} color={'#fa3'} />
                    }
                }}
            />
            <Tab.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="fast-food" size={45} color={'#fa3'} />
                        }
                        return <Ionicons name="fast-food-outline" size={35} color={'#fa3'} />
                    }
                }}
            />
            <Tab.Screen
                name="Pedidos"
                component={Pedidos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="send" size={45} color={'#fa3'} />
                        }
                        return <Ionicons name="send-outline" size={35} color={'#fa3'} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}