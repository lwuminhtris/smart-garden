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
// import { useFonts } from 'expo-font'
import * as Font from 'expo-font'
import { and } from 'react-native-reanimated';
// import './SignIn.js'

let customFonts = {
  'BeVietnam-Regular': require('../assets/fonts/BeVietnam-Regular.ttf'),
  'BeVietnam-Bold': require('../assets/fonts/BeVietnam-Bold.ttf')
};

async function getWarningRate() {
  let tempRate = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/temp_warning')
  let tempRateJSON = await tempRate.json()

  let humidityRate = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/humidity_warning')
  let humidityRateJSON = await humidityRate.json()

  return {
    "tempRate": tempRateJSON.rate,
    "humidityRate": humidityRateJSON.rate
  }
}


async function dataRetriever() {

  try {
    // temp - humid
    let _tempResponse = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/bk-iot-temp-humid/data', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let _tempResponseJSON = await _tempResponse.json()
    let _temp = await _tempResponseJSON.value.temp
    let _humid = await _tempResponseJSON.value.humid

    let _soilResponse = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/bk-iot-soil/data', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let _soilResponseJSON = await _soilResponse.json()
    let _soil = await _soilResponseJSON.value

    let _lightResponse = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/bk-iot-light/data', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let _lightResponseJSON = await _lightResponse.json()
    let _light = await _lightResponseJSON.value

    // console.log({
    //   "humid": _humid,
    //   "temp": _temp,
    //   "soil": _soil,
    //   "light": _light,
    // })

    return {
      "humid": _humid,
      "temp": _temp,
      "soil": _soil,
      "light": _light
    }
  }
  catch (error) {
    console.log(`ERROR: ${error}`)
  }

  // console.log(_temp, _soil, _light)
}


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      humid: "0",
      temp: "0",
      soil: "0",
      light: "0",
      tempWarningRate: "#06492C",
      humidityWarningRate: "#06492C"
    }
  }

  async componentDidMount() {
    let newState = await dataRetriever()
    try {
      this.setState({
        humid: newState.humid,
        temp: newState.temp,
        soil: newState.soil,
        light: newState.light
      })
      let warningRate = await getWarningRate()

      if (+warningRate.tempRate < this.state.temp) {
        this.setState({ tempWarningRate: '#c41831' })
        console.log("Above")
      } else {
        this.setState({ tempWarningRate: '#06492C' })
        console.log("Under")
      }

      if (+warningRate.humidityRate < this.state.humid) {
        this.setState({ humidityWarningRate: '#c41831' })
        console.log("Above")
      } else {
        this.setState({ humidityWarningRate: '#06492C' })
        console.log("Under")
      }

    } catch (error) {
      console.log('Error: ', error)
    }
    //   this.dataTrack = setInterval(async () => {
    //     let newState = await dataRetriever()
    //     try {
    //       this.setState({
    //         humid: newState.humid,
    //         temp: newState.temp,
    //         soil: newState.soil,
    //         light: newState.light
    //       })
    //     }
    //     catch (error) {
    //       console.log(error)
    //     }
    //   }, 1000)

  }

  async componentWillUnmount() {
    // clearInterval(await this.dataTrack)
  }

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            width: '90%',
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
            }}
          >
            Chào {global.account_name[0]}!
          </Text>
        </View>


        <View
          style={styles.standardView}
        >
          <TouchableOpacity
            style={{
              width: '37%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={styles.boxInsideView}
            >
              <Image
                style={styles.boxLogo}
                source={require('../assets/wet.png')}
              />
              <Text
                style={styles.boxText}
              >
                Độ ẩm
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: this.state.humidityWarningRate,
                }}
              // return wet sensor here
              >
                {this.state.humid}%
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '60%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={styles.boxInsideView}
            >
              <Image
                style={styles.boxLogo}
                source={require('../assets/temp.png')}
              />
              <Text
                style={styles.boxText}
              >
                Nhiệt độ
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: this.state.tempWarningRate,
                }}
              // return wet sensor here
              >
                {this.state.temp}°C
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={styles.standardView}
        >
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={styles.boxInsideView}
            >
              <Image
                style={styles.boxLogo}
                source={require('../assets/water.png')}
              />
              <Text
                style={styles.boxText}
              >
                Mức nước
              </Text>
              <Text
                style={styles.boxControlText}
              // return wet sensor here
              >
                {this.state.soil}%
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={styles.standardView}
        >
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={styles.boxInsideView}
            >
              <Image
                style={styles.boxLogo}
                source={require('../assets/light.png')}
              />
              <Text
                style={styles.boxText}
              >
                Cường độ sáng
              </Text>
              <Text
                style={styles.boxControlText}
              // return wet sensor here
              >
                {this.state.light} Lux
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={styles.standardView}
        >
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('Statistic')}
          >
            <View style={styles.boxFeatures}>
              <Image
                style={styles.boxFeaturesLogo}
                source={require('../assets/statistic.png')}
              />
              <Text style={styles.boxFeaturesText}>
                THỐNG KÊ CHI TIẾT
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={styles.standardView}
        >
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('Control')}
          >
            <View style={styles.boxFeatures}>
              <Image
                style={styles.boxFeaturesLogo}
                source={require('../assets/control.png')}
              />
              <Text style={styles.boxFeaturesText}>
                ĐIỀU KHIỂN THIẾT BỊ
              </Text>
            </View>
          </TouchableOpacity>
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
    flexWrap: 'nowrap',
    backgroundColor: '#F5FDFB',
  },
  standardView: {
    width: '90%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boxInsideView: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    margin: 10,
  },
  boxLogo: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
  },
  boxText: {
    fontWeight: 'normal',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    color: '#06492C',
  },
  boxControlText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#06492C',
  },
  boxFeatures: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxFeaturesText: {
    textAlign: 'center',
    fontWeight: 'bold',
    // fontFamily: 'BeVietnam-Bold',
    fontSize: 18,
    color: '#06492C',
  },
  boxFeaturesLogo: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    marginRight: 10,
  }
});
