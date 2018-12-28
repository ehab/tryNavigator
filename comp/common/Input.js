import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const Input = (props) => {
  return(
    <View style={styles.InpuContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect = {false}
        onChangeText = {props.onChangeText}
        style={styles.inputText}/>
    </View>
  );
};

const styles = StyleSheet.create({
  InpuContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  label:  {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  inputText: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2
  }
});

export {Input};
