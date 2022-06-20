import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Start from './src/screens/Start';
import Home from './src/screens/Home';
import LabelsPage from './src/screens/Labels';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Labels" component={LabelsPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}