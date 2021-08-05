import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  Alert,
  Button, StyleSheet,
  Text, View, SafeAreaView,
  Image, ImageBackground,
  TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import * as Font from 'expo-font'


let customFonts = {
  'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
};


async function register(usr, pwd) {
  let registerResponse = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: usr,
      password: pwd,
    })
  })
  let _registerResponse = await registerResponse.json()
  console.log(registerResponse)
  // if (_registerResponse.status != null) {
  //   console.log(_registerResponse.status)
  //   return _registerResponse.status
  // } else {
  //   return _registerResponse.error
  // }
  return _registerResponse.status
  return _registerResponse.error
}


export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  async componentDidMount() {
    // console.log(await register('c4', 'c4'))
  }

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={
            require('../assets/video-welcome.gif')
          }
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: '80%',
              height: 40,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white',
              }}
            >
              Đăng ký mới
            </Text>
          </View>
          <View
            style={{
              width: '80%',
              height: 40,
              marginBottom: -10,
            }}
          >
            <Text
              style={{
                color: 'white',
                // fontFamily: 'OpenSans-SemiBold',
              }}
            >
              TÊN ĐĂNG NHẬP
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: '80%'
            }}
          >
            <TextInput
              style={{
                height: '100%',
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'white',
                padding: 10,
                backgroundColor: 'white',
              }}
              onChangeText={(usr) => {
                this.setState({
                  username: usr,
                  password: this.state.password
                })
              }}
            />
          </View>
          <View
            style={{
              width: '80%',
              height: 40,
              marginTop: 10,
              marginBottom: -10,
            }}
          >
            <Text
              style={{
                color: 'white',
                // fontFamily: 'OpenSans-SemiBold',
              }}
            >
              MẬT KHẨU
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: '80%'
            }}
          >
            <TextInput
              secureTextEntry={true}
              style={{
                height: '100%',
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'white',
                padding: 10,
                backgroundColor: 'white',
              }}
              onChangeText={(pwd) => {
                this.setState({
                  username: this.state.username,
                  password: pwd
                })
              }}
            />
          </View>
          <View
            style={{
              width: '80%',
              height: 40,
              marginTop: 10,
              marginBottom: -10,
            }}
          >
            <Text
              style={{
                color: 'white',
                // fontFamily: 'OpenSans-SemiBold',
              }}
            >
              NHẬP LẠI MẬT KHẨU
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: '80%'
            }}
          >
            <TextInput
              secureTextEntry={true}
              style={{
                height: '100%',
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'white',
                padding: 10,
                backgroundColor: 'white',
              }}
            />
          </View>

          <View
            style={{
              width: '80%',
              height: 40,
              marginTop: 10,
              marginBottom: -10,
            }}
          >
            <Text
              style={{
                color: 'white',
                // fontFamily: 'OpenSans-SemiBold',
              }}
            >
              EMAIL
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: '80%'
            }}
          >
            <TextInput
              style={{
                height: '100%',
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'white',
                padding: 10,
                backgroundColor: 'white',
              }}
            />
          </View>
          <View
            style={{
              width: '80%',
              alignContent: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: 'white',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 58,
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 4,

              }}

              onPress={async () => {
                let status = await register(this.state.username, this.state.password)
                console.log(status)
                if (status == 'true') {
                  Alert.alert("Đăng ký", "Đăng ký thành công")
                  navigation.navigate('SignIn')
                } else {
                  Alert.alert("Error", "This username has been used")
                }
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#0EAD69',
                }}
              >
                Đăng Ký
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  standardView: {

  }
});
