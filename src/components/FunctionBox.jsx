import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import IconFE from 'react-native-vector-icons/Feather'

export default function FunctionBox({ image, label, color }) {

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Image source={image} style={styles.img} />
      <View style={styles.footer}>
        <Text style={styles.label}>
          {label}
        </Text>
        <View style={styles.icon}>
          <IconFE name="camera" color={'white'} size={15} />
        </View>
      </View>
    </View>
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