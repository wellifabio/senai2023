import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './source/screens/login';
import Routes from './source/routes';
import Detalhes from './source/screens/detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Routes"
          component={Routes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: 'Que delícia!', headerStyle: {
              backgroundColor: '#fa3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}