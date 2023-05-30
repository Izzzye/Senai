import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default function Alterar({ navigation, route }) {
  const usuario = route.params.usuario;
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [nascimento, setNascimento] = useState(usuario.nascimento);

  function enviar(){
    usuario.nome = nome;
    usuario.email = email;
    usuario.nascimento = nascimento;
    navigation.navigate('Usuarios', {usuario})
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={usuario.foto}
      />
      <View style={styles.texts}>
        <Text style={styles.text}>Id: {usuario.id}</Text>

        <Text style={styles.text}>Nome: {}</Text>
        <TextInput value = {nome} onChangeText={setNome} style={styles.input}/>

        <Text style={styles.text}>Email: {}</Text>
        <TextInput value = {email} onChangeText={setEmail} style={styles.input}/>

        <Text style={styles.text}>Nascimento: {}</Text>
        <TextInput value = {nascimento} onChangeText={setNascimento} style={styles.input}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={enviar}>
        <Text style={styles.textb}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}