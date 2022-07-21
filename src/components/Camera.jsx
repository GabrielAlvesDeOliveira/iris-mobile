import React, { useState, useEffect } from 'react'
import { Modal, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { Camera, CameraType } from 'expo-camera'

import Icon from 'react-native-vector-icons/AntDesign'

export default function CameraModal({ navigation, modalVisible, setVisible }) {

  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(CameraType.front)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text>Sem permissão para usar a câmera</Text>
  }

  return (
    <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setVisible(false)}>
      <SafeAreaView style={styles.container}>


        <Camera style={styles.camera} type={type}>

          <View style={styles.buttonView}>
            <TouchableOpacity styles={styles.button} onPress={() => setVisible(false)}>
              <Icon name='caretleft' size={60} color='#fff' />
            </TouchableOpacity>
            <TouchableOpacity styles={styles.button} onPress={() => { setVisible(false); navigation.navigate('Labels') }}>
              <Icon name='caretright' size={60} color='#fff' />
            </TouchableOpacity>
          </View>
        </Camera>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').height * 3.1 / 4,
  },
  buttonView: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 50,
  },
  button: {}
})