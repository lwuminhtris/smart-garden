import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, 
          Button, StyleSheet, 
          Text, View, SafeAreaView, 
          Image, ImageBackground,
          TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
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
          <Text>
            Độ ẩm
          </Text>
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
          <Text>
            Nhiệt độ
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
            Mức nước
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
            Cường độ sáng
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
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  }
});
