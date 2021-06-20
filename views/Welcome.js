import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Video } from 'expo-av'

export default function Welcome({ navigation }) {
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
        <Image

          source={
            require('../assets/welcome-logo.png')
          }

          style={{
            maxWidth: 229,
            maxHeight: 214,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />

        {/* <View
          style={{
            alignContent: 'center',
            marginTop: 100,
            marginLeft: -30,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontFamily: 'Roboto',
              textAlign: 'left',
              color: "#FFFEFE",
              fontWeight: "700",
            }}
          >
            Đây là SmartGarden
          </Text>
        </View>

        <View
          style={{
            marginBottom: 10,
            marginLeft: -68,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'sans-serif-light',
              textAlign: 'left',
              color: "#FFFEFE",
            }}
          >
            Thông minh hơn, tiện dụng hơn
          </Text>
        </View> */}

        <StatusBar style="auto" />

        <TouchableOpacity
          style={{
            // backgroundColor: 'white',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: 314,
            height: 58,
            maxWidth: 314,
            maxHeight: 58,
            borderRadius: 4,

            borderColor: 'white',
            borderWidth: 2,
            backgroundColor: 'transparent',
          }}

          onPress={() => navigation.navigate('SignUp')}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Đăng Ký
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 10,
            // backgroundColor: 'transparent',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: 314,
            height: 58,
            // borderColor: 'white',
            // borderWidth: 2,
            borderRadius: 4,
            backgroundColor: 'white',
            marginBottom: -50,
          }}

          onPress={() => navigation.navigate('SignIn')}
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

        <Text
          style={{
            position: 'absolute',
            bottom: 23,
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          © IOTDUDES 2021
        </Text>
      </ImageBackground>
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
