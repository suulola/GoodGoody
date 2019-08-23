import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { COLOR } from '../../components/helpers/helpers';



class ConfirmAirtimePurchase extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
        <Text style={{fontSize: 20, marginHorizontal: 5}}>Confirm Purchase</Text>
    )
  });

  state = {
    password: "",
    enteredPIN: ""
  }
  getPassword = async () => {
    const password = await AsyncStorage.getItem('password');
    this.setState({
      password
    })
  }
  componentDidMount() {
    this.getPassword()

  }

  purchaseAirtime = async () => {
    if(+this.state.enteredPIN !== +this.state.password) {
      return alert("Wrong Password. Transaction Not Authorized")
    }

    try {
      const {details } = this.props.navigation.state.params
      const airtimePaymentUrl = `https://ravesandboxapi.flutterwave.com/v2/services/confluence`;
      const formattedNumber = `+234${details.phoneNumber.slice(1)}`
      const response = await fetch(
        airtimePaymentUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret_key: "FLWSECK-0ff1e91399e04404d10c860ece88c6b9-X",
            service: "fly_buy",
            service_method: "post",
            service_version: "v1",
            service_channel: "rave",
            service_payload: {
              Country: "NG",
              CustomerId: formattedNumber,
              // Reference: "9300049404444",
              Amount: details.amount,
              RecurringType: 0,
              IsAirtime: true,
              BillerName: "AIRTIME"
            }
          })
        }
      );
      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.status === "success") {
        if (responseJson.data.Status === "fail") {
          alert(JSON.stringify(responseJson.data.Message));
          this.props.navigation.navigate("Dashboard")

        }
      } else {
        alert("Failed");
      }
    } catch (error) {
      alert("something went wrong");
      this.props.navigation.navigate("Dashboard")
    }

  }


  render() {
    const {details } = this.props.navigation.state.params
    return (
      <View>
        <Text style={styles.pageHeading}>Confirm Transaction </Text>
        <View style={styles.summaryContainer}>

          <View style={styles.row}>
          <Text style={styles.whiteText}> {details.amount} </Text>
          <Text style={styles.whiteText}> {details.phoneNumber} </Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.whiteText}> {details.selectedNetwork} </Text>
          {/* <Text style={styles.whiteText}> {this.state.password} </Text> */}
          </View>
        </View>

        <View style={{
          paddingHorizontal: 20,
          marginVertical: 30
        }}>
          <Text>Input 4 Digit PIN to complete Transaction</Text>
          <TextInput
          placeholder="* * * *"
          value={this.state.enteredPIN}
          secureTextEntry
          keyboardType="numeric"
          style={{
            borderBottomWidth: 1,
            width: 100
          }}
          onChangeText={ enteredPIN => this.setState({ enteredPIN }) }
          />
        </View>


        <TouchableOpacity
        style={styles.button}
        onPress={this.purchaseAirtime}>
          <Text
          style={styles.buttonText}
          >Purchase Airtime</Text>
        </TouchableOpacity>




      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.themeBackground
  },
  pageHeading: {
    paddingVertical: 15,
    fontSize: 19,
    paddingHorizontal: 15,
    fontWeight:"bold",

  },
  row: {
    flexDirection: "row",
    justifyContent:"space-between",
    paddingVertical: 10
  },
  whiteText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: COLOR.buttonBackground,
    padding: 10,
    width: 250,
    alignSelf:"center",
    borderRadius: 5,
    marginTop: 40
  },
  buttonText: {
    color: COLOR.buttonText,
    textAlign:"center"
  },
  summaryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "rgb(250, 250, 250)"
  },
})

export default ConfirmAirtimePurchase
