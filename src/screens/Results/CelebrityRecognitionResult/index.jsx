import { Text, View, Dimensions, Image } from "react-native";
import { useState } from "react";
import * as WebBrowser from "expo-web-browser";

import Header from "../../../components/Shared/Header/Header";
import LoadingScreen from "../../../components/Layout/Loading";

import api_client from "../../../config/api_client";
import formatPercentage from "../../../utils/formatPercentage";

import Angry from "../../../../assets/images/emotions/angry.png";
import Surprised from "../../../../assets/images/emotions/surprised.png";
import Sad from "../../../../assets/images/emotions/sad.png";
import Calm from "../../../../assets/images/emotions/calm.png";
import Disgusted from "../../../../assets/images/emotions/disgusted.png";
import Happy from "../../../../assets/images/emotions/happy.png";
import Confused from "../../../../assets/images/emotions/confused.png";
import Fear from "../../../../assets/images/emotions/fear.png";

import {
  CelebrityConfidenceLabel,
  CelebrityImage,
  CelebrityNameLabel,
  CelebrityScreen,
  CelebrityEmotionsLabel,
  CelebrityEmotions,
  CelebrityEmotionImage,
  CelebrityEmotionsDetailedLabel,
} from "./styled";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";

const CelebrityRecognitionResult = ({ navigation, route: { params } }) => {
  const windowWidth = Dimensions.get("window").width;
  const { image, imageName } = params;
  const [results, setResults] = useState(null);

  useEffect(() => {
    api_client
      .post("/detect-celebrity", {
        imageName,
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [imageName]);

  function EmotionPicker(emotion) {
    switch (emotion.Type) {
      case "CALM":
        return (
          <View>
            <CelebrityEmotionImage source={Calm} />
            <CelebrityEmotionsDetailedLabel>
              Calmo
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      case "HAPPY":
        return (
          <View>
            <CelebrityEmotionImage source={Happy} />
            <CelebrityEmotionsDetailedLabel>
              Feliz
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      case "CONFUSED":
        return (
          <View>
            <CelebrityEmotionImage source={Confused} />
            <CelebrityEmotionsDetailedLabel>
              Confuso
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      case "SAD":
        return (
          <View>
            <CelebrityEmotionImage source={Sad} />
            <CelebrityEmotionsDetailedLabel>
              Triste
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      case "DISGUSTED":
        return (
          <View>
            <CelebrityEmotionImage source={Disgusted} />
            <CelebrityEmotionsDetailedLabel>
              Nojo
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      case "SURPRISED":
        return (
          <View>
            <CelebrityEmotionImage source={Surprised} />
            <CelebrityEmotionsDetailedLabel>
              Surpresa
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      case "ANGRY":
        return (
          <View>
            <CelebrityEmotionImage source={Angry} />
            <CelebrityEmotionsDetailedLabel>
              Raiva
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      case "FEAR":
        return (
          <View>
            <CelebrityEmotionImage source={Fear} />
            <CelebrityEmotionsDetailedLabel>
              Medo
            </CelebrityEmotionsDetailedLabel>
          </View>
        );
      default:
        break;
    }
  }

  return (
    <CelebrityScreen>
      {results ? (
        <>
          <Header navigation={navigation} />
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(`https://${results.text[0].Urls[1]}`)
            }
          >
            <CelebrityImage source={{ uri: image }} size={windowWidth} />
          </TouchableOpacity>
          <CelebrityNameLabel>{results.text[0].Name}</CelebrityNameLabel>
          <CelebrityConfidenceLabel>
            Confiança: {formatPercentage(results.text[0].Face.Confidence)}
          </CelebrityConfidenceLabel>
          <CelebrityEmotionsLabel>Emoções Principais</CelebrityEmotionsLabel>
          <CelebrityEmotions>
            {results.emocao.map(
              (emotion, i) => i <= 2 && EmotionPicker(emotion)
            )}
          </CelebrityEmotions>
        </>
      ) : (
        <LoadingScreen />
      )}
    </CelebrityScreen>
  );
};

export default CelebrityRecognitionResult;
