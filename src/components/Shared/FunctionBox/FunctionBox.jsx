import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import hexRGB from "hex-rgb";
export default function FunctionBox({ navigation, image, label, color }) {

  function transformer(color){
    const rgb = hexRGB(`${color}`);
    const r = rgb.red;
    const g = rgb.green;
    const b = rgb.blue;
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Recognition')}>
      <View style={{backgroundColor: transformer(color), borderRadius: 10, padding: 7}}>
        <Image source={image} style={styles.image} />
      </View>
      <View>
        <Text style={[styles.textOject, {color: color}]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 170,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFAFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
    opacity: 1
  },
  textOject: {
    textAlign: 'center',
    fontWeight: 'bold', 
    fontSize: 15, 
    marginTop: 25
  }
})