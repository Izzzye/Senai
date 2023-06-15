import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/main';
import PerguntasScreen from './src/screens/perguntas';
import ResultScreen from './src/screens/result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen
          name="PerguntasScreen"
          component={PerguntasScreen}
          options={{ title: 'Perguntas' }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: 'Resultado' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}