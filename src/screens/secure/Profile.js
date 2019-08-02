import React, { Component } from 'react'
import { Text, View, TextInput, Dimensions ,TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { COLOR } from '../../components/helpers/helpers';
import {connect} from 'react-redux'
import {Gravatar, GravatarApi} from 'react-native-gravatar';
import Icon from "react-native-vector-icons/Ionicons";

const {width, height} = Dimensions.get("window")

class Profile extends Component {
  render() {
    const { firstName, middleName, surname, phoneNumber, email } = this.props
    return (
 <ScrollView>
<View style={styles.container}>
<Text style={[styles.text, {textAlign: "center", fontSize: 20, marginBottom:5}]}>Profile Information</Text>
<Gravatar options={{
   email: email ,
   parameters: { "size": "200", "d": "mm" },
   secure: true
  }}
 style={styles.roundedProfileImage}
 />
 <Text style={{fontSize: 20, color: "rgba(216, 49, 49, 0.2)" }}>{`${firstName.slice(0,1).toUpperCase()}${firstName.slice(1)} ${surname.slice(0,1).toUpperCase()}${surname.slice(1)}`  }</Text>
<View style={styles.row}>
<Text style={{fontSize: 13, color: "black", marginRight: 40 }}>{ `Nigeria`  }</Text>
<Text
onPress={ () => this.props.navigation.navigate("UpdateProfile") }
style={{color: "rgba(216, 49, 49, 0.5)", fontSize: 13, marginLeft: 40}}>Edit Profile</Text>
</View>



 <View style={[styles.card]}>
   <View style={styles.row}>
     <Icon
     name="md-call"
     size={30}
     color="rgba(216, 49, 49, 0.5)"
     style={{marginRight: 50, width: "30%", textAlign: "right" }}
     />
   <View style={{width: "60%", justifyContent: "flex-end" }}>
     <Text style={{color: "rgba(216, 49, 49, 0.3)", fontSize: 10}} > PHONE NUMBER </Text>
     <Text style={{fontSize: 15, color: "black" }}>{ `0${phoneNumber}`  }</Text>
   </View>

   </View>
   <View style={styles.row}>
   <Icon
   color="rgba(216, 49, 49, 0.5)"
   name="md-mail"
   size={30}
   style={{marginRight: 50, width: "30%", textAlign: "right" }}

    />
   <View style={{width: "60%"}} >
   <Text style={{color: "rgba(216, 49, 49, 0.3)", fontSize: 10}} > EMAIL </Text>
   <Text style={{fontSize: 15, color: "black" }}>{ `${email.toLowerCase()}`  }</Text>
   </View>

   </View>
 </View>


 <View style={[styles.card, {marginTop: 20}]}>
   <View style={styles.row}>
     <Icon
     name="md-call"
     size={30}
     color="rgba(216, 49, 49, 0.5)"
     />
   <Text style={{marginLeft: 30, fontSize: 15, color: "black" }}>{ `0${phoneNumber}`  }</Text>

   </View>
   <View style={styles.row}>
   <Icon
   color="rgba(216, 49, 49, 0.5)"
   name="md-mail"
   size={30}
    />
   <Text style={{ marginLeft: 30, fontSize: 15, color: "black" }}>{ `${email.toLowerCase()}`  }</Text>

   </View>

 </View>

</View>
  </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height - 73,
    backgroundColor: COLOR.themeBackground,
    paddingHorizontal: 30,
    paddingVertical: 5,
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5
  },
  roundedProfileImage: {
    width:100,
    height:100,
    borderWidth:3,
    borderColor:'white',
    borderRadius:50
  },
  text: {
    fontSize: 14,
    color: COLOR.greyText
  },
  card: {
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
   backgroundColor: "rgb(250, 250, 250)"
  }
})

const mapStateToProps = state => ({
  firstName: state.auth.firstName,
  phoneNumber: state.auth.phoneNumber,
  email: state.auth.email,
  surname: state.auth.surname,
  middleName: state.auth.middleName
})

export default connect(mapStateToProps)(Profile)
