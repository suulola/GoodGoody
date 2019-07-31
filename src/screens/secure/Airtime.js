import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Airtime extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{fontSize: 20}}>Airtime</Text>
      </View>
    )
  });

  render() {
    return (
      <View>
        <Text> buy airtime </Text>
      </View>
    )
  }
}

export default Airtime
