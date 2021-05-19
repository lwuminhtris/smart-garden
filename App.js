import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './views/SignIn'
import Welcome from './views/Welcome'
import Home from './views/Home'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>{ 
      <Stack.Navigator>
        <Stack.Screen name = "Welcome" component = {Welcome}/>
        <Stack.Screen name = "SignIn" component = {SignIn}/>
        <Stack.Screen name = "Home" component = {Home}/>
      </Stack.Navigator>
    }</NavigationContainer>
  );
}
