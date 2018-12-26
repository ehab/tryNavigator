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
       <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style = {styles.buttonText}>
          {props.children}
        </Text>
       </TouchableOpacity>
    );


}




const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: 35,
    marginVertical: 10,
    backgroundColor: 'rgb(10,75,48)',
    justifyContent: 'space-around',
    flex: 1
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  }

});

// exporting through index.js
//export default EhabButton;
 export {EhabButton};
