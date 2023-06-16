import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ResultScreen({ navigation, route }) {
  const proximo = () => {
    navigation.navigate("MainScreen")
  }

  const { acertos, erros, totalPerguntas } = route.params;
  let res;

  if (acertos >= 5) {
    res = "Aprovado"
  } else {
    res = "Reprovado"
  }

  return (
    <View style={styles.container}>
      <Text>Resultado</Text>
      <Text>Total: {totalPerguntas}</Text>
      <Text>Acertos: {acertos}</Text>
      <Text>Erros: {erros}</Text>
      <Text>{res}</Text>

      <TouchableOpacity onPress={() => proximo()}>
        <Text>Reiniciar</Text>
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