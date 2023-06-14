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
          options={{ title: 'SENAI Jaguariúna' }}
        />
        <Stack.Screen
          name="PerguntasScreen"
          component={PerguntasScreen}
          options={{ title: 'CURSOS' }}
        />
        <Stack.Screen
          name="ResultadosScreen"
          component={ResultadosScreen}
          options={{ title: 'DETALHES' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}