/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardItem = (props) => {
  return(
    <View style = {styles.cardStyle}>

        {props.children}
      
    </View>
  );
};


const styles = StyleSheet.create({
  cardStyle: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth:1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row'
    }
});

// exporting through index.js
//export default CardItem;
export {CardItem};
