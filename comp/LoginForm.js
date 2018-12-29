/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
// importing using D-structure {} through index.js
// import EhabButton from './common/EhabButton.js';
// import Card from './common/Card';
// import CardItem from './common/CardItem'
import {EhabButton, Card, CardItem, Input} from './common';
//commented and imported connect!
//import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {loginUser} from './actions';

class LoginForm extends Component {
  static navigationOptions = {
    title: 'LoginForm',
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  //this.props.navigation.navigate('LoginForm');
  //console.log('_onPress code z b-ng accessed!' + Date());
  //this.props.navigation.navigate('Home');
  //console.log('UserName: ${this.state.username} Password: is {thi.state.password}');
  _onLoginPressed() {
    // console.log(this.state.username)
    // after introducing redux
    const {username, password} = this.state;
    // same as const username = this.state.username and
    //         const password = this.state.password
    this.props.loginUser({username, password});
  }


  render(){
    return (
      <Card>

        <CardItem>
          <Input
          label = 'email'
          placeholder = 'Enter your email'
          secureTextEntry={false}
          onChangeText={(name) => this.setState({username: name})}
        />
        </CardItem>

        <CardItem>
          <Input
          label = 'Password'
          placeholder = 'Enter your Password'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          //cleaner format sice username: username
          //onChangeText={(password) => this.setState({password: password})}
        />
        </CardItem>

        <CardItem>
          <EhabButton onPress={() => this._onLoginPressed()}>
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

//export default LoginForm;
export default connect(null, {loginUser})(LoginForm);
