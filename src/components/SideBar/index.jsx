import { Text, TouchableOpacity, Switch, View, Image } from "react-native";
import {
  X,
  MoonStars,
  UsersThree,
  Gear,
  Lightbulb,
  CaretRight,
} from "phosphor-react-native";
import CelebrityDetectionIcon from "../../../assets/images/celebritydetection.png"
import TextDetectionIcon from "../../../assets/images/textdetection.png"
import FaceDetectionIcon from "../../../assets/images/facedetection.png"
import ObjDetectionIcon from "../../../assets/images/objrecognition.png"
import {
  SideBarHeader,
  SideBarThemeSwitcher,
  SideBarView,
  SideBarThemeText,
  SideBarTopic,
  SideBarContainer,
  SideBarButton,
  SideBarButtonContent,
  SideBarButtonContentFunctionText,
  SideBarButtonContentDescriptionText,
} from "./styles";
import { useContext, useState } from "react";

import { ThemeContext } from "styled-components/native";

export default function SideBar({ setVisible, visible }) {
  const theme = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);

  function CaretRightIcon() {
    return (
      <CaretRight
        size={15}
        color={theme.colors.subtext.main}
        style={{ position: "absolute", right: 50 }}
      />
    );
  }

  function AboutButtons() {
    return (
      <>
        <TouchableOpacity>
          <SideBarButton>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: theme.colors.primary.main,
                height: 50,
                width: 50,
              }}
            >
              <UsersThree
                size={36}
                color="white"
                style={{ alignSelf: "center", top: 5 }}
              />
            </View>
            <SideBarButtonContent>
              <SideBarButtonContentFunctionText>
                Sobre nós
              </SideBarButtonContentFunctionText>
              <SideBarButtonContentDescriptionText>
                Saiba quem somos nós
              </SideBarButtonContentDescriptionText>
            </SideBarButtonContent>
            <CaretRightIcon />
          </SideBarButton>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 30 }}>
          <SideBarButton>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: theme.colors.primary.main,
                height: 50,
                width: 50,
              }}
            >
              <Gear
                size={36}
                color="white"
                style={{ alignSelf: "center", top: 5 }}
              />
            </View>
            <SideBarButtonContent>
              <SideBarButtonContentFunctionText>
                Como funciona?
              </SideBarButtonContentFunctionText>
              <SideBarButtonContentDescriptionText>
                Entenda como o projeto funciona
              </SideBarButtonContentDescriptionText>
            </SideBarButtonContent>
            <CaretRightIcon />
          </SideBarButton>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 30 }}>
          <SideBarButton>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: theme.colors.primary.main,
                height: 50,
                width: 50,
              }}
            >
              <Lightbulb
                size={36}
                color="white"
                style={{ alignSelf: "center", top: 5 }}
              />
            </View>
            <SideBarButtonContent>
              <SideBarButtonContentFunctionText>
                Sobre o projeto
              </SideBarButtonContentFunctionText>
              <SideBarButtonContentDescriptionText>
                Objetivos e tecnologias usadas
              </SideBarButtonContentDescriptionText>
            </SideBarButtonContent>
            <CaretRightIcon />
          </SideBarButton>
        </TouchableOpacity>
      </>
    );
  }

  function ResourcesButtons() {
    return (
      <>
        <TouchableOpacity>
          <SideBarButton>
            <View
              style={{
                borderRadius: 20,
                backgroundColor:  'rgba(248, 6, 204, 0.15)',
                height: 50,
                width: 50,
              }}
            >
              <Image source={ObjDetectionIcon} style={{ alignSelf: "center", top: 8, left: 0.4, width: 32, height:32 }} />
            </View>
            <SideBarButtonContent>
              <SideBarButtonContentFunctionText>
                Objetos
              </SideBarButtonContentFunctionText>
              <SideBarButtonContentDescriptionText>
                Reconheça objetos em sua imagem
              </SideBarButtonContentDescriptionText>
            </SideBarButtonContent>
            <CaretRightIcon />
          </SideBarButton>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 30 }}>
          <SideBarButton>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: 'rgba(59, 80, 255, 0.15)',
                height: 50,
                width: 50,
              }}
            >
              <Image source={TextDetectionIcon} style={{ alignSelf: "center", top: 8, left: 0.4, width: 32, height:32 }}/>
            </View>
            <SideBarButtonContent>
              <SideBarButtonContentFunctionText>
                Texto
              </SideBarButtonContentFunctionText>
              <SideBarButtonContentDescriptionText>
                Detecte os textos presntes na imagem
              </SideBarButtonContentDescriptionText>
            </SideBarButtonContent>
            <CaretRightIcon />
          </SideBarButton>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 30 }}>
          <SideBarButton>
            <View
              style={{
                borderRadius: 20,
                backgroundColor:  'rgba(29, 181, 24, 0.15)',
                height: 50,
                width: 50,
              }}
            >
              <Image source={FaceDetectionIcon}  style={{ alignSelf: "center", top: 8, left: 0.4, width: 32, height:32 }}/>
            </View>
            <SideBarButtonContent>
              <SideBarButtonContentFunctionText>
                Rostos
              </SideBarButtonContentFunctionText>
              <SideBarButtonContentDescriptionText>
                Reeconheça características do rosto
              </SideBarButtonContentDescriptionText>
            </SideBarButtonContent>
            <CaretRightIcon />
          </SideBarButton>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 30 }}>
          <SideBarButton>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: 'rgba(109, 37, 204, 0.15)',
                height: 50,
                width: 50,
              }}
            >
              <Image source={CelebrityDetectionIcon} style={{ alignSelf: "center", top: 8, left: 0.4, width: 32, height:32 }}/>
            </View>
            <SideBarButtonContent>
              <SideBarButtonContentFunctionText>
                Celebridades
              </SideBarButtonContentFunctionText>
              <SideBarButtonContentDescriptionText>
                Identifique a celebridade de sua foto
              </SideBarButtonContentDescriptionText>
            </SideBarButtonContent>
            <CaretRightIcon />
          </SideBarButton>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <SideBarView>
      <SideBarHeader>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <X size={40} />
        </TouchableOpacity>
      </SideBarHeader>
      <SideBarThemeSwitcher>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: theme.colors.secondary.main,
              height: 50,
              width: 50,
            }}
          >
            <MoonStars
              size={36}
              color="white"
              style={{ alignSelf: "center", top: 5 }}
            />
          </View>
          <SideBarThemeText>Tema escuro</SideBarThemeText>
        </View>
        <Switch
          trackColor={{ false: "#EBE6FF", true: "#EBE6FF" }}
          thumbColor={isEnabled ? "#A17EFF" : "#AC66E8"}
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
          style={{ right: 50 }}
        />
      </SideBarThemeSwitcher>
      <View>
        <SideBarContainer>
          <SideBarTopic>Saiba Mais</SideBarTopic>
          <AboutButtons />
        </SideBarContainer>
      </View>
      <View style={{ marginVertical: 30 }}>
        <SideBarContainer>
          <SideBarTopic>Recursos</SideBarTopic>
          <ResourcesButtons />
        </SideBarContainer>
      </View>
    </SideBarView>
  );
}
