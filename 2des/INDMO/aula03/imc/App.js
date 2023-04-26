import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text>
      <Text>Peso</Text>
      <TextInput></TextInput>
      <Text>Altura</Text>
      <TextInput></TextInput>
      <TouchableOpacity>Calcular</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3e3fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
