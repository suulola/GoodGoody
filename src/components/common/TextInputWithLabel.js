import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { COLOR } from '../helpers/helpers';

const TextInputWithLabel = (props) => {
  return (
       <View style={{
       marginTop: 10
     }}>
       <Text style={{color: "#0c1113"}}>
         {props.label}
       </Text>
       <TextInput
        style={[styles.inputText, props.prefilled && {backgroundColor: "#cacaca"}]}
        {...props}
         />
     </View>
  )
}

const styles = StyleSheet.create({
  inputText: {
    borderColor: "rgb(49, 49, 49)",
    height: 45,
    borderRadius: 5,
    backgroundColor: COLOR.inputBackground
  }

})

export default TextInputWithLabel
