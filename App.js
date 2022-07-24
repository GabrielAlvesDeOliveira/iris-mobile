import React from 'react';
import theme from './src/theme';
import 'react-native-gesture-handler';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import Start from './src/screens/Start';
import store from './src/store/reducers';
import LabelsPage from './src/screens/Labels';
import { ThemeProvider } from 'styled-components';
import { StatusBar, useColorScheme, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Sora_400Regular, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';
import Teste from './src/screens/Teste';

export default function App() {
  const Stack = createNativeStackNavigator();
  const deviceTheme = useColorScheme();
  const currentTheme = theme[deviceTheme] || theme.light;

  let [fontsLoaded, error] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold
  })

  if(!fontsLoaded) {
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
            <Stack.Screen name='Teste' component={Teste} />
            {/* <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Start" component={Start} />
              <Stack.Screen name="Labels" component={LabelsPage} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}