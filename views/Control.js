import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, 
          Button, StyleSheet, 
          Text, View, SafeAreaView, 
          Image, ImageBackground,
          TextInput, Switch
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { useState } from 'react';
import { render } from 'react-dom';


function getValue() {
  let Response = fetch('https://127.0.0.1:5000/api/test/data')
  console.log(Response)
}


function DeviceInformation(props) {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState)
    if(isEnabled == false) {
      // Alert.alert("ON", "ON")
      let Response = fetch('http://10.0.2.2:5000/api/test?param=ON')
      Response.catch((Reject) => { console.log(Reject)})
      // console.log(Response)
    } else {
      // Alert.alert("OFF", "OFF")
      let Response = fetch('http://10.0.2.2:5000/api/test?param=OFF')
      Response.catch((Reject) => { console.log(Reject)})
      // console.log(Response)
    }
  }
  
  return (
    <View style = {styles.sensorBoxInside}>
      <View
        style = {{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}
      >
        <Text>
          Đèn số 1
        </Text>
        <Switch
          value = {isEnabled}
          onValueChange = {toggleSwitch}
        >
          
        </Switch>
      </View>
    </View>
  )
}

/*
export default function Control({ navigation }) {

  return (
    <SafeAreaView
      style = {styles.container}
    >
      <View
        style = {{
          width: '90%',
          height: 'auto',
          alignItems: 'center',
        }}
      > 
        <Text>
          TRUNG TÂM ĐIỀU KHIỂN THIẾT BỊ
        </Text>
        <Text>
          userId: 000000
        </Text>
      </View>

      <View
        style = {styles.sensorBox}
      > 
        <DeviceInformation/>
      </View>
    </SafeAreaView>
  );
}
*/

export default class Control extends Component {
  constructor(props) {
    super(props)
    this.state = 0
  }

  render() {
    return (
      <SafeAreaView
        style = {styles.container}
      >
        <View
          style = {{
            width: '90%',
            height: 'auto',
            alignItems: 'center',
          }}
        > 
          <Text>
            TRUNG TÂM ĐIỀU KHIỂN THIẾT BỊ
          </Text>
          <Text>
            userId: 000000
          </Text>
        </View>

        <View
          style = {styles.sensorBox}
        > 
          <DeviceInformation/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#F5FDFB',
  },
  sensorBox: {
    width: '90%',
    height: 120,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
  },
  sensorBoxInside: {

  }
})