import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Primeiro App</Text>
      <TextInput style={styles.input}/>
      <Button title='Cadastrar'/>
      <TouchableOpacity>
        <Text>Autenticar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5426',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: '#333',
    backgroundColor: '#e5e5e5',
    padding: '5px'
  }
});
