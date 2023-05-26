import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/main';
import DetalhesScreen from './src/screens/detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Usuários' }}
        />
        {/* <Stack.Screen
          name="DetalhesScreen"
          component={DetalhesScreen}
          options={{ title: 'Detalhes' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
