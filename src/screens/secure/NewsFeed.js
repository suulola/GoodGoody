import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class NewsFeed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{fontSize: 20}}>News</Text>
      </View>
    )
  });
  render() {
    return (
      <View>
        <Text> NewsFeed Section </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("ShoppingCart")} >
          <Text>hello</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewsFeed
