import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextInputWithLabel = (props) => {
  return (
       <View style={{
       marginTop: 10
     }}>
       <Text style={{color: "#49add3"}}>
         {props.label}
       </Text>
       <TextInput
        placeholder={props.placeholder}
        style={[styles.inputText, props.isInvalid && { borderWidth: 1,borderColor: 'red', backgroundColor: "rgb(231, 126, 126)"}]}
        onChangeText={props.onChangeText}
        // keyboardType="phone-pad"
         />
     </View>
  )
}

const styles = StyleSheet.create({

})

export default TextInputWithLabel
