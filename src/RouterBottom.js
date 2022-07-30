import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";

import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator();

export default function RouterBottom() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        switch (route.name) {
          case 'Home':
            return <Entypo name="home" size={size} color={color} />
          case 'Favoritos':
            return <Fontisto name="favorite" size={size} color={color} />
          case 'Recentes':
            return <MaterialCommunityIcons name="progress-clock" size={size} color={color} />
          default:
            return null;
        }
      },
      tabBarActiveTintColor: '#764AF1',
      tabBarInactiveTintColor: '#A17EFF',
      headerShown: false
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favoritos" component={Home} />
      <Tab.Screen name="Recentes" component={Home} />
    </Tab.Navigator>
  );
}