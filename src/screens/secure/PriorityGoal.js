import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class PriorityGoal extends Component {
  static navigationOptions = {
    title: "Top Priority Goals"
  };
  render() {
    return (
      <View>
        <Text> Priority Goal </Text>
      </View>
    )
  }
}

export default PriorityGoal
