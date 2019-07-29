import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { COLOR } from '../../components/helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons'


class SetPasscode extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}><Text>Set PIN</Text>
        </View>
    ),
});

  state = {
    password_1: "",
    password_2: "",
    password_3: "",
    password_4: "",
    confirm_password_1: "",
    confirm_password_2: "",
    confirm_password_3: "",
    confirm_password_4: "",

  }
  submitPasscode = () => {
    const {password_1, password_2, password_3, password_4, confirm_password_1, confirm_password_2, confirm_password_3, confirm_password_4} = this.state

    if(password_1 == undefined || password_2 == undefined || password_3 == undefined || password_4 == undefined || confirm_password_1 == undefined|| confirm_password_2 == undefined || confirm_password_3 == undefined || confirm_password_4 == undefined ) {
      return alert('Fill Inputs')
    }
      let computedPassword = `${password_1}${password_2}${password_3}${password_4}`

      let computedConfirmPassword = `${confirm_password_1}${confirm_password_2}${confirm_password_3}${confirm_password_4}`

      if(computedPassword === computedConfirmPassword) {
        this.props.navigation.navigate("Bio")
      }else {
        alert("now working yet")
      }


  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcomeText}> Enter new PIN </Text>
        <View style={styles.overallPasswordContainer}>
         {/* 1 */}
       <View style={styles.passwordContainer}>
           <TextInput
          onChangeText={(password_1) => {
            this.setState({password_1})
            if(password_1) this.refs.password_2.focus()
           }}
           ref="password_1"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
      </View>
       {/* 2 */}
      <View style={styles.passwordContainer}>
         <TextInput
          onChangeText={(password_2) => {
            this.setState({password_2})
            if(password_2) this.refs.password_3.focus()
             }}
           ref="password_2"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
      </View>
         {/* 3 */}
         <View style={styles.passwordContainer}>
           <TextInput
          onChangeText={(password_3) => {
            this.setState({password_3})
            if(password_3) this.refs.password_4.focus()
           }}
          ref="password_3"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
         </View>
         {/* 4 */}
         <View style={styles.passwordContainer}>
           <TextInput
          onChangeText={(password_4) => {
            this.setState({password_4})
            if(password_4)this.refs.confirm_password_1.focus()
           }}
          ref="password_4"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
         </View>

       </View>



        <Text style={styles.welcomeText}> Re-enter new PIN </Text>
        <View style={styles.overallPasswordContainer}>
         {/* 1 */}
       <View style={styles.passwordContainer}>
           <TextInput
          onChangeText={(confirm_password_1) => {
            this.setState({confirm_password_1})
            if(confirm_password_1) this.refs.confirm_password_2.focus()
           }}
           ref="confirm_password_1"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
      </View>
       {/* 2 */}
      <View style={styles.passwordContainer}>
         <TextInput
          onChangeText={(confirm_password_2) => {
            this.setState({confirm_password_2})
            if(confirm_password_2) this.refs.confirm_password_3.focus()
             }}
           ref="confirm_password_2"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
      </View>
         {/* 3 */}
         <View style={styles.passwordContainer}>
           <TextInput
          onChangeText={(confirm_password_3) => {
            this.setState({confirm_password_3})
            if(confirm_password_3) this.refs.confirm_password_4.focus()
           }}
          ref="confirm_password_3"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
         </View>
         {/* 4 */}
         <View style={styles.passwordContainer}>
           <TextInput
          onChangeText={(confirm_password_4) => {
            this.setState({confirm_password_4})
            if(confirm_password_4) setTimeout( this.submitPasscode, 1000
            )
           }}
          ref="confirm_password_4"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           />
         </View>

       </View>
       <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitPasscode}
          >
            <Text style={styles.submitText}>Submit PIN</Text>
          </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10
  },
  overallPasswordContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  inputField: {
    flex: 1,
    textAlign: "center",
  },
  passwordContainer: {
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: 'green',
    marginHorizontal: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  submitButton: {
    marginTop: 50,
    backgroundColor: COLOR.buttonBackground,
    width: '70%',
    borderRadius: 5,
    padding: 10
  },
  submitText: {
    color: 'white',
    textAlign: 'center'
  },
  welcomeText: {
    color: 'rgb(200, 199, 199)',
    marginTop: 50,
    marginVertical: 10,
    fontSize: 16,
  },

})

export default SetPasscode
