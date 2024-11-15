import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>Chung</Text>
      <Text>Hello World</Text>
      <Text>Chung</Text>
      <Text>Auth</Text>
      <Text>Gia Khanh</Text>
      <Text>Quoc Chung</Text>
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
