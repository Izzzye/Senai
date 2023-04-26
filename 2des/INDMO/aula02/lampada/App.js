import { useState } from 'react';
import { StyleSheet, View, Switch, Image } from 'react-native';

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado)
  };

  return (
    <View style={styles.container}>
      <Switch
        value={habilitado}
        onValueChange={habilitar}
      />

      <Image
        source={{
          uri: (habilitado) 
          ? "https://cdn-icons-png.flaticon.com/512/3625/3625060.png" 
          : "https://cdn-icons-png.flaticon.com/512/3471/3471635.png"
        }}
        style={styles.lampada}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  lampada: {
    width: '125px',
    height: '125px'
  }
});
