
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Destaques from './screens/Destaques'
import Profile from './screens/Profile'
import Favorites from './screens/Favorites'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: false,

        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#fff',
          borderTopWidth: 0,

          bottom: Platform.OS === 'android' ? 14 : 28,
          left: 14,
          right: 14,
          elevation:0,
          borderRadius: 4,
          height: 60,
          paddingBottom: 0, // Apenas no iOS para zerar o padding do IOS
        }
      }}    
    >
      <Tab.Screen
        name="Destaques"
        component={Destaques}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                return <Ionicons name="home" size={size} color={color} />
              }

              return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                return <Ionicons name="bookmark" size={size} color={color} />
              }

              return <Ionicons name="bookmark-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                return <Ionicons name="person" size={size} color={color} />
              }

              return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes;