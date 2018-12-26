/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const EhabButton = (props) => {
  // to easier understand
  //<TouchableOpacity style={styles.button} onPress={props.m7a7a}>
  //       {props.ehabButtonCaption} Ana  {props.children}
  return (
       <TouchableOpacity style={styles.button} onPress={props.onPress}><Text> {props.children} </Text></TouchableOpacity>
    );


}




const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderColor: 'red',
    borderBottomColor: 'green',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    marginTop: 50,
    marginTop: 50,

  },

})

// exporting through index.js
//export default EhabButton;
 export {EhabButton};
