import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import TextInputWithLabel from '../../components/common/TextInputWithLabel';

class Bio extends Component {
  render() {
    return (
      <View>
        <Text> Bio  </Text>
        <TextInputWithLabel
          placeholder="Hello"
          isInvalid={false}
          label="hello"
        />
      </View>
    )
  }
}

export default Bio
