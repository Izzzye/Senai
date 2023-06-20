import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function ResultScreen({ navigation, route }) {
  const proximo = () => {
    navigation.navigate("MainScreen")
  }

  const { acertos, erros, totalPerguntas } = route.params;
  let res;
  let statusColor;

  const image = { uri: 'https://img.freepik.com/vetores-gratis/padrao-de-espaco-sem-costura-de-cor_102902-2360.jpg?w=1060&t=st=1687258134~exp=1687258734~hmac=5dcc36f0bd7dd1b040f4292f74204a91910cd5965a449c1905b5ff09e53212cd' };

  if (acertos >= 5) {
    res = "Aprovado"
    statusColor = "#4da768"

  } else {
    res = "Reprovado"
    statusColor = "#bf2604"
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image} blurRadius={2}>
        <Text style={styles.result}>RESULTADO</Text>

        <View style={styles.textos}>
          <Text style={styles.acertos}>Total: {totalPerguntas}</Text>
          <Text style={styles.acertos}>Acertos: {acertos}</Text>
          <Text style={styles.acertos}>Erros: {erros}</Text>
        </View>

        <Text style={[styles.res, { color: statusColor }]}>{res}</Text>

        <TouchableOpacity onPress={() => proximo()} style={styles.button}>
          <Text style={styles.textButton}>Reiniciar</Text>
        </TouchableOpacity>
      </ImageBackground>
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
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    color: '#fff',
    fontSize: 60,
    paddingBottom: 20
  },
  acertos: {
    color: "#fff",
    fontSize: 30
  },
  textos: {
    width: 300,
    height: 120,
    backgroundColor: "#318CE7",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  res: {
    fontSize: 35,
    paddingTop: 20,
    paddingBottom: 20
  },
  button: {
    width: 250,
    height: 45,
    backgroundColor: "#318CE7",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
   
  },
  textButton: {
    color: "#ffff",
    fontWeight: 700,
    fontSize: 31
  }
});