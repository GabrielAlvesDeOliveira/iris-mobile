//import Header from '../tcc/src/components/header';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState(null);

  useEffect( async () =>  {
    if(Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status !== 'granted'){
        alert('Permisson denied!')
      }
    }

  }, []) 

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect: [4,3],
      quality: 1
    })
    console.log(result)
    if(!result.cancelled){
      setImage(result.uri)
    }
  }

  return (
    <View style={styles.container}>
      {/*<StatusBar backgroundColor='#FFF' translucent={false} />*/}
    
    <Image source={require("../../assets/images/navegacao.png")} style={styles.navigation}/>

    <Image source={require("../../assets/images/Icon.png")}
      style={styles.logo} />
      <Text style={styles.titulo}>Reconhecimento de Objetos e Ações</Text>
      <Text style={styles.textocorpo}>Identifique objetos com a nossa tecnologia de reconhecimento de objetos e ações. Selecione uma imagem ou tire uma foto, e retornaremos rótulos relacionados a sua imagem. </Text>

      <TouchableOpacity onPress={PickImage} style={styles.galeriabutton} >
          <Image source={require("../../assets/images/galeria.png")} style={styles.imagemgaleria}/>  
          {image  && <Image source={{uri:image}} style={{
              width: 200,
              height: 200
          }} />} 
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => { navigation.navigate("Camera");}} style={styles.camerabutton}>
        <Text style={styles.textobuttoncamera}>Abrir câmera</Text>
        <Image source={require("../../assets/images/camera.png")} style={styles.imagemcamera} />
      </TouchableOpacity>
           
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  logo:{
    marginVertical: '45%',
    marginLeft: '22.5%',
    justifyContentent: 'center',
    alignItems:'center',

  },
  titulo:{
   //fontFamily: 'Sora',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    color: '#080218',
    position:'absolute',
    width: 364,
    height: 70,
    lineHeight: 35,
    marginVertical: '105%',
    marginLeft: '6%',
  },
  textocorpo: {
    position: 'absolute',
    width: 364,
    height: 100,
    left: 0, 
    top: '84%',
    //fontFamily: 'Sora',
    fontStyle: 'normal',
    marginLeft: 24,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#A3A3B3',
  },

  /* Botão da galeria*/
  galeriabutton:{
    justifyContent: 'center',
    padding: 8,
    marginLeft: 24,
    alignItems: 'center',
    width: 64,
    height: 64,
    backgroundColor:'#764AF1',
    opacity: 0.7,
    borderRadius: 24,
    alignSelf: 'stretch',
    top: '29%'
},
  imagemgaleria:{
    width: 40,
    height: 40,    

},

/* Botão da câmera */
  
camerabutton:{
  justifyContent: 'right',
  alignItems: 'center',
  passing:10,
  gap: 10,

  width: 290,
  height: 64,

  backgroundColor: '#764af1',
  borderRadius: 24,
  order: 1,
  top: '20%',
  marginLeft:'25%',
},
imagemcamera:{
  marginRight:'55%',
  top: '18%',
  width: 45,
  height: 45,
  justifyContent: 'left',

},
textobuttoncamera:{
  width: 134,
  height: 25,
  position: 'absolute',
  top: '35%',
  //fontFamily:'Sora',
  fontWeight: 'Semibold',
  fontStyle: 'normal',
  fontSize: 20,
  lineHeight: 25,
  textAlign: 'right',
  color: '#FFF',
  

},
  navigation:{
    position:'absolute',
    width: 60,
    height: 60,
    background: '#FFF',
    borderRadius: 16,
    alignItems: 'flex-start',
    padding: 20,
    top: 50,
    marginLeft: 340,
  },
});

/*<Image source={require("./src/assets/navigacao.png")} style={styles.navigationbutton}/>*/ 