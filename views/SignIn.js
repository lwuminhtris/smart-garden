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

export default function SignIn() {
  return (
    <SafeAreaView style = {styles.container}>
      <View
        style = {{
          width: '80%',
          height: 40,
          marginBottom: -10,
        }}
      >
        <Text>
          TEN DANG NHAP
        </Text>
      </View>
      <View
        style = {{
          height: 40,
          width: '80%'
        }}
      >
        <TextInput
          style = {{
            height: '100%',
            borderRadius: 4,
            borderWidth: 1,
          }}
        />
      </View>
      <View
        style = {{
          width: '80%',
          height: 40,
          marginBottom: -10,
        }}
      >
        <Text>
          TEN DANG NHAP
        </Text>
      </View>
      <View
        style = {{
          height: 40,
          width: '80%'
        }}
      >
        <TextInput
          style = {{
            height: '100%',
            borderRadius: 4,
            borderWidth: 1,
          }}
        />
      </View>
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
});
