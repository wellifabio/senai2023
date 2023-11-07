
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './source/screens/LoginScreen';
import MainScreen from './source/screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Tela de Login' }} />

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Tela Principal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}