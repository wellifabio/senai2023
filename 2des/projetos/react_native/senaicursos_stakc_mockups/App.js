import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/main';
import TiposScreen from './src/screens/tipos';
import DetalhesScreen from './src/screens/detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'SENAI Jaguariúna' }}
        />
        <Stack.Screen
          name="TiposScreen"
          component={TiposScreen}
          options={{ title: 'CURSOS' }}
        />
        <Stack.Screen
          name="DetalhesScreen"
          component={DetalhesScreen}
          options={{ title: 'DETALHES' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}