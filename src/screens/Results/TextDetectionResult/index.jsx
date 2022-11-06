import { useState, useEffect } from "react";
import { Image, Dimensions, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import Header from "../../../components/Shared/Header/Header";
import { TextContainer, TextContainerButton, TextContainerFilled, TextPhrasesContainer, TextPhrasesLabel, TextScreen, TextImage } from "./styled";
import * as Clipboard from 'expo-clipboard';
import LoadingScreen from "../../../components/Layout/Loading";
import Toast from 'react-native-root-toast';  

import CopyIcon from "../../../../assets/images/copy.png"
import api_client from "../../../config/api_client";

import Card from './Card'

const TextDetectionResults = ({ navigation, route: { params } }) => {

  const windowWidth = Dimensions.get("window").width;
  const [copiedText, setCopiedText] = useState(false);
  const { image, imageName } = params;
  const [results, setResults] = useState(null);
  const [text, setText] = useState(null)

  useEffect(() => {
    api_client.post('/detect-text', { imageName }).then(res => {

      if (res.data.text.length === 0) {
        Alert.alert('Não foi possível detectar texto na imagem', 'Escolha uma imagem com texto')
        navigation.goBack()
      }
      
      let arrayText = []
      for (let obj in res.data.text) {
        arrayText.push(res.data.text[obj].DetectedText)
      } 

      setText(arrayText.join(' '))
      setResults(res.data)
    }).catch(err => console.error(err))
  }, [])

  const copyToClipboard = () => {
    Clipboard.setStringAsync(text).then(res => {
      Toast.show('Mensagem Copiada!', { duration: Toast.durations.SHORT, backgroundColor: 'gray' })
      setCopiedText(true)
      setTimeout(() => {setCopiedText(false)}, 3000)
    })
  }

  return (
    <TextScreen>

      {results ? (
        <>
          <Header navigation={navigation} />
          <ScrollView style={{flex: 1}}>
          <TextImage source={{ uri: image }} size={windowWidth}/>
          <TextContainer>
            <TextContainerFilled>{text}</TextContainerFilled>
            <TouchableOpacity onPress={copyToClipboard} style={!copiedText ? { backgroundColor: '#A17EFF', padding: 2, width: 250, height: 50, justifyContent: "center", alignItems: "center", alignSelf: "center", borderRadius: 20, flexDirection: "row" } : { backgroundColor: '#6C55A8', padding: 2, width: 250, height: 50, justifyContent: "center", alignItems: "center", alignSelf: "center", borderRadius: 20, flexDirection: "row" }}>
              <Image source={CopyIcon} style={{ width: 22, height: 22 }} />
              <TextContainerButton>
                {!copiedText ? 'Copiar Texto' : 'Copiado'}
              </TextContainerButton>
            </TouchableOpacity>
          </TextContainer>
          <TextPhrasesLabel>Trechos</TextPhrasesLabel>
          <TextPhrasesContainer>

          {results.text.map(item => <Card image={image} item={item}/>)}

          </TextPhrasesContainer>
          </ScrollView>
        </>
      ) : (<LoadingScreen />)
      }
    </TextScreen>
  )
}

export default TextDetectionResults;