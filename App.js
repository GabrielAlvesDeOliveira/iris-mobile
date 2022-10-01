import React from 'react';
import theme from './src/theme';
import 'react-native-gesture-handler';
import Camera from './src/functions/Camera';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './src/config/ThemeContext';
import NavBar from './src/components/Shared/NavBar/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme, View, Text } from 'react-native';
import StartScreen from './src/components/Screens/Start/StartScreen';
import LabelsResults from './src/components/Screens/Results/Results';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecognitionScreen from './src/components/Screens/Home/RecognitionScreen';
import { useFonts, Sora_400Regular, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';
import Presentation from './src/screens/Presentation';

export default function App() {
  const deviceTheme = useColorScheme();
  const Stack = createNativeStackNavigator();
  const currentTheme = theme[deviceTheme] || theme.light;

  let [fontsLoaded, error] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold
  })

  if (!fontsLoaded) {
    return <View>
      <Text>Não funcionou</Text>
    </View>
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      <ThemeProvider theme={currentTheme}>
        <NavigationContainer>
          <StatusBar hidden />
          <Stack.Navigator screenOptions={{
            headerShown: false
          }} initialRouteName='Start'>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Options" component={NavBar} />
            <Stack.Screen name="Recognition" component={RecognitionScreen} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name='presentation' component={Presentation} />
            <Stack.Screen name='LabelsResults' component={LabelsResults} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}