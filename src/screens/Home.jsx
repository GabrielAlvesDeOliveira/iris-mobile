import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconAD from 'react-native-vector-icons/AntDesign'

import FunctionBox from '../components/FunctionBox'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='gamepad-circle' size={50} />
      </View>
      <View style={styles.functions}>
        <Text style={styles.hello}> Olá, Usuário </Text>
        <View style={styles.functionBoxes}>
          <View style={styles.functionComponent}>
            <View style={styles.functionBox}>
              <IconFA name='bars' size={30} />
            </View>
            <Text style={styles.functionText}>Todos</Text>
          </View>
          <View style={styles.functionComponent}>
            <View style={styles.functionBox}>
              <IconAD name='clockcircleo' size={30} />
            </View>
            <Text style={styles.functionText}>Todos</Text>
          </View>
          <View style={styles.functionComponent}>
            <View style={styles.functionBox}>
              <IconAD name='hearto' size={30} />
            </View>
            <Text style={styles.functionText}>Favoritos</Text>
          </View>
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoriesText}> Categorias </Text>
        <View style={styles.categoriesContainer}>

          <FunctionBox
            color={'#7099CD'}
            image={require('../../assets/images/maça.png')}
            label={'Reconhecer Objetos'}
          />

          <FunctionBox
            color={'#FFD87F'}
            image={require('../../assets/images/livro.png')}
            label={'Detectar texto em imagens'}
          />

          <FunctionBox
            color={'#DA668E'}
            image={require('../../assets/images/fone.png')}
            label={'Reconhecer Famosos'}
          />

          <FunctionBox
            color={'#B9B6E5'}
            image={require('../../assets/images/maos.png')}
            label={'Personalizar Rótulos'}
          />

        </View>
      </View>
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
    flex: 6,
    alignItems: 'center',
  },
  categories: {
    flex: 7,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  functionComponent: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  functionBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    backgroundColor: '#eae9f7',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  categoriesText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})