import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class ShoppingCart extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{fontSize: 20}}>Shopping Cart</Text>
      </View>
    )
  });
  render() {
    return (
      <View>
        <Text> shopping cart </Text>
      </View>
    )
  }
}

export default ShoppingCart
