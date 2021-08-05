import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  Alert,
  Button, StyleSheet,
  Text, View, SafeAreaView,
  Image, ImageBackground,
  TextInput, Switch, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { useState } from 'react';
import { render } from 'react-dom';
import { useEffect } from 'react';
import io from 'socket.io-client'


function SuccessConnectedSensorStatusText() {
  return (
    <Text
      style={styles.sensorInformationStateText}
    >
      • ĐÃ KẾT NỐI
    </Text>
  )
}

function FailedConnectedSensorStatusText() {
  return (
    <Text
      style={styles.sensorInformationStateTextError}
    >
      KẾT NỐI: CHƯA KẾT NỐI/ LỖI KẾT NỐI
    </Text>
  )
}


function ErrorSensorStatusText() {
  return (
    <Text
      style={styles.sensorInformationStateTextError}
    >
      TÌNH TRẠNG: KHÔNG HOẠT ĐỘNG
    </Text>
  )
}

function ActiveSensorStatusText() {
  return (
    <Text
      style={styles.sensorInformationStateText}
    >
      • ĐANG HOẠT ĐỘNG
    </Text>
  )
}


async function turnSensorOn(feedId) {
  let feedName = ""

  if (feedId == "1") {
    feedName = "bk-iot-led"
  } else {
    feedName = "bk-iot-relay"
  }

  let line = await fetch(`https://iotdudes-smart-garden.herokuapp.com/api/account/${feedName}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      value: 1
    })
  })
  let lineJSON = await line.json()
  console.log(lineJSON)
}

async function turnSensorOff(feedId) {
  let feedName = ""

  if (feedId == "1") {
    feedName = "bk-iot-led"
  } else {
    feedName = "bk-iot-relay"
  }

  let line = await fetch(`https://iotdudes-smart-garden.herokuapp.com/api/account/${feedName}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      value: 0
    })
  })
  let lineJSON = await line.json()
  console.log(lineJSON)
}

async function mqttSubcribe(feedId) {

  let feedName = ""

  if (feedId == "9") {
    feedName = "bk-iot-soil"
  } else if (feedId == "13") {
    feedName = "bk-iot-light"
  } else {
    feedName = "bk-iot-temp-humid"
  }

  let line = await fetch(`https://iotdudes-smart-garden.herokuapp.com/api/account/subscribe/${feedName}`)
  let lineJSON = await line.json()
  console.log(lineJSON)
}

async function mqttUnsubcribe(feedId) {

  let feedName = ""

  if (feedId == "9") {
    feedName = "bk-iot-soil"
  } else if (feedId == "13") {
    feedName = "bk-iot-light"
  } else {
    feedName = "bk-iot-temp-humid"
  }

  let line = await fetch(`https://iotdudes-smart-garden.herokuapp.com/api/account/unsubscribe/${feedName}`)
  let lineJSON = await line.json()
  console.log(lineJSON)
}

function PubableSensor(props) {
  // const [isOnline, setOnline] = useState(true)
  const [btnBorderColor, setColor] = useState('#d15147')
  const [textConnected, setText] = useState('Tắt')
  const isActive = props.feedStatus
  const isConnected = props.feedConnect

  return (
    <View
      style={styles.sensorBox}
    >
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'space-around',
          margin: 10,
        }}
      >

        <Text
          style={styles.sensorInformationNameText}
        >
          {props.feedName} #{props.feedId}
        </Text>

        {isActive ? <ActiveSensorStatusText /> : <ErrorSensorStatusText />}
        {isConnected ? <SuccessConnectedSensorStatusText /> : <FailedConnectedSensorStatusText />}

        <View
          style={{
            alignItems: 'center',
          }}

        >


        </View>

        <View
          style={{
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 50,
              marginTop: 5,
              borderColor: btnBorderColor,
              borderWidth: 1,
              borderRadius: 5,
            }}

            onPress={
              () => {
                btnBorderColor == '#d15147' ? setColor('#06492C') : setColor('#d15147')
                textConnected == 'Tắt' ? turnSensorOff(props.feedId) : turnSensorOn(props.feedId)
                textConnected == 'Tắt' ? setText('Bật') : setText('Tắt')
              }
            }
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: btnBorderColor
              }}

            >
              {textConnected}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

function SensorInformation(props) {
  // const [isOnline, setOnline] = useState(true)
  const [btnBorderColor, setColor] = useState('#d15147')
  const [textConnected, setText] = useState('Ngắt kết nối')
  const isActive = props.feedStatus
  const isConnected = props.feedConnect

  return (
    <View
      style={styles.sensorBox}
    >
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'space-around',
          margin: 10,
        }}
      >

        <Text
          style={styles.sensorInformationNameText}
        >
          {props.feedName} #{props.feedId}
        </Text>

        {isActive ? <ActiveSensorStatusText /> : <ErrorSensorStatusText />}
        {isConnected ? <SuccessConnectedSensorStatusText /> : <FailedConnectedSensorStatusText />}

        <View
          style={{
            alignItems: 'center',
          }}

        >


        </View>

        <View
          style={{
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 50,
              marginTop: 5,
              borderColor: btnBorderColor,
              borderWidth: 1,
              borderRadius: 5,
            }}

            onPress={
              () => {
                btnBorderColor == '#d15147' ? setColor('#06492C') : setColor('#d15147')
                textConnected == 'Ngắt kết nối' ? mqttUnsubcribe(props.feedId) : mqttSubcribe(props.feedId)
                textConnected == 'Ngắt kết nối' ? setText('Bật kết nối') : setText('Ngắt kết nối')
              }
            }
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: btnBorderColor
              }}

            >
              {textConnected}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
};



async function changeRateAlert(feedName, feedValue) {
  let line = await fetch(`https://iotdudes-smart-garden.herokuapp.com/api/account/${feedName}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      value: feedValue,
    })
  })
  let lineJSON = await (line.json())
  console.log(`Data of ${feedName}`, lineJSON)
}

function SetRateComponent() {

  const [tempValue, setTempValue] = useState(0)
  const [humidityValue, setHumidityValue] = useState(0)
  const [lightValue, setLightValue] = useState(0)

  return (
    <View
      style={{
        width: '90%'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <TextInput
          style={{
            height: 40,
            backgroundColor: 'white',
            elevation: 1,
            borderRadius: 4,
            borderWidth: 1,
            paddingLeft: 5,
            marginBottom: 7,
            marginTop: 7,
            width: '70%'
          }}
          placeholder="Cảm biến nhiệt độ - độ ẩm (nhiệt độ)"
          onChangeText={(temp) => {
            setTempValue(temp)
          }}
        />
        <View
          style={{ height: '100%', marginTop: 9 }}
        >
          <Button
            title="Thiết lập"
            color="red"
            onPress={() => {
              Alert.alert("Thông báo", `Thiết lập thành công ${tempValue}`)
              console.log(typeof tempValue)
              changeRateAlert("temp_warning", +tempValue)

            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <TextInput
          style={{
            height: 40,
            backgroundColor: 'white',
            elevation: 1,
            borderRadius: 4,
            borderWidth: 1,
            paddingLeft: 5,
            marginBottom: 7,
            width: '70%'
          }}
          placeholder="Cảm biến nhiệt độ - độ ẩm (độ ẩm)"
          onChangeText={(humid) => {
            setHumidityValue(humid)
          }}
        />
        <View
          style={{ height: '100%' }}
        >
          <Button
            title="Thiết lập"
            color="red"
            onPress={() => {
              Alert.alert("Thông báo", "Thiết lập thành công")
              changeRateAlert("humidity_warning", +humidityValue)
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <TextInput
          style={{
            height: 40,
            backgroundColor: 'white',
            elevation: 1,
            borderRadius: 4,
            borderWidth: 1,
            paddingLeft: 5,
            marginBottom: 7,
            width: '70%'
          }}
          placeholder="Cảm biến ánh sáng"
          onChangeText={(light) => {
            setLightValue(light)
          }}
        />
        <View
          style={{ height: '100%' }}
        >
          <Button
            title="Thiết lập"
            color="red"
            onPress={() => {
              Alert.alert("Thông báo", "Thiết lập thành công")
              changeRateAlert("light_warning", +lightValue)
            }}
          />
        </View>
      </View>
    </View>
  )
}


export default class Control extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showRate: false,
    }
  };

  componentDidMount() {
    this.socket = io("https://iotdudes-smart-garden.herokuapp.com/")
    this.socket.on("bk-iot-relay", (data) => {
      console.log("Socket data", data)
    })
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <SafeAreaView
          style={styles.container}
        >

          <View
            style={{
              flex: 1,
              marginTop: 60,
              // backgroundColor: 'yellow',
              width: '90%',
              height: '100%'
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
              }}
            >
              TRUNG TÂM ĐIỀU KHIỂN THIẾT BỊ
            </Text>
            <View
              style={{
                width: '100%',
                height: 200,
                // backgroundColor: 'blue',
                // marginTop: 10,
                // marginBottom: 8,
                borderRadius: 4,
              }}
            >
              <Image
                source={
                  require('../assets/garden-0.png')
                }

                style={{
                  // maxWidth: 229,
                  // maxHeight: 214,
                  marginLeft: -128,
                  width: '164%',
                  height: '100%',
                  resizeMode: 'cover',
                }}

              />
            </View>

            <TouchableOpacity
              style={{
                flex: 0,
                backgroundColor: '#0EAD69',
                marginRight: '-70%',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30%',
                height: 40,
                elevation: 10,
                borderRadius: 4,
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  color: 'white'
                }}
                onPress={() => this.setState({ showRate: !this.state.showRate })}
              >
                Đặt giới hạn
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={{
                flex: 0,
                backgroundColor: '#0EAD69',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
                height: 40,
                elevation: 10,
                borderRadius: 4,
                marginBottom: 4,
              }}
              onPress={() => navigation.navigate('UserLog')}
            >
              <Text
                style={{
                  color: 'white'
                }}
              >
                Nhật ký sử dụng
              </Text>
            </TouchableOpacity>

          </View>

          {this.state.showRate ? <SetRateComponent /> : null}

          <View
            style={{
              flex: 3,
              // backgroundColor: 'red',
              width: '90%',
              height: '100%'
            }}
          >
            <PubableSensor
              feedName="MÁY BƠM"
              feedId="11"
              feedStatus="true"
              feedConnect="true"
            />
            <PubableSensor
              feedName="ĐÈN LED"
              feedId="1"
              feedStatus="true"
              feedConnect="true"
            />
            <SensorInformation
              feedName="CẢM BIẾN ĐỘ ẨM ĐẤT"
              feedId="9"
              feedStatus="true"
              feedConnect="true"
            />
            <SensorInformation
              feedName="CẢM BIẾN ÁNH SÁNG"
              feedId="13"
              feedStatus="true"
              feedConnect="true"
            />
            <SensorInformation
              feedName="CẢM BIẾN NHIỆT ĐỘ - ĐỘ ẨM"
              feedId="7"
              feedStatus="true"
              feedConnect="true"
            />

          </View>

        </SafeAreaView>
      </ScrollView>
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
    width: '100%',
    height: 140,
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
  sensorInformationNameText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#06492C'
  },
  sensorInformationStateText: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 14,
    // color: '#06492C'
    color: 'blue'
  },
  sensorInformationStateTextError: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 14,
    color: 'red'
  },
})