import React, {useState} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image} from 'react-native';
import Input from '../components/Input';
import UUIDGenerator from 'react-native-uuid-generator';

import { updateList, keepID } from '../actions';

const ToDoDetails = (props) => {

 const [title, setTitle] = useState();
 const [note, setNote] = useState();

//  UUIDGenerator.getRandomUUID((uuid) => {

//  console.log(uniqID)
//   });
//  const key = uniqID;

  return (
    <ScrollView>
        <View  style={{alignItems: 'center', justifyContent: 'center', flex: 1, }}>

    <Input value = {title} placeholder = 'Title' style = {styles.title} changeText = {(value)=> setTitle(value)} />
    <Input value = {note} placeholder = 'Notes' style = {styles.note} changeText = {(value)=> setNote(value)} />
      <Button //get it as a component module
        title={'Save'}
        onPress={() => {
         if( !title || !note){
           alert('Please fill both area');
         }else{ 
           console.log(props)
           props.keepID();
           console.log('AFTER',props);
          props.updateList({title, note, key: props.route.key}); // title: title, note: note
          props.navigation.navigate('Home');
         }
          
        }}></Button>
        </View>
    </ScrollView>
  );
};
const styles = {
    title : { fontSize :40, fontWeight : 'bold'},
    note : {fontSize: 25}
}

const mapStateToProps = ({todoList} /*, ownProps*/) => {
  
    const {loading, todos} = todoList
    return {
    todos, loading
    }
  }

export default connect( mapStateToProps, { updateList, keepID } )(ToDoDetails);

