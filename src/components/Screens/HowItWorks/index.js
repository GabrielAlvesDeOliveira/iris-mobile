import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HowItsWorks() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false} />
      <ScrollView>
        <Text style={styles.titulo}>Como funciona?</Text>

          <Text style={styles.paragrafo}> FOTO CÂMERA </Text>

              <Text style={styles.textocorpo}>      No aplicativo, disponibilizamos quatro recursos, que são: 
                <Text style={styles.textonegrito}> Reconhecimento de objetos, Detecção de Texto, Detecção e análise de rostos, Reconhecimento e identificação de celebridades.</Text> 
                  Para utilizar cada um desses recursos, é preciso selecioná-los na tela inicial ou na barra lateral. Ao selecionar o recurso desejado, será direcionado para uma tela de apresentação onde haverá uma breve descrição do respectivo recurso. Na parte inferior da tela, haverá os seguintes elementos:
              </Text>
              <Text style={styles.paragrafo}> FOTO PRINT 1 </Text>

              <Text style={styles.textocorpo}>    O primeiro botão irá abrir a sua galeria, permitindo que você selecione uma imagem já existente em sua galeria. Enquanto o outro botão, como está descrito em seu rótulo, irá abrir a câmera, para que tire a foto do que deseja. Ao tirar a foto ou selecionar a imagem desejada, a imagem será enviada para nosso servidor que, por sua vez, irá se conectar com a AWS salvando a imagem em seu banco de dados e posteriormente nos retornando uma resposta, que é personalizada de acordo com o recurso selecionado.
              </Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  titulo: {
    color: '#080218',
    backgroundColor: '#FFFFFF',
    fontSize: 28,
    lineHeight: 35,
    marginTop: '40%',
    marginLeft: '5%',
    
  },
  camera: {

  },
  textocorpo: {
    color: '#88889D',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  textonegrito: {
    color: '#A17EFF',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  paragrafo: {
    margin: '25%',
  }
});