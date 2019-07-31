import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Linking, Dimensions } from 'react-native'
import { COLOR, URL } from '../../components/helpers/helpers';
import { logIn } from '../../store/action/auth';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

const {height} = Dimensions.get("window")

class Passcode extends Component {
  state = {
      password_1: "",
      password_2: "",
      password_3: "",
      password_4: "",
  }
  submitLoginDetails = () => {
    const {details} = this.props.navigation.state.params

    const {password_1, password_2, password_3, password_4} = this.state

    if(password_1 == undefined || password_2 == undefined || password_3 == undefined || password_4 == undefined) {
      return alert('Fill Inputs')
    }
      let computedPassword = `${password_1}${password_2}${password_3}${password_4}`
      if(+computedPassword === +details.password ) {
        this.props.logIn()
      }else {
        alert("Wrong Passcode")
      }
  }
  switchAccount = async() => {
    const keys = ['phoneNumber', 'password', 'email']
    try{
      await AsyncStorage.multiRemove(keys)
      this.props.navigation.navigate("Login")
    }catch(error) {
      console.log(error)
    }


  }

  resetPIN = () => {

  }

  render() {
    const {details} = this.props.navigation.state.params
    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
          <Text> Welcome Back +234{details.phoneNumber} {details.email !== null && details.email } </Text>
       <View style={styles.row}>
       <Text> Not you </Text>

       <TouchableOpacity onPress={this.switchAccount} >
       <Text style={styles.link}>Switch account</Text>
       </TouchableOpacity>
       </View>
       <Text>Enter your PIN</Text>
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
           onKeyPress={({nativeEvent: {key: keyValue}}) => {
            if(keyValue === "Backspace"&& this.state.password_2 === "" ) {
              this.refs.password_1.focus()
            }
          }}
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
           onKeyPress={({nativeEvent: {key: keyValue}}) => {
            if(keyValue === "Backspace" && this.state.password_3 === "" ) {
              this.refs.password_2.focus()
            }
          }}
           />
         </View>
         {/* 4 */}
         <View style={styles.passwordContainer}>
           <TextInput
          onChangeText={(password_4) => {
            this.setState({password_4})
            if(password_4) setTimeout( this.submitLoginDetails, 1000
            )
           }}
          ref="password_4"
           keyboardType="numeric"
           style={styles.inputField}
           maxLength={1}
           secureTextEntry={true}
           onKeyPress={({nativeEvent: {key: keyValue}}) => {
            if(keyValue === "Backspace" && this.state.password_4 === "") {
              this.refs.password_3.focus()
            }
          }}
           />
         </View>

       </View>
       <View style={styles.row}>
       <Text> Forgot PIN? </Text>
        <TouchableOpacity>
          <Text style={styles.link}> Reset </Text>
        </TouchableOpacity>
       </View>
          </View>
          <View style={styles.footer}>
          <View style={styles.row}>
       <Text> Need help? </Text>
        <TouchableOpacity onPress={() => Linking.openURL(URL.customerCare) }>
          <Text style={styles.link}> Chat with GoodGoody support </Text>
        </TouchableOpacity>
       </View>
       <TouchableOpacity
       onPress={this.submitLoginDetails}
       style={styles.submitButton}>
         <Text style={styles.submitText}>Authorize</Text>
       </TouchableOpacity>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    top: height - 110,
    right: 0,
    left: 0,
    alignItems: "center",

  },
  container: {
    flex: 1,
    height: '100%',
    // justifyContent: "space-between",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10
  },
  bottomContainer: {
    height: 100,
    width: '100%',
    alignItems: "center",
    paddingVertical: 10
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
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
  link: {
    color: 'green',
  },
  submitButton: {
    backgroundColor: COLOR.buttonBackground,
    width: '80%',
    borderRadius: 5,
    padding: 10
  },
  submitText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default connect(null,{logIn})(Passcode)
