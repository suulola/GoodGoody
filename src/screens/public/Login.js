import React, { Component } from 'react'
import { Text, View, Picker, StyleSheet, TouchableOpacity, Linking, TextInput } from 'react-native'
import { COLOR, URL } from '../../components/helpers/helpers';
import AsyncStorage from '@react-native-community/async-storage';



class Login extends Component {
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


  submitLoginDetails = async () => {
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
    // 1. If user is unknown and there is no pnumber pair in async storage do the below I THINK IT SHOULD BE FIREBASE AUTH RATHER
    if(true) {
    // generate a random 6 digit number
     let confirmCode = Math.floor(Math.random() * 10 * 1000)
     try {
      const formatedNumber = `234${this.state.phoneNumber.slice(1)}`
      const userId = 68517951
      const password = 'wonder09'
      const sender = "GoodGoody"
      const content = ` Hello world ${confirmCode} `
    //  const response = await fetch(`http://developers.cloudsms.com.ng/api.php?userid=${userId}&password=${password}&type=5&destination=${formatedNumber}&sender=${sender}&message=${content}`, {
    //      method: 'POST',
    //      headers: {
    //       "Content-Type": "application/json"
    //     },
    //    })
    //    const responseJSON = await response.json()
       console.log(formatedNumber)
       console.log(content)
       this.props.navigation.navigate("Verification", {
        details: this.state,
        code: confirmCode
      })

     } catch (error) {
       alert(error)

     }

    }
    // send the random digit to the user via SMS, you can try CloudSMS for this. or you can use email instead
    // pass the random digit to the Verification page thru params and then navigate to that screen
    // user gets the digits, inputs it, and then is redirected to the login page

    // 2. If user is known and pnumber exist in async storage, take user to login page


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
         <Text style={styles.smallText}>You will get an SMS with a one-time access code</Text>
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
    height: 100,
    width: '100%',
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: 10
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
    color: COLOR.greyText,
    marginTop: 50,
    marginVertical: 20,
    fontSize: 20
  },
  smallText: {
    color: "rgb(200, 199, 199)",
    fontSize: 10,
    marginTop: 5
  }
})

export default Login
