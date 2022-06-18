import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Start from './src/screens/Start';
import Home from './src/screens/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}