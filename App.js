import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './views/SignIn'
import Welcome from './views/Welcome'
import Home from './views/Home'
import Control from './views/Control'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>{ 
      <Stack.Navigator>
        <Stack.Screen name = "Welcome" component = {Welcome} options = {{headerShown: false}}/>
        <Stack.Screen name = "SignIn" component = {SignIn} options = {{headerShown: false}}/>
        <Stack.Screen name = "Home" component = {Home} options = {{headerShown: false}}/>
        <Stack.Screen name = "Control" component = {Control} options = {{headerShown: false}}/>
      </Stack.Navigator>
    }</NavigationContainer>
  );
}
