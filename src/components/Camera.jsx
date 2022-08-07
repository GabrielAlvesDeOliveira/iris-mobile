import React, { useState, useEffect, useRef } from "react";
import { Modal, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image, Button, Platform } from "react-native";

import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

import * as IconPhosphor from "phosphor-react-native";

export default function CameraModal({ navigation, modalVisible, setVisible }) {
  
  let camRef = useRef();

  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  

  const [selectedImage, setSelectedImage] = useState(null);
  const [camType, setCamType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [zoomScale, setZoomScale] = useState(0)

  useEffect(() => {

    (async () => {
      
      const camPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(camPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibPermission.status === "granted");

    })();
 
  }, []);

  if (hasCameraPermission === null) {
    
    return <View />;
    
  }

  if (hasCameraPermission === false) {
    
    return <Text>Sem permissão para usar a câmera</Text>;
    
  }

  const toggleFlash = () => {

    setFlash(
      
      flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off

    );

  };

  let takePic = async () => {

    let options = {

      quality: 1,
      base64: false,
      exif: false,

    };

    let newPhoto = await camRef.current.takePictureAsync(options);
    setPhoto(newPhoto);

  };

  if (photo) {

    let savePhoto = () => {

      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {

        setPhoto(undefined);

      });

    };

    return (

      <SafeAreaView style={styles.container}>
        <Image source={{ uri: photo.uri }} style={styles.preview}/>
          { hasMediaLibraryPermission ? ( <Button title="Salvar" onPress={savePhoto} /> ) : ( <Text> Ative a permissão de acessar a biblioteca de mídias para salvar imagens! </Text> )}
        <Button title="Apagar" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>

    );

  }

  const selectImage = async () => {

    let res = await ImagePicker.launchImageLibraryAsync({

      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,

    });

    if (!res.cancelled) {

      setSelectedImage(result.uri);

    }

  };

  const switchCameraType = () => {

    if(camType === 'back'){

      setCamType('front')

    }else{

      setCamType('back')

    }

  }

  const zoomScalePlus = () => {

    let x = 0.005

    if(!zoomScale){

      setZoomScale(0);

    }

    x = x + zoomScale

    if(!x){

      setZoomScale(0);

    }

    setZoomScale(x);

    if(zoomScale>=0.02){

      setZoomScale(0.02);

    }

  }

  const zoomScaleMinus = () => {

    let x = -0.005

    if(!zoomScale){

      setZoomScale(0);

    }

    if(zoomScale>0){

      if(!x){

        setZoomScale(0);
  
      }

      x = x + zoomScale
      setZoomScale(x);

    }else if(zoomScale<=0){

      setZoomScale(0)

    }

  }

  function CamBody(){

    return(

      <Camera style={styles.camera} type={camType} flashMode={flash} ref={camRef} zoom={zoomScale} autoFocus={Camera.Constants.AutoFocus.auto}>
        <View style={styles.headerCam}>
          <TouchableOpacity onPress={() => { navigation.navigate("Home"); }}>
            <IconPhosphor.X size={60} color="#fff" />
          </TouchableOpacity>
          <View style={styles.zoomButton}>
            <TouchableOpacity onPress={zoomScalePlus} >
              <IconPhosphor.Plus size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={zoomScaleMinus}>
              <IconPhosphor.Minus size={35} color="#fff" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={switchCameraType}>
            {camType === 'front' ? ( <IconPhosphor.ArrowsClockwise size={60} color="#fff" /> ) : ( <IconPhosphor.ArrowsCounterClockwise size={60} color={"#fff"} /> )}
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={selectImage}>
            <IconPhosphor.Image size={60} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePic}>
              <IconPhosphor.Camera size={60} color="#fff" style={{display: 'inline-block', borderRadius: '60px', boxShadow: '0 0 6px #888'}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFlash()}>
            {flash === Camera.Constants.FlashMode.on ? ( <IconPhosphor.Lightning size={60} color={"#fff"} /> ) : ( <IconPhosphor.LightningSlash size={60} color={"#fff"} /> )}
          </TouchableOpacity>
        </View>
      </Camera>

    )

  }

  return (
    
    <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setVisible(false)}>
      { Platform.OS === 'ios' ? (<View style={styles.container}><CamBody/></View>) : (<SafeAreaView style={styles.container}><CamBody/></SafeAreaView>) }
    </Modal>
    
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,

  },
  headerCam: {

    flexDirection: 'row',
    padding: 20,
    width: Dimensions.get("window").width,
    justifyContent: 'space-between'

  },
  zoomButton: {

    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
    width: 180

  },
  camera: {
    
    flex: 1,
    height: Dimensions.get("window").height,
    width: "100%"

  },
  buttonView: {

    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 50,

  },
  phosphorFlash: {

    alignItems: "center",

  },
  preview: {

    alignSelf: 'stretch',
    flex: 1

  }

});
