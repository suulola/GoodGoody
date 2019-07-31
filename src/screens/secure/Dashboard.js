import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import DashboardCard from "../../components/common/DashboardCard";
import { COLOR } from '../../components/helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'


const {width, height} = Dimensions.get("window")

class Dashboard extends Component {
  state = {
    showBal: false
  }
  render() {
    console.log(this.props)
    const { firstName, email, phoneNumber} = this.props
    return (
        <View style={styles.container}>
        {/* topmost view start */}
        <View style={[styles.row, {
          justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 5
          }]}>
          <View>
            <Text>Welcome  {firstName} </Text>
          </View>
          <View style={[styles.row, {width: 120, justifyContent: "space-around"}]}>
            <Icon name="md-person" size={30}  />
            <Icon name="md-notifications-outline" size={30}  />
            <Icon name="md-settings" size={30}  />
          </View>
        </View>
        {/* topmost view end */}
        <View style={{width: '100%', height: 1, borderWidth: 0.5, borderColor: "#bdbdbd7a", marginVertical: 5}} />

       <View style={{backgroundColor: "white", width: '100%'}}>
       <View style={[styles.row, {justifyContent: "space-between", paddingHorizontal: 5}]}>
          <Text>Total Balance: {this.state.showBal ? 'N50' : 'XX'}
          </Text>
          <TouchableOpacity onPress={ () => this.setState({showBal: !this.state.showBal}) }>
          <Text>
            {this.state.showBal ? 'Hide' : 'Show'}
          </Text>
          </TouchableOpacity>
        </View>

       </View>
       <ScrollView>
       <DashboardCard
       cardTitle="News Feed"
       iconName="md-cash"
       cardText=" Get real time news updates as they happen around the world"
       buttonText="Read News"
       backgroundColor="rgba(209, 139, 209, 0.4)"
       onPress={() => this.props.navigation.navigate("NewsFeed")}
       />
       <DashboardCard
       cardTitle="Airtime Recharge"
       iconName="md-cash"
       cardText=" Recharge your MTN, GLO, Airtel and 9mobile lines"
       buttonText="Recharge"
       backgroundColor="rgba(9, 39, 209, 0.4)"
       onPress={() => this.props.navigation.navigate("Airtime")}

       />
       <DashboardCard
       cardTitle="Shopping Cart"
       iconName="md-cash"
       cardText="Buy your wares ranging from wears, shoes, foodstuffs etc and pay through the secured Paystack payment gateway "
       buttonText="Shop"
       backgroundColor="rgba(9, 139, 209, 0.3)"
       onPress={() => this.props.navigation.navigate("ShoppingCart")}

       />
       <DashboardCard
       cardTitle="Others Services"
       iconName="md-power"
       cardText="Some proposed services coming soon "
       buttonText="Visit"
       backgroundColor="rgba(228, 19, 165, 0.3)"
       onPress={() => this.props.navigation.navigate("OtherServices")}

       />
       </ScrollView>


      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    // paddingHorizontal: 5,
    backgroundColor: COLOR.themeBackground   // "#8d8d8d7a"

  },
  row: {
    flexDirection: "row"
  }
})

const mapStateToProps = state => {
  return {
    firstName: state.auth.firstName,
    phoneNumber: state.auth.phoneNumber,
    email: state.auth.email
  }
}
export default connect(mapStateToProps)(Dashboard)
