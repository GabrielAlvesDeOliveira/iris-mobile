import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import FunctionBox from '../../Shared/FunctionBox/FunctionBox'
import CameraModal from '../../../functions/Camera'
import Header from '../../Shared/Header/Header'

export default function Home({ navigation }) {
  const [isVisible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
        <Header
          isHome={true}
          navigation={navigation}
        />
      <View style={styles.functions}>
        <Text style={styles.hello}> Bem-vindo a Iris! </Text>
        <View style={styles.functionBoxes}>
          <Text style={styles.functionText}>
            O seu app de reconhecimento de imagens já está ativo. O que deseja fazer hoje?
          </Text>
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoriesText}> Recursos </Text>
        <View style={styles.categoriesContainer}>
          <FunctionBox
            color={'#F806CC'}
            navigation={navigation}
            image={require('../../../../assets/images/objrecognition.png')}
            label='Reconhecimento de objetos'
            setVisible={setVisible}
          />
          <FunctionBox
            color={'#3B50FF'}
            navigation={navigation}
            image={require('../../../../assets/images/textdetection.png')}
            label='Detecção de texto'
            setVisible={setVisible}
          />
          <FunctionBox
            color={'#1DB518'}
            navigation={navigation}
            image={require('../../../../assets/images/facedetection.png')}
            label='Detecção de análise de rosto'
            setVisible={setVisible}
          />
          <FunctionBox
            color={'#6D25CC'}
            navigation={navigation}
            image={require('../../../../assets/images/celebritydetection.png')}
            label='Reconhecimento de celebridades'
            setVisible={setVisible}
          />

        </View>
      </View>

      <CameraModal modalVisible={isVisible} setVisible={setVisible} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    padding: 20
  },
  functions: {
    paddingVertical: 20,
    flex: 3,
  },
  categories: {
    flex: 8,
  },
  hello: {
    fontSize: 30,
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },
  functionBoxes: {
    margin: 30,
    flexDirection: 'row',
  },
  functionText: {
    marginTop: 10,
    color: '#786980',
    fontSize: 18,
  },
  categoriesText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 20,
    marginLeft: 20
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})