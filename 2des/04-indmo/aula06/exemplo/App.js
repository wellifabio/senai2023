import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import Cart from './src/components/cart';


export default function App() {
  return (<> 
    <Cart />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </>);
}


