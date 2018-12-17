/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import About from './About.js';
import TalkToMyHand from './TalkToMyHand.js';


const RootStack = createStackNavigator(
  {
    Home: About,
    TalkToMyHand: TalkToMyHand,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);



export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
