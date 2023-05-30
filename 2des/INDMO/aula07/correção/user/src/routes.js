import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles';

import Usuarios from './screens/usuarios';
import Detalhes from './screens/detalhes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  console.log(Platform.OS)
  return (<Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#ca2',
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar
    }}
  >
    <Tab.Screen
      name="Usuarios"
      component={Usuarios}
      options={{
        headerStyle: styles.title,
        tabBarIcon: ({ color, size, focused }) => {
          if (focused) {
            return <Ionicons name="home" size={30} color={color} />
          }
          return <Ionicons name="home-outline" size={size} color={color} />
        }
      }}
    />
    <Tab.Screen
      name="Detalhes"
      component={Detalhes}
      options={{
        headerStyle: styles.title,
        tabBarIcon: ({ color, size, focused }) => {
          if (focused) {
            return <Ionicons name="person" size={30} color={color} />
          }
          return <Ionicons name="person-outline" size={size} color={color} />
        }
      }}
    />
  </Tab.Navigator>);
}