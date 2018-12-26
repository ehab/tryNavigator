/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
// importing using D-structure {} through index.js
// import EhabButton from './common/EhabButton.js';
// import Card from './common/Card';
// import CardItem from './common/CardItem'
import {EhabButton, Card, CardItem} from './common';

export default class LoginForm extends Component {
  static navigationOptions = {
    title: 'LoginForm',
  };

  constructor() {
    super();
    this.state = {condition: 'Unknown condition'};
  }

  _onPress(){
    //this.props.navigation.navigate('LoginForm');
    //console.log('_onPress code z b-ng accessed!' + Date());
    this.props.navigation.navigate('Home');
  }

  render(){
    return (
      <Card>
        <CardItem>
          <EhabButton>
            Login
          </EhabButton>
        </CardItem>
      </Card>

    );
  }
  // correct way >> onPress ={this._onPress.bind(this)}
  //onPress ={this._onPress}>
  //this.props.navigation.navigate('LoginForm');
}
