import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

export default function MainScreen({ navigation }) {
  const proximo = () => {
    navigation.navigate('PerguntasScreen');
  };

  const image = { uri: 'https://img.freepik.com/vetores-gratis/padrao-de-espaco-sem-costura-de-cor_102902-2360.jpg?w=1060&t=st=1687258134~exp=1687258734~hmac=5dcc36f0bd7dd1b040f4292f74204a91910cd5965a449c1905b5ff09e53212cd' };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>

        <Text style={styles.titulo} >Space Quiz</Text>

        <TouchableOpacity onPress={proximo} style={styles.button}>
          <Text style={styles.textButton}>Próximo</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}
