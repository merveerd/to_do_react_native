import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import Input from '../components/Input'
const ToDoDetails = (props) => {

 const [title, setTitle] = useState();
 const [note, setNote] = useState();
  return (
    <ScrollView>
        <View  style={{alignItems: 'center', justifyContent: 'center', flex: 1, }}>
    <Input value = {title} placeholder = 'Title' style = {styles.title} changeText = {(value)=> setTitle(value)} />
    <Input value = {note} placeholder = 'Notes' style = {styles.note} changeText = {(value)=> setNote(value)} />
      <Button
        title={'Save'}
        onPress={() => {
          props.navigation.navigate('Home');
        }}></Button>
        </View>
    </ScrollView>
  );
};
const styles = {
    title : { fontSize :40, fontWeight : 'bold'},
    note : {fontSize: 25}
}
export default ToDoDetails;
