import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import DashboardCard from "../../components/common/DashboardCard";
import { COLOR } from '../../components/helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons';



const {width, height} = Dimensions.get("window")

class Dashboard extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{fontSize: 20}}>Dashboard</Text>
      </View>
    )
  });

  state = {
    showBal: false
  }
  render() {
    return (
        <View style={styles.container}>
        {/* topmost view start */}
        <View style={[styles.row, {
          justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 5
          }]}>
          <View>
            <Text>Home</Text>
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

        {/* <View style={[styles.row, {justifyContent: "space-around", alignItems: "center", paddingVertical: 20}]}>
          <Item labelText="Bank Transfer" iconName="md-cash" onPress={() => alert('hi')}  />
          <Item labelText="Shopping" iconName="md-timer" onPress={() => alert('hi')}  />
          <Item labelText="Hotel Reservation" iconName="md-power" onPress={() => alert('hi')}  />
          <Item labelText="Save" iconName="md-lock" onPress={() => alert('hi')}  />
        </View> */}

       </View>
       <ScrollView>
       <DashboardCard
       cardTitle="Title of the page"
       iconName="md-cash"
       cardText="React Native gives mobile and web developers the power to Write your app once and easily deploy it to iOS and Android and the web. React Native apps compile into platform-specific code"
       buttonText="Come Here"
       backgroundColor="rgba(209, 139, 209, 0.8)"
       />
       <DashboardCard
       cardTitle="Title of the page"
       iconName="md-cash"
       cardText="React Native gives mobile and web developers the power to Write your app once and easily deploy it to iOS and Android and the web. React Native apps compile into platform-specific code"
       buttonText="Come Here"
       backgroundColor="rgba(9, 39, 209, 0.7)"
       />
       <DashboardCard
       cardTitle="Title of the page"
       iconName="md-cash"
       cardText="React Native gives mobile and web developers the power to Write your app once and easily deploy it to iOS and Android and the web. React Native apps compile into platform-specific code"
       buttonText="Come Here"
       backgroundColor="rgba(9, 139, 209, 0.5)"
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
export default Dashboard
