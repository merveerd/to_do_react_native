import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ToDoDetails = (props) => {
 
    return (
<Button title = {'Save'}onPress = {()=> {props.navigation.navigate('Home')}}>
</Button>
    );
}

export default ToDoDetails;