import { useState } from "react";
import { Camera } from "phosphor-react-native";
import api_client from "../../config/api_client";
import * as ImagePicker from 'expo-image-picker';
import getImageInfo from "../../utils/getImageInfos";
import Header from "../../components/Shared/Header/Header";
import CTAButton from "../../components/Buttons/CTAButton";
import IconButton from "../../components/Buttons/IconButton";
import { ContentContainer, Description } from "../Home/styled";
import presentationsContent from "../../utils/presentationsContent";
import { ButtonGroup, GroupContentButton, IconWrapper, Label, PresentationContent, ScreenContainer, TitleHeading } from "./styled";

const Presentation = ({
  route,
  navigation,
}) => {
  const { name } = route.params;
  const { title, description, screenName } = presentationsContent[name];

  const [image, setImage] = useState(null);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }

    const { originalname, type } = getImageInfo(result.uri);

    const formData = new FormData();

    formData.append('file', {
      name: originalname,
      type,
      uri: result.uri
    });

    api_client.post('/save-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(({ data }) => {
      if (data.success) {
        navigation.navigate(screenName, {
          image: result.uri,
          imageName: data.image.name
        })
      }
    }).catch(err => {
      console.error(err)
    })
  }

  return (
    <ScreenContainer>
      <Header
        navigation={navigation}
        previousScreen={'Options'}
      />
      <ContentContainer>
        <PresentationContent>
          <IconWrapper
            name={name}
          >

          </IconWrapper>
          <TitleHeading>{title}</TitleHeading>
          <Description>{description}</Description>
        </PresentationContent>

        <ButtonGroup>
          <IconButton
            iconName={'Image'}
            onPress={PickImage}
            backgroundColor='primary'
            style='margin-right: 10px;'
          />

          <CTAButton
            color={'secondary'}
            style={'flex-grow: 1; max-width: 100%;'}
            onPress={() => {
              navigation.navigate("Camera", {
                screenName
              })
            }}
          >
            <GroupContentButton>
              <Camera
                color="#FFFFFF"
                size={32}
                weight={'bold'}
              />
              <Label>Abrir câmera</Label>
            </GroupContentButton>
          </CTAButton>
        </ButtonGroup>
      </ContentContainer>
    </ScreenContainer>
  );
}

export default Presentation;