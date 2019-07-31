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
import UpdateBio from './src/screens/secure/UpdateBio';
import { logOut } from './src/store/action/auth';

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
  Dashboard: Dashboard,
  Profile: UpdateBio,
//   Logout: (props) => {
//   }
// })

const DrawerStackUser = createDrawerNavigator({
  Dashboard: createStackNavigator({ tabDashboard })
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
