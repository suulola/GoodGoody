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

import SignUp from './src/screens/public/SignUp';
import Dashboard from './src/screens/secure/Dashboard';
import Login from './src/screens/public/Login';
import Home from './src/screens/public/Home';
import Passcode from './src/screens/public/Passcode';
import DrawerNavigator from './src/screens/public/DrawerNavigator';
import Verification from './src/screens/public/Verification';
import SetPasscode from './src/screens/public/SetPasscode';
import Bio from './src/screens/public/Bio';
import {connect} from "react-redux"
import Profile from './src/screens/secure/Profile';
import { logOut } from './src/store/action/auth';
import NewsFeed from './src/screens/secure/NewsFeed';
import ShoppingCart from './src/screens/secure/ShoppingCart';
import OtherServices from './src/screens/secure/OtherServices';
import Airtime from './src/screens/secure/Airtime';
import TransactionHistory from './src/screens/secure/TransactionHistory';
import Wallet from './src/screens/secure/Wallet';
import DisplayNews from './src/screens/secure/DisplayNews';


class App extends Component {
  render() {
    return (
     this.props.isLoggedIn ? <AppContainerForUser /> :  <AppContainerForGuest />
    )
  }
}

// const App = (props) => {
//   return (
// <AppContainerForGuest />89
//   );
// };

const DrawerStackGuest = createDrawerNavigator({
  Home: createStackNavigator({ Home, Login, Passcode }, {headerMode: "none"}),
  SignUp: createStackNavigator({ SignUp }),
  Login: createStackNavigator({ Verification, Login, Passcode, SetPasscode, Bio }, {headerMode: "none"})
}, {
  initialRouteName: 'Home',
  // contentComponent: DrawerNavigator
})



const tabDashboard = createBottomTabNavigator({
  Dashboard,
  Profile,
  TransactionHistory,
  Wallet
})

const DrawerStackUser = createDrawerNavigator({
  Dashboard: createStackNavigator({ tabDashboard },{headerMode: "none"}),
  NewsFeed: createStackNavigator({NewsFeed, DisplayNews}),
  ShoppingCart: createStackNavigator({ShoppingCart}),
  Airtime: createStackNavigator({Airtime}),
  OtherServices: createStackNavigator({OtherServices}),
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
