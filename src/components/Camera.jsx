import React, { useState, useEffect } from 'react'
import { Modal, Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'expo-camera'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CameraModal({ modalVisible, setVisible }) {

  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(CameraType.back)

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

        <Camera style={styles.camera} type={type} useCamera2Api={true} zoom={0.2}>
        
          <View>
            <TouchableOpacity style={styles.button} onPress={() => setVisible(false)}>
              <Icon name='close' size={30} color='#fff' />
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
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  button: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})