import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './source/screens/login';
import Produtos from './source/screens/produtos';
import Carrinho from './source/screens/carrinho';
import Detalhes from './source/screens/detalhes';
import Pedidos from './source/screens/pedidos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Tela de Login' }} />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{ title: 'Faça seu Pedido e Acopanhe' }}
        />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{ title: 'Escolha o Produto' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: 'Que delícia!' }}
        />
        <Stack.Screen
          name="Pedidos"
          component={Pedidos}
          options={{ title: 'Acompanhe seus pedidos!' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}