import React from 'react';
import theme from './src/theme';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Teste from './src/screens/Teste';
import store from './src/store/reducers';
import { ThemeProvider } from 'styled-components';
import LabelsResults from './src/screens/LabelsResults';
import { StatusBar, useColorScheme, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Sora_400Regular, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';

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
    <ThemeProvider theme={currentTheme}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar hidden />
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='LabelsResults' component={LabelsResults} />
            <Stack.Screen name='Teste' component={Teste} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}