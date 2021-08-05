import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './views/SignIn'
import Welcome from './views/Welcome'
import Home from './views/Home'
import Control from './views/Control'
import SignUp from './views/SignUp'
import Statistic from './views/Statistic'
import UserLog from './views/UserLog';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Control" component={Control} options={{ headerShown: false }} />
        <Stack.Screen name="Statistic" component={Statistic} options={{ headerShown: false }} />
        <Stack.Screen name="UserLog" component={UserLog} options={{ headerShown: false }} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}
