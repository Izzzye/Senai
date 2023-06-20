import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import perguntas from '../../../mocks/perguntas';

export default function PerguntasScreen({ navigation }) {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  const image = { uri: 'https://img.freepik.com/vetores-gratis/padrao-de-espaco-sem-costura-de-cor_102902-2360.jpg?w=1060&t=st=1687258134~exp=1687258734~hmac=5dcc36f0bd7dd1b040f4292f74204a91910cd5965a449c1905b5ff09e53212cd' };


  const proximo = (indice) => {

    if (perguntas[perguntaAtual].respostas[indice].status == true) {
      setAcertos(acertos + 1);
    } else {
      setErros(erros + 1);
    }

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      navigation.navigate("ResultScreen", { acertos: acertos + 1, erros: erros, totalPerguntas: perguntas.length });
    }
  };

  useEffect(() => {
    setPerguntaAtual(0);
    setAcertos(0);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image} blurRadius={2}>
        {perguntas.length > 0 ? (
          <>
            <View style={styles.pergunta}>
              <Text style={styles.perguntaText}>{perguntas[perguntaAtual].pergunta}</Text>
            </View>


            {perguntas[perguntaAtual].respostas.map((resposta, index) => (
              <TouchableOpacity key={index} onPress={() => proximo(index)} style={styles.resps}>
                <Text style={styles.respText}>{resposta.resp}</Text>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <Text>Nenhuma pergunta encontrada.</Text>
        )}
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13293d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pergunta: {
    width: 300,
    height: 85,
    backgroundColor: "#318CE7",
    borderRadius: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  perguntaText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'center',
  },
  resps: {
    width: 300,
    height: 40,
    backgroundColor: "#318CE7",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12
  },
  respText: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});