import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './style';

export default function PerguntasScreen() {
  return (
    <View style={styles.container}>
      <Text>Quiz - To be</Text>
      <StatusBar style="auto" />
    </View>
  );
}