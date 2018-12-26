/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home (Title)',
  };

  _onLoginPressed(){


  }

        /*    <Button
            title = 'Press here Plz'
            onPress={() => this.props.navigation.navigate('About')}
            />
        */

  render() {
    return (
      <View>
        <Button
        title = 'Press here Plz ... go to Login Home'
        onPress={() => this.props.navigation.navigate('LoginForm')}

        />
      </View>
    );
  }
}
