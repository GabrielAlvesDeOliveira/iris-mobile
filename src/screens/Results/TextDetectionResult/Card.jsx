import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import CopyIcon from "../../../../assets/images/copy.png";
import formatPercentage from '../../../utils/formatPercentage';

import { CardText, TextCard, PorcentageText, TextView, MainImage, IconImage, BottomBarText } from './styled';
import Toast from 'react-native-root-toast';  

const Card = ({ item, image }) => {

  const copyToClipboard = () => { Clipboard.setStringAsync(item.DetectedText).then(res => Toast.show('Mensagem Copiada!', { duration: Toast.durations.SHORT, backgroundColor: 'gray'}))}

  return (
    <CardText>
      <BottomBarText>
        <TextView>
          <TextCard>{item.DetectedText}</TextCard>
          <PorcentageText>{formatPercentage(item.Confidence)}</PorcentageText>
        </TextView>
        <TouchableOpacity style={{ backgroundColor: '#A17EFF', justifyContent: 'center', alignItems: 'center', width: 58, height: 58, borderRadius: 16 }} onPress={copyToClipboard}>
          <IconImage source={CopyIcon} style={{ width: 22, height: 22 }} />
        </TouchableOpacity>
      </BottomBarText>
    </CardText>
  )
};

export default Card;