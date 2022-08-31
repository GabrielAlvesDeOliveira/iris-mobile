import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import bigLogo from '../../../../assets/images/biglogo.png'

export default function App({ navigation }) {
    return (
      <View style={styles.container}>
        <Image source={bigLogo} style={styles.logo} />
        <Text style={styles.text}> Vamos {"\n"} começar </Text>
        <Text style={styles.text2}>Reconhecimento dentro de um olhar. </Text>
  
        <TouchableOpacity style={{ 
          width: 340,
          height: 50,
          borderRadius: 15, 
          top: 30,
          backgroundColor: "#a066ff",
          justifyContent: 'center',
          alignItems: 'center',
          color: "#FFF"
          }} onPress={() => navigation.navigate('Options')}>
          <Text style={styles.buttonText}> Iniciar </Text>
        </TouchableOpacity>
  
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
     width: 350,
    height: 350,
    top: -50
  },
  text: {
    fontWeight: "bold",
    fontSize: 48,
    left: -75,
    top: -20
  },
  text2: {
    fontSize: 21.9,
    color: "#726978",
    letterSpacing: 1,
    top: -10
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
    letterSpacing: 1
  }
});