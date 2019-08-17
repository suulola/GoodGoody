/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Icon from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux"

import SignUp from './src/screens/public/SignUp';
import Dashboard from './src/screens/secure/Dashboard';
import Login from './src/screens/public/Login';
import Home from './src/screens/public/Home';
import Passcode from './src/screens/public/Passcode';
import DrawerNavigator from './src/screens/public/DrawerNavigator';
import Verification from './src/screens/public/Verification';
import SetPasscode from './src/screens/public/SetPasscode';
import Bio from './src/screens/public/Bio';
import Profile from './src/screens/secure/Profile';
import UpdateProfile from './src/screens/secure/UpdateProfile';
import NewsFeed from './src/screens/secure/NewsFeed';
import ShoppingCart from './src/screens/secure/ShoppingCart';
import OtherServices from './src/screens/secure/OtherServices';
import Airtime from './src/screens/secure/Airtime';
import TransactionHistory from './src/screens/secure/TransactionHistory';
import Wallet from './src/screens/secure/Wallet';
import DisplayNews from './src/screens/secure/DisplayNews';
import ConfirmAirtimePurchase from './src/screens/secure/ConfirmAirtimePurchase';
import ImageToText from './src/screens/secure/ImageToText';

import { logOut } from './src/store/action/auth';

class App extends Component {
  render() {
    return (
     this.props.isLoggedIn ? <AppContainerForUser /> :  <AppContainerForGuest />
    )
  }
}

const DrawerStackGuest = createDrawerNavigator({
  Home: createStackNavigator({ Home, Login, Passcode }, {headerMode: "none"}),
  SignUp: createStackNavigator({ SignUp }),
  Login: createStackNavigator({ Verification, Login, Passcode, SetPasscode, Bio }, {headerMode: "none"})
}, {
  initialRouteName: 'Home',
  // contentComponent: DrawerNavigator
})


const tabDashboard = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: () => <Icon name="ios-home" size={25} color="rgba(216, 49, 49, 0.5)"  />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: () => <Icon name="md-contact" size={25} color="rgba(216, 49, 49, 0.5)"  />
    }
  },
  History: {
    screen: TransactionHistory,
    navigationOptions: {
      tabBarIcon: () => <Icon name="ios-calendar" size={25} color="rgba(216, 49, 49, 0.5)"  />
    }
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      tabBarIcon: () => <Icon name="md-lock" size={25} color="rgba(216, 49, 49, 0.5)"  />
    }
  }
}, {
  initialRouteName: "Dashboard"
})

const DrawerStackUser = createDrawerNavigator({
  Dashboard: createStackNavigator({ tabDashboard },{headerMode: "none"}),
  UpdateProfile: createStackNavigator({ UpdateProfile }),
  NewsFeed: createStackNavigator({NewsFeed, DisplayNews}),
  ShoppingCart: createStackNavigator({ShoppingCart}),
  Airtime: createStackNavigator({Airtime, ConfirmAirtimePurchase}),
  OtherServices: createStackNavigator({OtherServices}),
  ImageToText: createStackNavigator({ImageToText}),
}, {
 initialRouteName: 'Dashboard',
})


const RootStackGuest = createStackNavigator({
  DrawerStack: {screen: DrawerStackGuest}
}, {
  initialRouteName: "DrawerStack",
  headerMode: "none"

})

const RootStackUser = createStackNavigator({
  DrawerStack: {screen: DrawerStackUser}
}, {
  headerMode: "none"

})

const AppContainerForGuest = createAppContainer(RootStackGuest)
const AppContainerForUser = createAppContainer(RootStackUser)

const mapStateToProps = state => {
return {
  isLoggedIn: state.auth.isLoggedIn
} }

export default connect(mapStateToProps, {logOut} )(App);
