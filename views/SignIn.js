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

global.account_name = [];

async function login(usr, pwd) {
  let loginResponse = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/', {
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
  let _loginResponse = await loginResponse.json()
  return _loginResponse.status
}

export default class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  state = {
    fontsLoaded: false,
  }

  async _loadFontAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  async componentDidMount() {
    console.log(await login('test', 'test'))
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
              Chào mừng bạn
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
                console.log(this.state.username, this.state.password)
                let status = await login(this.state.username, this.state.password)
                console.log(status)
                if (status == 'true') {
                  global.account_name[0] = this.state.username
                  navigation.navigate('Home')
                } else {
                  Alert.alert("Lỗi", "Sai tên đăng nhập hoặc mật khẩu")
                }
                // navigation.navigate('Home')
              }
              }
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#0EAD69',
                }}
              >
                Đăng Nhập
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
