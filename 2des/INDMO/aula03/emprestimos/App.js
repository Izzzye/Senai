import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [valor, setVal] = useState(0);
  const [juros, setJuros] = useState(0);
  const [parcelas, setParcelas] = useState(0);
  const [montante, setMontante] = useState(0);
  const [valParcelas, setValParcelas] = useState(0);

  const calcular = () => {
    setMontante(valor * (1 + juros/100) ** parcelas);
    setValParcelas((valor * (1 + juros / 100) ** parcelas) / parcelas)
    setVal(0);
    setJuros(0);
    setParcelas(0);

   
  }

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Viabilidade Econômica</Text>

    <View style={styles.caixa}>
      <Text style={styles.textos}>Valor Necessário:</Text>
      <TextInput style={styles.inputs}  value={valor} onChangeText={ (val) => setVal(Number(val)) }></TextInput>
    </View>

    <View style={styles.caixa}>
      <Text style={styles.textos}>Taxa de Juros:</Text>
      <TextInput style={styles.inputs} value={juros} onChangeText={ (val) => setJuros(Number(val)) }></TextInput>
    </View>

    <View style={styles.caixa}>
      <Text style={styles.textos}>N. de Parcelas</Text>
      <TextInput style={styles.inputs} value={parcelas} onChangeText={ (val) => setParcelas(Number(val)) }></TextInput>
    </View>
    
    <TouchableOpacity style={styles.button}  onPress={() => calcular()}>
      <Text style={styles.textButton}>Calcular</Text>
    </TouchableOpacity>

    <Text style={styles.titulo}>Montante: {montante.toFixed(2)}</Text>
    <Text style={styles.titulo}>Valor Parcelas: {valParcelas.toFixed(2)}</Text>

    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#318ce7',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px'
  },
  titulo: {
    fontSize: '30px',
    color: '#fff',
    fontWeight: 'bold',
  },
  textos: {
    fontSize: '18px',
    color: '#fff',
  },
  caixa: {
    width: '75%'
  },
  inputs: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    width: '100%',
    padding: '10px',
    color: '#318ce7',
    fontSize: '16px',
  },
  button: {
    width: '150px',
    height: '50px',
    backgroundColor: '#f18c27',
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.25rem'
  },
});
