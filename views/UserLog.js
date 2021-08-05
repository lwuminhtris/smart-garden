import React, { Component } from 'react';
import {
  StyleSheet,
  Text, SafeAreaView,
  FlatList
} from 'react-native';

export default class UserLog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      log: [],
    }
  };

  componentDidMount() {
    const retrieveData = async () => {
      const data = await fetch('https://iotdudes-smart-garden.herokuapp.com/api/account/logs')
      const dataJSON = await data.json();
      const dataJSONLog = await dataJSON.logs
      const len = dataJSONLog.length
      let maxLength = len;
      let arr = [];
      for (let i = maxLength - 1; i >= 0; i--) {
        arr.push({ key: dataJSONLog[i].action + `[${i}]` });
      }
      try {
        this.setState({
          log: arr,
        })
      }
      catch (err) {
        console.log("UserLog Err", err);
      }
      // console.log(this.state.log);
    };
    retrieveData();
  }

  render() {
    return (
      <SafeAreaView
        style={styles.container}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 40,
          }}
        >
          NHẬT KÝ HOẠT ĐỘNG
        </Text>
        <FlatList
          data={
            this.state.log
          }
          renderItem={({ item }) =>
            <Text style={{
              marginLeft: 50,
              marginRight: 50,
              paddingBottom: 5,
              marginTop: 10,
              fontFamily: 'monospace',
              fontWeight: '300',
            }}>
              • {item.key}
            </Text>
          }
          style={{
            height: '100%',
          }}
        />
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
  }
})