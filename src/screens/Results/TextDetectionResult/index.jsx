import { Image } from "react-native";
import Header from "../../../components/Shared/Header/Header";
import { TextContainer, TextContainerButton, TextContainerFilled, TextPhrasesContainer, TextPhrasesContainerFilled, TextPhrasesContainerImage, TextPhrasesLabel, TextScreen } from "./styled";
import * as Clipboard from 'expo-clipboard';
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import CopyIcon from "../../../../assets/images/copy.png"

const TextDetectionResults = ({navigation, route:{params}}) => {

  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = async () => {
    const text = await Clipboard.setStringAsync('texto que vai vir da deteccao')
    setCopiedText(text)
  }

  return (
    <TextScreen>
      <Header navigation={navigation}/>
      <TextContainer>
        <TextContainerFilled>
         Que delícia! Comida gostosa, Ai que coisa louca, Que só de pensar, Me dá água na boca! Batata assada, Com manteiga e sal Derrete na boca - Prazer sem igual! Domingo cai bem Domingo cai bem Domingo cai bem Lá vai feijoada. Que delícia! Comida gostosa, Ai que coisa louca, Que só de pensar Me dá água na boca! Batata assada, Com manteiga e Derreta na boca - Prazer sem igual! Domingo cai bem A macarronada, No sábado - 1 hum! Lá vai feijoada.
        </TextContainerFilled>
        <TouchableOpacity onPress={copyToClipboard} style={!copiedText ? {backgroundColor: '#A17EFF', padding: 2, width:250,height: 50, justifyContent:"center", alignItems: "center", alignSelf: "center", borderRadius: 20, flexDirection: "row"} : {backgroundColor: '#6C55A8', padding: 2, width:250,height: 50, justifyContent:"center", alignItems: "center", alignSelf: "center", borderRadius: 20, flexDirection: "row"}}>
          <Image source={CopyIcon} style={{width: 22, height:22}}/>
          <TextContainerButton>
            {!copiedText ? 'Copiar Texto' : 'Copiado'}
          </TextContainerButton>
        </TouchableOpacity>
      </TextContainer>
      <TextPhrasesLabel>Trechos</TextPhrasesLabel>
      <TextPhrasesContainer>
        <TextPhrasesContainerImage source={CopyIcon}/> 
        <TextPhrasesContainerFilled>Delícia!</TextPhrasesContainerFilled>
      </TextPhrasesContainer>      
    </TextScreen>
  )
}

export default TextDetectionResults;