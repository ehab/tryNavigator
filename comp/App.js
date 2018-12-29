/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';
//import { createStackNavigator, createAppContainer } from "react-navigation";
//import About from './About.js';
//import LoginForm from './LoginForm.js';
import AppNavigator from './AppNavigator.js';
//import RootStack from './AppNavigator.js';
//const AppNavigator = createAppContainer(RootStack);
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';


export default class App extends React.Component {
  render() {
    return(
      <Provider store = {createStore(reducers)}>
        <AppNavigator />
      </Provider>
    )
  }
}


//before inroducing redux
//return (<AppNavigator />);
