import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, 
          Button, StyleSheet, 
          Text, View, SafeAreaView, 
          Image, ImageBackground,
          TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function Home({ navigation }) {
  return (
    <SafeAreaView style = {styles.container}>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    // backgroundColor:  '#0EAD69',
  },
  standardView : {

  }
});
