import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

import IconFE from 'react-native-vector-icons/Feather'

export default function FunctionBox({ navigation, image, label, color }) {

  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Labels', { })
      }
    >
      <View style={[styles.container, { backgroundColor: color }]}>
        <Image source={image} style={styles.img} />
        <View style={styles.footer}>
          <Text style={styles.label}>
            {label}
          </Text>
          <TouchableOpacity style={styles.icon} onPress={() => setVisible(true)}>
            <IconFE name="camera" color={'white'} size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 170,
    borderRadius: 20,
    justifyContent: 'flex-end',
    padding: 10,
    margin: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
    margin: 1,
  },
  icon: {
    backgroundColor: '#000',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    padding: 10,
    width: 120,
    height: 120,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    
  }
})