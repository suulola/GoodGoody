import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

class SingleTextInput extends React.Component {
  render() {
    return (
      <View style={styles.passwordContainer}>
           <TextInput
           onChangeText={this.props.onChangeText}
           style={styles.passwordTextInput}
           ref={this.props.ref}
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
         </View>
    )

  }

}
const styles = StyleSheet.create({
  passwordContainer: {
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: 'green',
    marginHorizontal: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    flex: 1,
    textAlign: "center",
  }
})

export default SingleTextInput
