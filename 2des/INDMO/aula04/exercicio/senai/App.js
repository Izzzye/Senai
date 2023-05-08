import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/screens/HomeScreen';
import CursosScreen from './source/screens/CursosScreen';
import DetalhesScreen from './source/screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: '', headerTransparent: true }} />
        <Stack.Screen
          name="CursosScreen"
          component={CursosScreen}
          options={{ title: 'Lista de Cursos' }} />
        {/*<Stack.Screen
          name="DetalhesScreen"
          component={DetalhesScreen}
          options={{ title: 'Detalhes' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}