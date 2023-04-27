import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [diagnostico, setDiagnostico] = useState(0);

  const calcular = () => {
    let imc = Number((peso/(altura*altura))*10000).toFixed(2)
    setResultado(imc)
    setPeso(0);
    setAltura(0);

    if(imc <= 16.9){
      setDiagnostico('Muito abaixo do peso');
    }else if(imc <= 18.4){
      setDiagnostico('Abaixo do peso');
    }else if(imc <= 24.9){
      setDiagnostico('Peso Normal');
    }else if(imc <= 29.9){
      setDiagnostico('Acima do peso')
    }else if(imc <= 34.9){
      setDiagnostico('Obesidade Grau I');
    }else if(imc <= 40){
      setDiagnostico('Obesidade Grau II')
    }else{
      setDiagnostico('Obesidade Grau III')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <View>
        <Text style={styles.textos}>Peso:</Text>
        <TextInput style={styles.inputs}  value={peso} onChangeText={ (val) => setPeso(Number(val)) }></TextInput>
      </View>

      <View>
        <Text style={styles.textos}>Altura:</Text>
        <TextInput style={styles.inputs} value={altura} onChangeText={ (val) => setAltura(Number(val)) }></TextInput>
      </View>
      
      <TouchableOpacity style={styles.button}  onPress={() => calcular()}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.titulo2}>IMC: {resultado}</Text>
      <Text style={styles.titulo2}>Diagnostico: {diagnostico}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c999dc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px'
  },
  titulo: {
    fontSize: '30px',
    color: '#fff',
    fontWeight: 'bold',
  },
  titulo2: {
    fontSize: '25px',
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
    color: '#c999dc',
    fontSize: '16px',
  },
  button: {
    width: '150px',
    height: '50px',
    backgroundColor: '#e9f87c',
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#c999dc',
    fontWeight: 'bold',
    fontSize: '1.25rem'
  },
});
