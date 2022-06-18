import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Start from './src/screens/Start';
import Home from './src/screens/Home';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{
          headerShown: null
        }}/>
        <Stack.Screen name="Home" component={Home} options={{
          // header: null
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}