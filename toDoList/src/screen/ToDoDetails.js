import React, {useState} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View, Button, ScrollView, TouchableOpacity} from 'react-native';
import Input from '../components/Input';

import { updateList } from '../actions';
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
            props.updateList({title, note})
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

const mapStateToProps = ({todoList} /*, ownProps*/) => {
  
    const {loading, todos} = todoList
    return {
    todos, loading
    }
  }

export default connect( mapStateToProps, { updateList } )(ToDoDetails);

