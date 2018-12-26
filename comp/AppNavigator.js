/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import App from './App.js';
import Home from './Home.js';
import LoginForm from './LoginForm.js';

/*
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
*/

const RootStack = createStackNavigator(
  {
    LoginForm: LoginForm,
    Home:  Home,
    //Home: HomeScreen,
    //App: App,
  },
  {
    initialRouteName: 'LoginForm',
  }
);

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;

//export default RootStack;
