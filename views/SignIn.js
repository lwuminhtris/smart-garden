import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, 
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

export default class SignIn extends Component {
  state = {
    fontsLoaded: false,
  }

  async _loadFontAsync() {
    await Font.loadAsync(customFonts)
    this.setState({fontsLoaded: true})
  }

  componentDidMount() {
    this._loadFontAsync()
  }

  render() {
    const {navigation} = this.props
    return (
      <SafeAreaView style = {styles.container}>
        <ImageBackground 
          source = { 
            require('../assets/banner-1.png')
          }
          style = {{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style = {{
              width: '80%',
              height: 40,
            }}
          >
            <Text
              style = {{
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white',
              }}
            >
              Chào mừng bạn
            </Text>
          </View>
          <View
            style = {{
              width: '80%',
              height: 40,
              marginBottom: -10,
            }}
          >
            <Text
              style = {{
                color: 'white',
                // fontFamily: 'OpenSans-SemiBold',
              }}
            >
              TÊN ĐĂNG NHẬP
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
                borderColor: 'white',
                padding: 10,
                backgroundColor: 'white',
              }}

            />
          </View>
          <View
            style = {{
              width: '80%',
              height: 40,
              marginTop: 10,
              marginBottom: -10,
            }}
          >
            <Text
              style = {{
                color: 'white',
                // fontFamily: 'OpenSans-SemiBold',
              }}
            >
              MẬT KHẨU
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
                borderColor: 'white',
                padding: 10,
                backgroundColor: 'white',
              }}
            />
          </View>
          <View
            style = {{
              width: '80%',
              alignContent: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
          > 
          <TouchableOpacity
              style = {{
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

              onPress = { () => navigation.navigate('Home')}
            >
              <Text
                style = {{
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
  standardView : {

  }
});
