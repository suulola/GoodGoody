import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import TextInputWithLabel from '../../components/common/TextInputWithLabel';
import { COLOR } from '../../components/helpers/helpers';
import { logIn } from '../../store/action/auth';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { setUserDetails } from '../../store/action/auth';
import Icon from "react-native-vector-icons/Ionicons";


class UpdateProfile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={ () => navigation.navigate("Profile") }>
        <Icon name="md-arrow-back" size={30} style={{marginLeft: 10, marginRight: 40}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Update Profile</Text>
      </View>
    )
  });
  state={
    firstName: "",
    middleName: "",
    surname: "",
    email: "",
    twitter: "",
    facebook: ""
  }

  updateUserInfo = async () => {
    alert("Working on connecting it to database")

  }

  render() {
    const { firstName, twitter, facebook, middleName, surname, phoneNumber, email } = this.props
    return (
      <ScrollView style={styles.container}>
       <View style={styles.topContainer}>
         <Text style={[styles.text, {textAlign: "center", fontSize: 20, marginBottom:5}]}>About You</Text>
         <Text style={styles.text}>Personal Information</Text>
       <TextInputWithLabel
          placeholder="First Name *"
          label="First Name"
          value={firstName}
          onChangeText={firstName => this.setState({firstName})}
        />
       <TextInputWithLabel
          placeholder="Middle Name"
          label="Middle Name"
          value={middleName}
          onChangeText={middleName => this.setState({middleName})}

        />
       <TextInputWithLabel
          placeholder="Surname *"
          label="Surname"
          value={surname}
          onChangeText={surname => this.setState({surname})}

        />
        <View style={{height: 0.1, width: '100%', borderWidth: 0.3, borderColor: '#ced9db', marginVertical: 20}} ></View>
        <Text style={styles.text}>Contact Information</Text>

        <TextInputWithLabel
          label="Phone Number"
          editable={false}
          value={`0${phoneNumber}`}
          prefilled
        />
        <TextInputWithLabel
          placeholder="Email *"
          label="Email address"
          value={email}
          onChangeText={email => this.setState({email})}
        />

        <TextInputWithLabel
          placeholder="username@twitter.com"
          label="Twitter address"
          value={twitter}
          onChangeText={twitter => this.setState({twitter})}
        />
        <TextInputWithLabel
          placeholder="username@facebook.com"
          label="Facebook address"
          value={facebook}
          onChangeText={facebook => this.setState({facebook})}
        />
       </View>
       <View style={styles.bottomContainer}>
       <TouchableOpacity
            style={styles.submitButton}
            onPress={this.updateUserInfo}
          >
            <Text style={styles.submitText}>Update Profile</Text>
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

const mapStateToProps = state => ({
  firstName: state.auth.firstName,
  phoneNumber: state.auth.phoneNumber,
  email: state.auth.email,
  surname: state.auth.surname,
  middleName: state.auth.middleName
})

export default connect(mapStateToProps, {setUserDetails, logIn})(UpdateProfile)
