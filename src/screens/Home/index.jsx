import { useState } from "react";
import CameraModal from "../../functions/Camera";
import Header from "../../components/Shared/Header/Header";
import ResourceButton from "../../components/Buttons/ResourceButtons";
import FaceDetection from '../../components/Images/resources/FaceDetection';
import TextDetection from '../../components/Images/resources/TextDetection';
import { SectionName } from "../../components/Buttons/ResourceButtons/styled";
import ObjectRecognition from '../../components/Images/resources/ObjectRecognition';
import CelebrityRecognition from '../../components/Images/resources/CelebrityRecognition';
import { ContentContainer, Description, Greetings, GreetingsWrapper, ResourcesWrapper, ScreenContainer } from "./styled";

const Home = ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);

  const resources = [
    {
      id: 0,
      name: 'object',
      label: 'Reconhecimento de objetos',
      image: ObjectRecognition,
    },
    {
      id: 1,
      name: 'text',
      label: 'Detecção de texto',
      image: TextDetection,
    },
    {
      id: 2,
      name: 'face',
      label: 'Detecção e análise de rosto',
      image: FaceDetection,
    },
    {
      id: 3,
      name: 'celebrity',
      label: 'Identificação de celebridades',
      image: CelebrityRecognition,
    },
  ]

  return (
    <ScreenContainer>
      <Header
        isHome={true}
        navigation={navigation}
      />
      <ContentContainer>
        <GreetingsWrapper>
          <Greetings>Bem-vindo a Iris!</Greetings>
          <Description>O seu app de reconhecimento de imagens já está ativo. O que deseja fazer hoje?</Description>
        </GreetingsWrapper>

        <SectionName>Recursos</SectionName>
        <ResourcesWrapper>
          {resources.map(({ id, name, label, image }) => (
            <ResourceButton
              id={id}
              key={id}
              name={name}
              label={label}
              Image={image}
              navigation={navigation}
            />
          ))}
        </ResourcesWrapper>
      </ContentContainer>

      <CameraModal modalVisible={isVisible} setVisible={setVisible} navigation={navigation} />
    </ScreenContainer>
  )
}

export default Home;