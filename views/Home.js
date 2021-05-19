import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, 
          Button, StyleSheet, 
          Text, View, SafeAreaView, 
          Image, ImageBackground,
          TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'


export default function Home({ navigation }) {
  return (
    <SafeAreaView style = {styles.container}>
      <View
        style = {{
          width: '90%',
        }}
      >
        <Text
          style = {{
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          Chào Minh Trí
        </Text>
      </View>

      
      <View
        style = {styles.standardView}        
      > 
        <TouchableOpacity
          style = {{
              width: '35%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/wet.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Độ ẩm
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{
              width: '60%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/temp.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Nhiệt độ
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/water.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Mức nước
            </Text>
          </View>
        </TouchableOpacity>        
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <View
            style = {styles.boxInsideView}
          >
            <Image
              style = {styles.boxLogo}
              source = {require('../assets/light.png')}
            />
            <Text
              style = {styles.boxText}
            >
              Cường độ sáng
            </Text>
          </View>
        </TouchableOpacity>        
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <Text>
            Thống kê chi tiết
          </Text>
        </TouchableOpacity>        
      </View>

      <View
        style = {styles.standardView}
      >
        <TouchableOpacity
          style = {{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
          }}
        >
          <Text>
            Điều khiển thiết bị
          </Text>
        </TouchableOpacity>        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    backgroundColor: '#F5FDFB',
  },
  standardView : {
    width: '90%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boxInsideView: {
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
    fontSize: 20,
    fontFamily: 'sans-serif-light',
    marginTop: 5,
    marginBottom: 5,
  },
  boxControlText: {

  }
});
