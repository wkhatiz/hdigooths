import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import List from './pages/List';
import Directions from './pages/Directions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="Directions" component={Directions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}