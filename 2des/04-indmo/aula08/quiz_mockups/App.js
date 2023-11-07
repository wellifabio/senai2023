import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/main';
import PerguntasScreen from './src/screens/perguntas';
import ResultadosScreen from './src/screens/resultados';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Teste seu Inglês' }}
        />
        <Stack.Screen
          name="PerguntasScreen"
          component={PerguntasScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen
          name="ResultadosScreen"
          component={ResultadosScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}