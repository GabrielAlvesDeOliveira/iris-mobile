import React, { useState, useEffect, useRef } from 'react';
import { Modal, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image, Button } from 'react-native';

import { Camera, CameraType,  } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

import IconVector from 'react-native-vector-icons/AntDesign';
import * as IconPhosphor from 'phosphor-react-native';

export default function CameraModal({ navigation, modalVisible, setVisible }) {

  let camRef = useRef();

  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  const [type, setType] = useState(CameraType.front);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {

      const camPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(camPermission.status==="granted");
      setHasMediaLibraryPermission(mediaLibPermission.status==="granted");

    })()
  }, [])

  if (hasCameraPermission === null) {
    return <View />
  }

  if (hasCameraPermission === false) {
    return <Text>Sem permissão para usar a câmera</Text>
  }

  const _toggleFlash = () => {

    setFlash( flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off);

  }

  let takePic = async () => {

    let options = {

      quality: 1,
      base64: true,
      exif: false

    }

    let newPhoto = await camRef.current.takePictureAsync(options);
    setPhoto(newPhoto);

  }

  if (photo){

    let savePhoto = () => {

      MediaLibrary.saveToLibraryAsync(photo.uri).then( () => {

        setPhoto(undefined)

      })

    }

    return (

      <SafeAreaView>
        <Image source={{uri: "data:image/jpg;base64," + photo.base64}}/>
        { hasMediaLibraryPermission ? <Button title="Salvar" onPress={savePhoto}/> : <Text>Ative a permissão para salvar imagens!</Text>}
        <Button title="Apagar" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>

    )

  }

  return (

    <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setVisible(false)}>      
      <SafeAreaView style={styles.container}>
        <Camera style={styles.camera} type={type} flashMode={flash} ref={camRef}>
          <View style={styles.buttonView}>
              <TouchableOpacity onPress={takePic}>
                  <IconPhosphor.Camera size={60} color='#fff'/>
              </TouchableOpacity>
            <TouchableOpacity onPress={() => _toggleFlash()}>
              {
                flash === Camera.Constants.FlashMode.on ? <IconPhosphor.Lightning size={60} color={"#fff"} /> : <IconPhosphor.LightningSlash size={60} color={"#fff"} />
              }
            </TouchableOpacity>
          </View>
        </Camera>
      </SafeAreaView>
    </Modal>

  )


const styles = StyleSheet.create({

  container: {

    flex: 1

  },
  camera: {

    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').height * 3.1 / 4

  },
  buttonView: {

    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 50

  },
  phosphorFlash: {

    alignItems: 'center'

  }


})