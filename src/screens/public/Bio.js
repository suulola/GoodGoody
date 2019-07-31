import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import TextInputWithLabel from '../../components/common/TextInputWithLabel';
import { COLOR } from '../../components/helpers/helpers';
import { logIn } from '../../store/action/auth';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

class Bio extends Component {
  state={
    firstName: "",
    middleName: "",
    surname: "",
    isInvalid: false,
    email: ""
  }

  registerUserBio = async () => {
    const {details} = this.props.navigation.state.params

    if(this.state.firstName == "" || this.state.surname == "" || this.state.email == "" ) {
      alert("Required fields not filled")
      return;
    }
    try {
      await AsyncStorage.setItem('password', `${details.pin}`)
      await AsyncStorage.setItem('phoneNumber', `${details.phoneNumber}`)
      await AsyncStorage.setItem('firstName', this.state.firstName)
      await AsyncStorage.setItem('surname', this.state.surname)
      await AsyncStorage.setItem('email', this.state.email)
      this.props.logIn()
    } catch(e) {
      console.log(e)
      alert('Something went wrong')
    }
  }

  render() {
    const {details} = this.props.navigation.state.params
    console.log(details)
    return (
      <ScrollView style={styles.container}>
       <View style={styles.topContainer}>
         <Text style={[styles.text, {textAlign: "center", fontSize: 20, marginBottom:5}]}>About You</Text>
         <Text style={styles.text}>Personal Information</Text>
       <TextInputWithLabel
          placeholder="First Name"
          isInvalid={this.state.isInvalid}
          label="First Name"
          onChangeText={firstName => this.setState({firstName})}
        />
       <TextInputWithLabel
          placeholder="Middle Name"
          label="Middle Name"
          onChangeText={middleName => this.setState({middleName})}

        />
       <TextInputWithLabel
          placeholder="Surname"
          isInvalid={this.state.isInvalid}
          label="Surname"
          onChangeText={surname => this.setState({surname})}

        />
        <View style={{height: 0.1, width: '100%', borderWidth: 0.3, borderColor: '#ced9db', marginVertical: 20}} ></View>
        <Text style={styles.text}>Contact Information</Text>

        <TextInputWithLabel
          label="Phone Number"
          editable={false}
          value={details.phoneNumber}
          prefilled
        />
          <TextInputWithLabel
          placeholder="Email"
          label="Email address"
          onChangeText={email => this.setState({email})}

        />
       </View>
       <View style={styles.bottomContainer}>
       <TouchableOpacity
            style={styles.submitButton}
            onPress={this.registerUserBio}
          >
            <Text style={styles.submitText}>Next</Text>
          </TouchableOpacity>
       </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.themeBackground,
    paddingHorizontal: 30,
    paddingVertical: 5

  },
  text: {
    fontSize: 14,
    color: COLOR.greyText
  },
  bottomContainer: {
    height: 100,
    width: "100%",
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 5
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: COLOR.buttonBackground,
    width: "100%",
    borderRadius: 5,
    padding: 10,
  },
  submitText: {
    color: 'white',
    textAlign: "center",
  },
})

const mapStateToProps = state = {}

export default connect(null, {logIn})(Bio)
