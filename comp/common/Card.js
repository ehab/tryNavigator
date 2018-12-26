/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text, View} from 'react-native';

const Card = (props) => {

  return(
    <View style = {styles.cardStyle}><Text> {props.children} </Text></View>
  );
}


const styles = StyleSheet.create({
  cardStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    }
});

// exporting through index.js
//export default Card;
export {Card};
