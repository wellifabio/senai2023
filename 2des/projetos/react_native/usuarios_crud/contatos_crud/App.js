import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes';
import Alterar from './src/screens/alterar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Routes"
          component={Routes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Alterar"
          component={Alterar}
          options={{ headerStyle: { backgroundColor: '#ca2' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}