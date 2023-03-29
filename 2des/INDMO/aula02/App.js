import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

export default function App() {
  const [distancia, setDistancia] = new useState(0);
  const [volt, setVolt] = new useState(0);
  const [resI, setResI] = new useState(0);
  const [resII, setResII] = new useState(0);
  
  const calcular = () => {
    let bitola220 = (1.73 * distancia * volt) / 510.4;
    setResI(bitola220);
    
    let bitola110 = (2 * distancia * volt) / 294.64;
    setResII(bitola110);

    setVolt(0);
    setDistancia(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra sua Bitola!!</Text>
      <View>
        <Text style={styles.subTitle}>Digite a distância em metros:</Text>
        <TextInput style={styles.input} value={distancia} onChangeText={ (val) => setDistancia(Number(val)) }/>
      </View>
      <View>
        <Text style={styles.subTitle}>Digite a corrente em amperes:</Text>
        <TextInput style={styles.input} value={volt} onChangeText={ (val) => setVolt(Number(val)) }/>
      </View>
      <TouchableOpacity style={styles.button} onPress={ () => calcular() }>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Espessura para 220V: {resI.toFixed(2) + ' mm'} </Text>
      <Text style={styles.subTitle}>Espessura para 110V: {resII.toFixed(2) + ' mm'} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc90db',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  subTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: '#333',
    backgroundColor: '#e5e5e5',
    padding: '5px'
  },
  button: {
    width: '220px',
    height: '30px',
    backgroundColor: '#4169e1',
    borderRadius: '7px',
    alignItems: 'center'
  },
  textButton: {
    color: '#eeee',
    fontWeight:'bold',
    fontSize: '1.2rem'
  }
});
