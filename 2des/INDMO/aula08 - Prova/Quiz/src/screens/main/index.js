import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

export default function MainScreen({ navigation }) {
  const proximo = () => {
    navigation.navigate('PerguntasScreen');
  };

  const image = { uri: 'https://img.freepik.com/vetores-premium/cena-do-espaco-sideral-com-ilustracao-de-muitos-planetas_43633-7720.jpg' };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>

        <Text style={styles.titulo} >Quiz</Text>

        <TouchableOpacity onPress={proximo} style={styles.button}>
          <Text style={styles.textButton}>Proximo</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}
