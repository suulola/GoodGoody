import React, { Component } from 'react'
import { Text, View, Picker, StyleSheet, TouchableOpacity, Linking, TextInput } from 'react-native'
import { COLOR, URL } from '../../components/helpers/helpers';



export class Login extends Component {
  state = {
    selectedCountry: null,
    phoneNumber: "",
    numberInvalid: false,
    selectCountryInvalid: false,
    countries: ["Select a Country", "Nigeria", "Ghana"],
  }
  setCountry = (value) => {
    this.setState({
      selectedCountry: value,
      selectCountryInvalid: false
    })
  }
  submitLoginDetails = () => {
    if(this.state.selectedCountry == null || this.state.selectedCountry == "Select a Country") {
      this.setState({
        selectCountryInvalid: true
      })
      return;
    }

    if(this.state.phoneNumber.length !== 11) {
      this.setState({
        numberInvalid: true
      })
      return;
    }

    this.props.navigation.navigate("Passcode", {
      details: this.state
    })
  }


  componentDidMount() {
    // set a token- usually the device user's name and the phone number and save it to the async storage
    // if that token exists -> save the user's name and the phone number from a token
    // then redirect them to the passcode page to enter their token

    // else do nothing but stay on this page.
  }




  render() {
    let country = this.state.countries.map((value, i) => {
      return <Picker.Item key={i} label={value} value={value} />;
    });
    return (
      <View
      style={styles.container}
      >

        <Text style={styles.welcomeText} > Welcome to GoodGoody </Text>
        <View style={styles.topContainer}>

     {/* picker */}

          <Text style={{ color: "#49add3" }}>
            Your Location
          </Text>
          <View style={[styles.dropdown, this.state.selectCountryInvalid && { borderWidth: 1,
          borderColor: 'red',
          backgroundColor: "rgb(231, 126, 126)"
          }]}>

          <Picker
            style={{
              width: "100%"
            }}
            selectedValue={this.state.selectedCountry}
            onValueChange={this.setCountry}
          >
            {country}
          </Picker>
        </View>
     {/* end of picker */}
     <View style={{
       marginTop: 10
     }}>
       <Text style={{color: "#49add3"}}>
         Phone Number
       </Text>
       <TextInput
        placeholder="0XXXXXXXXXX"
        style={[styles.inputText, this.state.numberInvalid && { borderWidth: 1,borderColor: 'red', backgroundColor: "rgb(231, 126, 126)"}]}
        onChangeText={phoneNumber => this.setState({ phoneNumber })}
        keyboardType="phone-pad"
         />
     </View>






        </View>

        <View style={styles.bottomContainer}>

       <TouchableOpacity
       onPress={this.submitLoginDetails}
       style={styles.submitButton}>
         <Text style={styles.submitText}>Next</Text>
       </TouchableOpacity>
       <View style={styles.row}>
       <Text> By clicking Next you accept the </Text>
        <TouchableOpacity onPress={() => Linking.openURL(URL.termsAndConditions) }>
          <Text style={styles.link}>terms and condition </Text>
        </TouchableOpacity>
       </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.themeBackground
  },
  topContainer: {
    flex: 1,
    paddingVertical: 10,
    width: '70%'
  },
  bottomContainer: {
    height: 80,
    width: '100%',
    alignItems: "center",
    paddingVertical: 5
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  link: {
    color: COLOR.linkTextColor,
  },
  submitButton: {
    backgroundColor: COLOR.buttonBackground,
    width: '80%',
    borderRadius: 5,
    padding: 10
  },
  submitText: {
    color: COLOR.buttonText,
    textAlign: 'center'
  },
  inputText: {
    backgroundColor: COLOR.inputBackground, borderRadius: 5,
   },
  dropdown: {
    backgroundColor: COLOR.inputBackground,
    width: '100%',
    borderColor: "#000"
  },
  welcomeText: {
    color: "rgb(200, 199, 199)",
    marginTop: 50,
    marginVertical: 20,
    fontSize: 20
  }
})

export default Login
