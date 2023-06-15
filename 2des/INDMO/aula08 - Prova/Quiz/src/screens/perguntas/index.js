import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import perguntas from '../../../mocks/perguntas';

export default function PerguntasScreen({ navigation }) {

  const [perguntaAtual, setPerguntaAtual] = useState(0);

  const [acertos, setAcertos] = useState(0);

  const proximo = (indice) => {

    if(perguntas[perguntaAtual].respostas[indice].status  == true){
      setAcertos(acertos+ 1);
    }
  
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      navigation.navigate("ResultScreen", { acertos });
    }
  };

  useEffect(() => {
    setPerguntaAtual(0); // Definir o valor inicial como 0, que é o índice da primeira pergunta
  }, []);

  return (
    <View style={styles.container}>
      {perguntas.length > 0 ? (
        <>
          <Text>{perguntas[perguntaAtual].pergunta}</Text>
          
          {perguntas[perguntaAtual].respostas.map((resposta, index) => (
            <TouchableOpacity key={index} onPress={() => proximo(index)}>
              <Text>{resposta.resp}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <Text>Nenhuma pergunta encontrada.</Text>
      )}
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