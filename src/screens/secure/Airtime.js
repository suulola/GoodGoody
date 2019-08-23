import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Picker,
  Image,
  TextInput,
  StyleSheet,
  ScrollView

} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { COLOR } from '../../components/helpers/helpers';



export class Airtime extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={ () => navigation.navigate("tabDashboard") }>
        <Icon name="md-arrow-back" size={30} style={{marginLeft: 10, marginRight: 10}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Airtime</Text>
      </View>
    )
  });

  state = {
    selectedNetwork: "",
    amount: "",
    phoneNumber: ""
  }

  submitAirtimeDetails = () => {
    if(this.state.selectedNetwork === "") {
      return alert("Please select a Network Provider")
    }
    if( +this.state.amount < 100 ) {
      return alert("Minimum Recharge amount is N100")
    }
    if(this.state.phoneNumber.length !== 11) {
      return alert("Please input a valid 11 digits number")
    }
    this.props.navigation.navigate("ConfirmAirtimePurchase", {
      details: this.state
    })
  }

  render() {
    return (
      <View  style={styles.container}>

        <View style={
          [ styles.scrollContainer,
          this.state.selectedNetwork == "MTN" && { backgroundColor: "rgba(250, 250, 20, 0.9)"},
          this.state.selectedNetwork == "Glo" && { backgroundColor: "rgba(173, 255, 47, 0.8)"},
          this.state.selectedNetwork == "Airtel" && { backgroundColor: "rgba(216, 29, 29, 0.984)"},
          this.state.selectedNetwork == "9Mobile" && { backgroundColor: "rgba(0, 128, 0, 0.5)"},

          ]}>

        <View style={styles.section} >
          <Text
        style={styles.label}
        > Choose Network Provider </Text>
        <Picker
        onValueChange={  selectedNetwork => this.setState({ selectedNetwork }) }
        selectedValue={this.state.selectedNetwork} >
          <Picker.Item  label="Choose Network" value="" />
          <Picker.Item label="MTN" value="MTN" />
          <Picker.Item label="Glo" value="Glo" />
          <Picker.Item label="Airtel" value="Airtel" />
          <Picker.Item label="9Mobile" value="9Mobile" />
        </Picker>
        </View>

        <View style={styles.section}>
          <Text
          style={styles.label}
          >Amount</Text>
          <TextInput
          value={this.state.amount}
          keyboardType="numeric"
          keyboardAppearance="dark"
          onChangeText={ amount => this.setState({ amount }) }
          style={styles.textInput}
          />
        </View>

        <View style={styles.section}>
          <Text
          style={styles.label}
          >Phone Number</Text>
          <TextInput
          value={this.state.phoneNumber}
          keyboardType="numeric"
          keyboardAppearance="light"
          onChangeText={ phoneNumber => this.setState({ phoneNumber }) }
          style={styles.textInput}
          placeholder="0XXXXXXXXXX"
          />
        </View>



        <TouchableOpacity
        style={styles.button}
        onPress={this.submitAirtimeDetails}>
          <Text
          style={styles.buttonText}
          >Next</Text>
        </TouchableOpacity>


        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: COLOR.themeBackground,

  },
  scrollContainer: {
    width: '80%',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 20

  },
  label: {
    fontSize: 12,
    paddingBottom: 5
  },
  textInput: {
    backgroundColor: "rgba(255, 255, 255, 0.884)",
    borderRadius: 5
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: COLOR.buttonBackground,
    padding: 10,
    width: 150,
    alignSelf:"center",
    borderRadius: 5,
    marginTop: 40
  },
  buttonText: {
    color: COLOR.buttonText,
    textAlign:"center"
  }
})

export default Airtime
