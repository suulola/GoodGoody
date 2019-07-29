import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Item from "../../components/common/Item";
import { COLOR } from '../../components/helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get("window")

class Dashboard extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{fontSize: 20}}>Dashboard</Text>
      </View>
    ),
    // headerLeft: (
    //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
    //     <Icon
    //       color="#000"
    //       name="md-menu"
    //       size={30}
    //       style={{ marginLeft: 24, marginRight: 24 }}
    //     />
    //   </TouchableOpacity>
    // ),
    // headerRight: (
    //   <View
    //     color="#000"
    //     name="md-menu"
    //     size={30}
    //     style={{ marginLeft: 24, marginRight: 24 }}
    //   />
    // )
  });




  state = {
    showBal: false
  }
  render() {
    return (
      <View style={styles.container}>
        {/* topmost view start */}
        <View style={[styles.row, {justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20}]}>
          <View>
            <Text>Home</Text>
          </View>
          <View style={[styles.row]}>
            <Icon name="md-person" size={30}  />
            <Icon name="md-notifications-outline" size={30}  />
            <Icon name="md-settings" size={30}  />
          </View>
        </View>
        {/* topmost view end */}
        <View style={{width: '100%', height: 1, borderWidth: 0.5, borderColor: "#bdbdbd7a", marginVertical: 5}} />
       <View style={{backgroundColor: "white", width: '100%'}}>
       <View style={[styles.row, {justifyContent: "space-between"}]}>
          <Text>Total Balance: {this.state.showBal ? 'N50' : 'XX'}
          </Text>
          <TouchableOpacity onPress={ () => this.setState({showBal: !this.state.showBal}) }>
          <Text>
            {this.state.showBal ? 'Hide' : 'Show'}
          </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, {justifyContent: "space-around", alignItems: "center", paddingVertical: 20}]}>
          <Item labelText="Bank Transfer" iconName="md-cash" onPress={() => alert('hi')}  />
          <Item labelText="Shopping" iconName="md-timer" onPress={() => alert('hi')}  />
          <Item labelText="Hotel Reservation" iconName="md-power" onPress={() => alert('hi')}  />
          <Item labelText="Save" iconName="md-lock" onPress={() => alert('hi')}  />
        </View>

       </View>
       <View style={[styles.row, {justifyContent: "space-around", alignItems: "center", paddingVertical: 20}]}>
          <Item labelText="Airtime" iconName="md-cash"  />
          <Item labelText="Betting" iconName="md-timer"  />
          <Item labelText="Electricity" iconName="md-power"  />
          <Item labelText="Add Money" iconName="md-lock"  />
        </View>


      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 5,
    backgroundColor: "#8d8d8d7a"

  },
  row: {
    flexDirection: "row"
  }
})
export default Dashboard
