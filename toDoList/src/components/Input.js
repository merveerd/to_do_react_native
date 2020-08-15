import React from 'react';
import {TextInput} from 'react-native';

const Input = (props) => {
   
return (
  
  <TextInput
    placeholder={props.placeholder}
    placeholderTextColor = "white"
    value = {props.value}
    multiline
    numberOfLines={4}
    onChangeText = {(value) => props.changeText(value)}
    style={[
      { flex: 1,
        backgroundColor: 'pink',
        color: 'white',
        width: '85%',
        height: '40%',
        marginTop: '10%',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign:'center',
      },
      props.style,
    ]}></TextInput>
);}

export default Input;
