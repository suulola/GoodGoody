import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { COLOR } from "../../components/helpers/helpers";

class Verification extends Component {
  state = {
    code_1: '',
    code_2: '',
    code_3: '',
    code_4: ''
  };

  verifyUser = () => {
    const {details, code} = this.props.navigation.state.params
    const { code_1, code_2, code_3, code_4 } = this.state;

    if  (
      code_1 == undefined ||
      code_2 == undefined ||
      code_3 == undefined ||
      code_4 == undefined
    ) {
      return alert("Fill Inputs");
    }
    let computedCode = +`${code_1}${code_2}${code_3}${code_4}`;
    console.log(code, "compare", computedCode)
    if( +code == +computedCode) {
      this.props.navigation.navigate("SetPasscode")
    }else {
      alert('Wrong COde. Please Try again!!!')
    }
  };
  componentDidMount() {
    const {details, code} = this.props.navigation.state.params
    alert(code)

  }


  render() {
    const {details, code} = this.props.navigation.state.params
    console.log(details, code)

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeText}> Verify Your Phone Number </Text>

          <View style={styles.overallCodeContainer}>
            {/* 1 */}
            <View style={styles.codeContainer}>
              <TextInput
                onChangeText={code_1 => {
                  this.setState({ code_1 });
                  if (code_1) this.refs.code_2.focus();
                }}
                ref="code_1"
                keyboardType="numeric"
                style={styles.inputField}
                maxLength={1}
              />
            </View>
            {/* 2 */}
            <View style={styles.codeContainer}>
              <TextInput
                onChangeText={code_2 => {
                  this.setState({ code_2 });
                  if (code_2) this.refs.code_3.focus();
                }}
                ref="code_2"
                keyboardType="numeric"
                style={styles.inputField}
                maxLength={1}
              />
            </View>
            {/* 3 */}
            <View style={styles.codeContainer}>
              <TextInput
                onChangeText={code_3 => {
                  this.setState({ code_3 });
                  if (code_3) this.refs.code_4.focus();
                }}
                ref="code_3"
                keyboardType="numeric"
                style={styles.inputField}
                maxLength={1}
              />
            </View>
            {/* 4 */}
            <View style={styles.codeContainer}>
              <TextInput
                onChangeText={code_4 => {
                  this.setState({ code_4 });
                  if (code_4) setTimeout(this.verifyUser, 1000);
                }}
                ref="code_4"
                keyboardType="numeric"
                style={styles.inputField}
                maxLength={1}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.verifyUser}
          >
            <Text style={styles.submitText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomContainer: {
    height: 100,
    width: "100%",
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 5
  },

  overallCodeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  inputField: {
    flex: 1,
    textAlign: 'center'
  },
  codeContainer: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: "green",
    marginHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButton: {
    backgroundColor: COLOR.buttonBackground,
    width: "80%",
    borderRadius: 5,
    padding: 10,
  },
  submitText: {
    color: 'white',
    textAlign: "center",
  },
  welcomeText: {
    color: 'rgb(200, 199, 199)',
    marginTop: 50,
    marginVertical: 20,
    fontSize: 20,
  },
  smallText: {
    color: 'rgb(200, 199, 199)',
    fontSize: 10,
    marginTop: 5,
  },
});

export default Verification;
