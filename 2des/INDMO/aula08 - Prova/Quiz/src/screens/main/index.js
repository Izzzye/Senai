import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MainScreen({navigation}) {
  const proximo = ()=>{
    navigation.navigate("PerguntasScreen")
  }
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
      
      <TouchableOpacity onPress={() => proximo()}>
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});