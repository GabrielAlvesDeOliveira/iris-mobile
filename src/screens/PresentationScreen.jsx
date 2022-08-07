import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={
        require('./assets/images/iris.png')
      }
      style={styles.logo} />
      <StatusBar style="auto" />
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
  logo: {
    width: 100,
    height: 200
  }
});