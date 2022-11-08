import { Text, TouchableOpacity, Switch, View } from "react-native";
import {
  X,
  MoonStars,
  UsersThree,
  Gear,
  Lightbulb,
} from "phosphor-react-native";
import { SideBarHeader, SideBarThemeSwitcher, SideBarView, SideBarThemeText } from "./styles";
import { useContext, useState } from "react";

import { ThemeContext } from "styled-components/native";

export default function SideBar({ setVisible, visible }) {

  const theme = useContext(ThemeContext);
  const [ isEnabled, setIsEnabled ] = useState(false)

  return (
    <SideBarView>
      <SideBarHeader>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <X size={40} />
        </TouchableOpacity>
      </SideBarHeader>
      <SideBarThemeSwitcher>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{borderRadius: 20, backgroundColor: theme.colors.secondary.main, height:50, width: 50}}>
            <MoonStars size={36} color="white" style={{alignSelf: 'center', top: 5}}/>   
          </View>
          <SideBarThemeText>Tema escuro</SideBarThemeText>
        </View>
        <Switch trackColor={{false: '#EBE6FF', true: '#EBE6FF'}} thumbColor={isEnabled ? '#A17EFF' : '#AC66E8'} value={isEnabled}  onValueChange={()=>setIsEnabled(!isEnabled)} style={{right: 50}} />
      </SideBarThemeSwitcher>
    </SideBarView>
  );
}
