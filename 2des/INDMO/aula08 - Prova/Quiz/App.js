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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PerguntasScreen"
          component={PerguntasScreen}
          options={{ title: 'Perguntas', headerTintColor: "#13293d"}}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: 'Resultado',  headerTintColor: "#13293d" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}