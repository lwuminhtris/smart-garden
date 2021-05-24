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
import io from 'socket.io-client'
import { useEffect } from 'react';


async function getValue(setIsEnabled) {
      // let Response = await fetch('http://127.0.0.1:5000/api/test/data')
      let Response = await fetch('http://10.0.2.2:5000/api/test/data')
      let responseJson = await Response.json()
      console.log(responseJson.value)

      if(responseJson.value == "ON") {
        // Alert.alert("ON", "ON")
        setIsEnabled(true)
        return true
      } else {
        // Alert.alert("FALSE", "FALSE")
        setIsEnabled(false)
        return false
      }
};


function DeviceInformation(props) {
  // hook 
  const [isEnabled, setIsEnabled] = useState()

  useEffect(() => {
    // Alert.alert("BOO", "BOO")
    setInterval(() => {
      getValue(setIsEnabled)
    }, 1000)
  }, [])
  
  const toggleSwitch = async () => {
    // setIsEnabled(previousState => !previousState)

    if(isEnabled == false) {
      // Alert.alert("ON", "ON")
      setIsEnabled(true)
      let Response = fetch('http://10.0.2.2:5000/api/test?param=ON')
      Response.catch((Reject) => { console.log(Reject)})
      // console.log(Response)
    } else {
      // Alert.alert("OFF", "OFF")
      setIsEnabled(false)
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
        <Text
          style = {styles.sensorBoxText}
        >
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


export default class Control extends Component {
  
  constructor(props) {
    super(props)
    // this.state = getValue()
  };

  /*
  componentDidMount() {
    this.tracking = setInterval(
      () => this.ifDataChange(), 
      100
    )
  }

  componentWillUnmount() {
    clearInterval(this.tracking, 1000)
  }

  ifDataChange () {
    this.setState(getValue())
  }
  */

  render() {
    const { navigation } = this.props
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
  sensorBoxText: {
    textAlign: 'center',
    fontWeight: 'bold',
    // fontFamily: 'BeVietnam-Bold',
    fontSize: 18,
    color: '#06492C',
  },
})