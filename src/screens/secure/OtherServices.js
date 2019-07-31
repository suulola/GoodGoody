import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class OtherServices extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{fontSize: 20}}>Other Services</Text>
      </View>
    )
  });
  render() {
    return (
      <View>
        <Text> other services </Text>
      </View>
    )
  }
}

export default OtherServices
