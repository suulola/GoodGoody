import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux'
import { setUserDetails } from '../../store/action/auth';


class Home extends Component {

  getUserDetails = async () => {
    try {
      const phoneNumber = await AsyncStorage.getItem('phoneNumber');
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      const firstName = await AsyncStorage.getItem('firstName');
      const surname = await AsyncStorage.getItem('surname');
      const userDetails = {
        email,
        firstName,
        surname,
        password: +password,
        phoneNumber: +phoneNumber
      }
      this.props.setUserDetails(userDetails)
      if(phoneNumber !== null) {
this.props.navigation.navigate("Passcode", {details: userDetails})
       }else {
this.props.navigation.navigate("Login")
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
        // if token found, retrieve info && redirect to passcode page
    // info - email, name && name, phone number, token
    // else redirect to redirect to login
    this.getUserDetails()

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchContainer} onPress={this.getUserDetails}>
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

export default connect(null, {setUserDetails})(Home)
