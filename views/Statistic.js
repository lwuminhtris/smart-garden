import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  Alert,
  Button, StyleSheet,
  Text, View, SafeAreaView,
  Image, ImageBackground,
  TextInput, Switch, ScrollView, Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { useState } from 'react';
import { render } from 'react-dom';
import { useEffect } from 'react';
import io from 'socket.io-client'
import { LineChart } from 'react-native-chart-kit'


function SensorInformation(props) {
  // const [isOnline, setOnline] = useState(true)


  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0])
  const [time, setTime] = useState([0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    async function getAllExceptTempHumid() {
      let fetchId = ""

      if (props.feedId == '9') {
        fetchId = "bk-iot-soil"
      }

      if (props.feedId == '13') {
        fetchId = "bk-iot-light"
      }

      if (props.feedId == '7.0' || props.feedId == '7.1') {
        fetchId = "bk-iot-temp-humid"
      }

      let data = await fetch(`https://iotdudes-smart-garden.herokuapp.com/api/account/${fetchId}/seven_data`)
      let dataJSON = await data.json()

      let created_at = []
      let value = []

      if (props.feedId != '7.0' && props.feedId != '7.1') {

        for (let i = 0; i < 7; i++) {
          if (dataJSON.data[i] != null) {
            created_at.push(dataJSON.data[i].created_at.slice(11, 16))
            value.push(parseInt(dataJSON.data[i].value))
          } else {
            created_at.push(0)
            value.push(0)
          }
        }

      } else if (props.feedId == '7.0') {

        for (let i = 0; i < 7; i++) {
          if (dataJSON.data[i] != null) {
            created_at.push(dataJSON.data[i].created_at.slice(11, 16))
            value.push(parseInt(dataJSON.data[i].value.temp))
          } else {
            created_at.push(0)
            value.push(0)
          }
        }

      } else {

        for (let i = 0; i < 7; i++) {
          if (dataJSON.data[i] != null) {
            created_at.push(dataJSON.data[i].created_at.slice(11, 16))
            value.push(parseInt(dataJSON.data[i].value.humid))
          } else {
            created_at.push(0)
            value.push(0)
          }
        }

      }


      setData(value)
      setTime(created_at)

    }
    getAllExceptTempHumid()
  }, [])

  return (
    <View
    // style={styles.sensorBox}
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
      </View>
      <LineChart
        data={{
          // labels: ["January", "February", "March", "April", "May", "June"],
          labels: time,
          datasets: [
            {
              // data: [
              //   Math.random() * 100,
              //   Math.random() * 100,
              //   Math.random() * 100,
              //   Math.random() * 100,
              //   Math.random() * 100,
              //   Math.random() * 100
              // ]
              data: data
            }
          ]
        }}
        width={Dimensions.get("window").width * 0.9} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
};


export default class Statistic extends Component {

  constructor(props) {
    super(props)
    this.state = false
  };

  render() {
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
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
              }}
            >
              THỐNG KÊ DỮ LIỆU
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              // backgroundColor: 'red',
              width: '90%',
              height: '100%'
            }}
          >
            <SensorInformation
              feedName="CẢM BIẾN ĐỘ ẨM ĐẤT"
              feedId="9"
            />
            <SensorInformation
              feedName="CẢM BIẾN ÁNH SÁNG"
              feedId="13"
            />
            <SensorInformation
              feedName="CẢM BIẾN NHIỆT ĐỘ - ĐỘ ẨM (NHIỆT ĐỘ)"
              feedId="7.0"
            />
            <SensorInformation
              feedName="CẢM BIẾN NHIỆT ĐỘ - ĐỘ ẨM (ĐỘ ẨM)"
              feedId="7.1"
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
    height: 300,
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