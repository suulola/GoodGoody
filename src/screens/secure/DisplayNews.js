import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class DisplayNews extends Component {
  render() {
    const {article} = this.props.navigation.state.params;
    return (
      <View>
        <Text> {JSON.stringify( article)} </Text>
      </View>
    )
  }
}

export default DisplayNews
