import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as IconPhosphor from "phosphor-react-native";

import Header from '../components/Header';

import Icon from '../../assets/images/Icon.png';
import Galeria from '../../assets/images/galeria.png';

import api_client from '../config/api_client';
import getImageInfo from '../utils/getImageInfos';

export default function App({ navigation }) {
  const [image, setImage] = useState(null);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }

    const { originalname, type } = getImageInfo(result.uri);

    const formData = new FormData();

    formData.append('file', {
      name: originalname,
      type,
      uri: result.uri
    });

    console.warn(formData)

    api_client.post('/save-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(({ data }) => {
      if (data.success) {
        navigation.navigate('LabelsResults', {
          image: result.uri,
          imageName: data.image.name
        })
      }
    }).catch(err => {
      console.error(err)
    })
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} isHome={false} />
      <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
        <Image source={Icon} style={styles.logo} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text style={styles.titulo}>Reconhecimento de Objetos e Ações</Text>
        <Text style={styles.textoCorpo}>Identifique objetos com a nossa tecnologia de reconhecimento de objetos e ações. Selecione uma imagem ou tire uma foto, e retornaremos rótulos relacionados a sua imagem. </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, alignItems: 'flex-end', marginBottom: 25 }}>
        <TouchableOpacity onPress={PickImage} style={styles.galeriaButton} >
          <Image source={Galeria} style={styles.imagemGaleria} />
          {image && <Image source={{ uri: image }} style={{
            width: 200,
            height: 200
          }} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Camera") }} style={styles.cameraButton}>
          <IconPhosphor.Camera size={40} color="#fff" />
          <Text style={styles.textoButtonCamera}>Abrir câmera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    color: '#080218',
    width: 364,
    height: 70,
    lineHeight: 35,
    marginLeft: '6%',
    marginBottom: 15
  },
  textoCorpo: {
    width: 364,
    fontStyle: 'normal',
    marginLeft: 24,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#A3A3B3'
  },
  galeriaButton: {
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
    width: 64,
    height: 64,
    backgroundColor: '#764AF1',
    opacity: 0.7,
    borderRadius: 24,
  },
  imagemGaleria: {
    width: 40,
    height: 40,
  },
  cameraButton: {
    width: 290,
    height: 64,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#764af1',
    borderRadius: 24,
  },
  imagemCamera: {
    width: 45,
    height: 45,
  },
  textoButtonCamera: {
    width: 134,
    height: 25,
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 25,
    marginLeft: 15,
    color: '#FFF',
  },
  navigation: {
    position: 'absolute',
    width: 60,
    height: 60,
    background: '#FFF',
    borderRadius: 16,
    alignItems: 'flex-start',
    padding: 20,
    marginLeft: 340,
  }
})