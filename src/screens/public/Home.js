import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Home extends Component {
  move = () => {
    setTimeout(() => this.props.navigation.navigate("Login"), 1000)
  }
  componentDidMount() {
    this.move()
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchContainer} onPress={this.move}>
          <Text style={styles.text}>GoodGoody</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0,0, 0.5)"
  },
  touchContainer : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontStyle: "italic"
  }
})

export default Home
