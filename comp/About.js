/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Text, View} from 'react-native';
import EhabButton from './common/EhabButton.js';



export default class About extends Component {
  static navigationOptions = {
    title: 'About (Title)',
  };

  constructor() {
    super();
    this.state = {condition: 'Unknown condition'};
  }

  _onPress(){
    //this.props.navigation.navigate('LoginForm');
    //console.log('_onPress code z b-ng accessed!' + Date());
    this.props.navigation.navigate('LoginForm');
  }

  render(){
    return (
      <EhabButton
        ehabButtonCaption = 'Go to LoginForm'
        onPress ={this._onPress.bind(this)}>
        Yallah walak :)
      </EhabButton>

      );
  }
  // correct way >> onPress ={this._onPress.bind(this)}
  //onPress ={this._onPress}>
  //this.props.navigation.navigate('LoginForm');
}
