import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from '../components/Input';

import {updateTodo} from '../actions';
const ToDoUpdate = (props) => {
  const [title, setTitle] = useState(props.route.params?.title);
  const [note, setNote] = useState(props.route.params?.note);
  const key = props.route.params?.key;


  return (
    <ScrollView>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Input
          value={title}
          placeholder="Please edit your title"
          style={styles.title}
          changeText={(value) => setTitle(value)}
        />
        <Input
          value={note}
          placeholder=" Please edit your note"
          style={styles.note}
          changeText={(value) => setNote(value)}
        />
        <Button
          title={'Save'}
          onPress={() => {
            if (!title || !note) {
              alert('Please fill both area');
            } else {
              props.updateTodo({title, note, key}); 
              props.navigation.navigate('Home');
            }
          }}></Button>
      </View>
    </ScrollView>
  );
};

const styles = {
  title: {fontSize: 40, fontWeight: 'bold'},
  note: {fontSize: 25},
};

const mapStateToProps = ({todoList} /*, ownProps*/) => {
  
    const {loading, todos} = todoList
    return {
    todos, loading
    }
  }

export default connect(mapStateToProps, {updateTodo})(ToDoUpdate);
