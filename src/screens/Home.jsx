import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconAD from 'react-native-vector-icons/AntDesign'

import FunctionBox from '../components/FunctionBox'
import CameraModal from '../components/Camera'

export default function Home({navigation}) {
  const [isVisible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Start')}>
        <Icon name='gamepad-circle' size={50} />
      </TouchableOpacity>
      <View style={styles.functions}>
        <Text style={styles.hello}> Olá, Usuário </Text>
        <View style={styles.functionBoxes}>
          <Text style={styles.functionText}>
            Duis ao dapibus magna. Aliquam tincidunt at metus ut vivera.
          </Text>
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoriesText}> Categorias </Text>
        <View style={styles.categoriesContainer}>
          <FunctionBox
            color={'#7099CD'}
            navigation={navigation}
            image={require('../../assets/images/maça.png')}
            label={'Reconhecer Objetos'}
            setVisible={setVisible}
          />

          <FunctionBox
            color={'#FFD87F'}
            navigation={navigation}
            image={require('../../assets/images/livro.png')}
            label={'Detectar texto em imagens'}
            setVisible={setVisible}
          />

          <FunctionBox
            color={'#DA668E'}
            navigation={navigation}
            image={require('../../assets/images/fone.png')}
            label={'Reconhecer Famosos'}
            setVisible={setVisible}
          />

          <FunctionBox
            color={'#B9B6E5'}
            navigation={navigation}
            image={require('../../assets/images/maos.png')}
            label={'Personalizar Rótulos'}
            setVisible={setVisible}
          />
        </View>
      </View>

      <CameraModal modalVisible={isVisible} setVisible={setVisible}/>
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
    alignItems: 'center',
  },
  categories: {
    flex: 8,
  },
  hello: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  functionBoxes: {
    margin: 30,
    flexDirection: 'row',
  },
  functionText: {
    marginTop: 10,
    fontSize: 20,
  },
  categoriesText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 20
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})